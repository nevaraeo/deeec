// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 生产域名 —— 用于 canonical / sitemap / RSS / OG 绝对地址
const SITE = 'https://telegrams.ltd';

export default defineConfig({
  site: SITE,
  // 目录式 URL：/windows/  /faq/  对 Google 收录最友好
  trailingSlash: 'always',
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
      lastmod: new Date(),
      // 排除 404 与薄标签页（标签页已 noindex，不应进 sitemap）
      filter: (page) => !page.includes('/404') && !page.includes('/tags'),
      serialize(item) {
        const u = item.url;
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
