/**
 * rehype 插件：正文关键词自动内链（SEO 安全版）
 *
 * 规则：
 *  - 「Telegram[空格?]电脑版下载」→ /windows/
 *  - 「Telegram[空格?]下载」      → 主页 /
 *  - 每个目标 URL 每篇只链「首次出现」一次（first-link priority，避免过度优化）
 *  - 「下载」后若紧跟中文/字母则不匹配（规避「下载安全/下载页/下载源」等不同短语）
 *  - 跳过标题(h1-h6)、代码、以及已有的 <a> 链接；若文中已存在指向同一 URL 的链接，则不再自动追加
 *
 * 仅作用于 Markdown 内容集合（博客 / 教程 / FAQ 等）。.astro 数据驱动页另由
 * 导航、页脚链接矩阵与 RelatedLinks 等精选内链承载。
 */

const SKIP_TAGS = new Set(['a', 'code', 'pre', 'script', 'style', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

// 顺序无关（按最左匹配选择），但更具体的词放前面便于阅读
const RULES = [
  { href: '/windows/', re: /(?<![A-Za-z])Telegram\s?电脑版下载(?![一-龥A-Za-z])/i },
  { href: '/', re: /(?<![A-Za-z])Telegram\s?下载(?![一-龥A-Za-z])/i },
];

export default function rehypeAutolinkKeywords() {
  return (tree) => {
    /** 本篇已链过的目标 URL */
    const linked = new Set();

    /** 把一段纯文本按规则切分为 [text, <a>, text, ...]；首次匹配后递归处理剩余部分 */
    function processText(value) {
      let best = null;
      for (const rule of RULES) {
        if (linked.has(rule.href)) continue;
        const m = rule.re.exec(value);
        if (m && (best === null || m.index < best.index)) {
          best = { index: m.index, matched: m[0], href: rule.href };
        }
      }
      if (!best) return [{ type: 'text', value }];

      linked.add(best.href);
      const before = value.slice(0, best.index);
      const after = value.slice(best.index + best.matched.length);
      const out = [];
      if (before) out.push({ type: 'text', value: before });
      out.push({
        type: 'element',
        tagName: 'a',
        properties: { href: best.href, className: ['autolink'] },
        children: [{ type: 'text', value: best.matched }],
      });
      if (after) out.push(...processText(after));
      return out;
    }

    function walk(node, underSkip) {
      if (!node.children || node.children.length === 0) return;
      const next = [];
      for (const child of node.children) {
        if (child.type === 'text' && !underSkip) {
          next.push(...processText(child.value));
          continue;
        }
        if (child.type === 'element') {
          // 记录已存在、指向目标 URL 的链接，避免重复自动追加
          if (child.tagName === 'a' && child.properties && typeof child.properties.href === 'string') {
            const href = child.properties.href.replace(/[?#].*$/, '');
            for (const rule of RULES) if (rule.href === href) linked.add(href);
          }
          walk(child, underSkip || SKIP_TAGS.has(child.tagName));
        }
        next.push(child);
      }
      node.children = next;
    }

    walk(tree, false);
  };
}
