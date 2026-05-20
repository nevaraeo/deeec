import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';
import { PLATFORM_LIST } from '../data/platforms';
import { KEYWORD_LIST } from '../data/keywords';
import { MATRIX } from '../data/matrix';

/**
 * 纯文本 sitemap：一行一个 URL（Google 支持的 text sitemap 格式）。
 * 自动列出全部可索引页，排除已 noindex 的标签页。
 * 访问地址：/sitemap.txt
 */
export const GET: APIRoute = async () => {
  const paths: string[] = ['/'];

  // 平台下载页 + 关键词着陆页
  PLATFORM_LIST.forEach((p) => paths.push(p.slug));
  KEYWORD_LIST.forEach((k) => paths.push(k.slug));

  // 聚合 / 列表页
  paths.push('/downloads/', '/faq/', '/blog/', '/guides/', '/category/');

  // Programmatic 长尾页
  MATRIX.forEach((m) => paths.push(`/telegram-download-for-${m.combo}/`));

  // 内容集合
  const downloads = await getCollection('downloads');
  downloads.forEach((d) => paths.push(`/downloads/${d.id}/`));

  const blog = await getCollection('blog', ({ data }) => !data.draft);
  blog.forEach((b) => paths.push(`/blog/${b.id}/`));

  const guides = await getCollection('guides', ({ data }) => !data.draft);
  guides.forEach((g) => paths.push(`/guides/${g.id}/`));

  // 分类页（标签页已 noindex，不收录）
  const cats = new Set<string>();
  [...blog, ...guides].forEach((e) => cats.add(e.data.category));
  [...cats].forEach((c) => paths.push(`/category/${encodeURIComponent(c)}/`));

  // 去重 → 绝对地址 → 排序 → 一行一个
  const urls = [...new Set(paths)]
    .map((p) => new URL(p, SITE.url).href)
    .sort();

  return new Response(urls.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
