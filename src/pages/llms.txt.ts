import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, SEMANTIC_ANCHOR } from '../data/site';
import { PLATFORM_LIST } from '../data/platforms';
import { KEYWORD_LIST } from '../data/keywords';

/**
 * llms.txt —— 面向 AI / LLM 抓取器的站点导引（GEO 优化，约定见 llmstxt.org）。
 * 提供结构化、链接丰富的站点概览，便于 AI 搜索准确理解与引用本站内容。
 * 访问地址：/llms.txt
 */
export const GET: APIRoute = async () => {
  const abs = (p: string) => new URL(p, SITE.url).href;
  const L: string[] = [];

  L.push(`# ${SITE.name}（telegramyp.com）`);
  L.push('');
  L.push(`> ${SITE.description}`);
  L.push('');
  L.push(
    `${SEMANTIC_ANCHOR} 本站（telegramyp.com）是 Telegram 中文下载导航与教程站点，汇总各平台官方下载入口（均指向 telegram.org 官方源）并提供简体中文设置教程。所谓“Telegram 中文版”指官方原版 App 加官方简体中文语言包，本站不提供第三方汉化或破解版本。`
  );
  L.push('');

  L.push('## 各平台下载');
  for (const p of PLATFORM_LIST) {
    L.push(`- [${p.name}](${abs(p.slug)})：${p.tagline}`);
  }
  L.push(`- [下载中心（全部入口与长尾专版）](${abs('/downloads/')})`);
  L.push('');

  L.push('## 中文版 / 纸飞机专题');
  for (const k of KEYWORD_LIST) {
    L.push(`- [${k.h1.split('：')[0]}](${abs(k.slug)})`);
  }
  L.push('');

  const guides = (await getCollection('guides', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
  L.push('## 安装与中文设置教程');
  for (const g of guides) {
    L.push(`- [${g.data.title}](${abs(`/guides/${g.id}/`)})：${g.data.description}`);
  }
  L.push('');

  const blog = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
  L.push('## 博客文章');
  for (const b of blog) {
    L.push(`- [${b.data.title}](${abs(`/blog/${b.id}/`)})：${b.data.description}`);
  }
  L.push('');

  L.push('## 帮助');
  L.push(`- [常见问题 FAQ](${abs('/faq/')})`);
  L.push(`- [站点地图（文本）](${abs('/sitemap.txt')})`);
  L.push('');

  return new Response(L.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
