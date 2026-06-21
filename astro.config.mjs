// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync, readdirSync } from 'node:fs';
import rehypeAutolinkKeywords from './src/lib/rehype-autolink-keywords.mjs';

// 生产域名 —— 用于 canonical / sitemap / RSS / OG 绝对地址
const SITE = 'https://www.telegramzhvip.com';

// 站点级“稳定 lastmod”：静态 / 数据驱动页面（首页、平台页、关键词页、列表页等）统一使用，
// 关键是它【不随每次构建变动】，避免谷歌因“全站永远同时间修改”而不信任 lastmod。
// 做重大改版后，把这里手动更新为当天日期即可。
const SITE_LASTMOD = '2026-05-22';

/**
 * 读取 content 集合各篇 frontmatter 的真实更新日期，构建「URL 路径 -> 日期」映射。
 * 取值优先级：updatedDate > pubDate > 站点稳定日期。
 * @returns {Record<string, string>}
 */
function buildArticleLastmodMap() {
  /** @type {Record<string, string>} */
  const map = {};
  const collections = [
    { dir: 'src/content/blog', base: '/blog' },
    { dir: 'src/content/guides', base: '/guides' },
  ];
  for (const { dir, base } of collections) {
    /** @type {string[]} */
    let files = [];
    try {
      files = readdirSync(new URL(`./${dir}/`, import.meta.url)).filter((f) => f.endsWith('.md'));
    } catch {
      continue; // 目录不存在则跳过
    }
    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      const raw = readFileSync(new URL(`./${dir}/${file}`, import.meta.url), 'utf-8');
      const fm = raw.split('---')[1] ?? ''; // 第一段即 frontmatter
      const upd = fm.match(/^updatedDate:\s*(.+)$/m);
      const pub = fm.match(/^pubDate:\s*(.+)$/m);
      const date = ((upd && upd[1]) || (pub && pub[1]) || SITE_LASTMOD).trim().replace(/['"]/g, '');
      map[`${base}/${slug}/`] = date;
    }
  }
  return map;
}

const ARTICLE_LASTMOD = buildArticleLastmodMap();

/**
 * 给定 sitemap 条目绝对 URL，返回其 lastmod（ISO 字符串）。
 * 文章用 frontmatter 真实日期，其余用站点稳定日期。
 * @param {string} url
 * @returns {string}
 */
function lastmodFor(url) {
  const path = url.replace(SITE, '');
  const date = ARTICLE_LASTMOD[path] ?? SITE_LASTMOD;
  return new Date(date).toISOString();
}

export default defineConfig({
  site: SITE,
  // 目录式 URL：/windows/  /faq/  对 Google 收录最友好
  trailingSlash: 'always',
  // 正文关键词自动内链（首次出现、SEO 安全）：telegram下载→主页、telegram电脑版下载→/windows/
  markdown: {
    rehypePlugins: [rehypeAutolinkKeywords],
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  // 全站默认预取，提升导航速度（仅 hover/viewport，零额外阻塞）
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      // 排除 404、薄标签页、与平台页重复的下载详情页（均 noindex，不应进 sitemap）
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/tags') &&
        !page.includes('/downloads/telegram-'),
      serialize(item) {
        const u = item.url;
        // 精确新鲜度信号：文章用 frontmatter 真实日期，静态/数据页用站点稳定日期
        item.lastmod = lastmodFor(u);
        if (u === `${SITE}/`) item.priority = 1.0;
        else if (/\/(windows|android|ios|mac|linux|downloads|telegram-chinese|telegram-chinese-download|paper-airplane-download|paper-airplane-chinese|airplane-download)\/$/.test(u))
          item.priority = 0.9;
        else if (u.includes('/telegram-download-for-')) item.priority = 0.8;
        else if (u.includes('/blog/') || u.includes('/guides/')) item.priority = 0.7;
        else if (u.includes('/category')) item.priority = 0.5;
        else item.priority = 0.6;
        return item;
      },
    }),
  ],
  vite: {
    // cast: 已知的 @tailwindcss/vite 与 Astro 内置 Vite 类型版本偏移（仅类型层，不影响构建）
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  compressHTML: true,
});
