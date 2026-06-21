# Telegram 中文下载导航站 · telegramzhvip.com

一个面向 **Google SEO + GEO（AI 搜索）+ Programmatic SEO** 的 Telegram（纸飞机）中文下载导航站。

- 技术栈：**Astro 5（SSG 纯静态 HTML）+ TailwindCSS 4 + Markdown Content Collections**
- 部署：**Vercel**（零配置静态托管，边缘缓存）
- 目标：让 Google 将本站识别为「Telegram 中文下载导航站」，而非普通软件下载站

---

## ✨ 特性

| 能力 | 说明 |
| --- | --- |
| 纯静态输出 | `astro build` 生成纯 HTML，TTFB 极低，Core Web Vitals 友好 |
| 自动 SEO | 每页自动 `title / description / canonical / OG / Twitter / hreflang` |
| Schema.org | `WebSite` / `Organization` / `BreadcrumbList` / `FAQPage` / `SoftwareApplication` / `DownloadAction` / `BlogPosting` / `HowTo` |
| Programmatic SEO | `平台 × 系统版本` 矩阵自动批量生成长尾页（`/telegram-download-for-windows-11/` …） |
| 强语义 | 全站合理植入「纸飞机 / 飞机 / Telegram 中文 / Telegram 中文版」，建立 `纸飞机=Telegram` 实体关联 |
| 内容系统 | `downloads / blog / guides / faq` 四个 Markdown 集合，自动 slug、分类、标签、内链 |
| Sitemap / RSS / robots | 自动生成 `sitemap-index.xml`、`rss.xml`、`robots.txt`（含 AI 抓取器放行） |
| 零重型 JS | 移动菜单 / FAQ 折叠均为纯 CSS，几乎零客户端脚本 |

---

## 🚀 快速开始

```bash
npm install
npm run dev        # 本地开发  http://localhost:4321
npm run build      # 生产构建 → dist/
npm run preview    # 本地预览构建产物
npm run check      # 类型检查
```

> 已安装 Node 18+ 即可（推荐 Node 20/22/24）。

---

## 🌐 部署到 Vercel

本仓库已含 `vercel.json`，Vercel 会自动识别 Astro 框架：

1. 将代码推到 GitHub/GitLab；
2. Vercel 控制台 **Import Project** → 选择仓库；
3. 框架自动识别为 Astro，Build Command `npm run build`，Output `dist`；
4. 绑定域名 `telegramzhvip.com`。

或使用 CLI：

```bash
npm i -g vercel
vercel            # 预览部署
vercel --prod     # 生产部署
```

部署后请在 [Google Search Console](https://search.google.com/search-console) 提交：
`https://www.telegramzhvip.com/sitemap-index.xml`

---

## 📁 目录结构

```
.
├── astro.config.mjs          # 站点配置（site/trailingSlash/sitemap/tailwind）
├── vercel.json               # Vercel 部署 + 缓存/安全响应头
├── tsconfig.json
├── package.json
├── public/
│   ├── robots.txt            # 含主流 AI 抓取器放行
│   ├── favicon.svg
│   └── og-default.png        # 默认社交分享图 1200×630（由 npm run og 生成）
└── src/
    ├── content.config.ts     # 4 个内容集合 Zod Schema
    ├── styles/global.css     # Tailwind 4 主题令牌 + 正文排版
    ├── data/                 # 单一可信源
    │   ├── site.ts           # 域名/导航/页脚/官方下载地址
    │   ├── platforms.ts      # 5 大平台「金钱页」内容
    │   ├── keywords.ts       # 5 个关键词语义着陆页
    │   ├── matrix.ts         # Programmatic SEO 矩阵
    │   └── faqs.ts           # 复用核心 FAQ
    ├── components/           # SEO / Schema / UI 组件
    ├── layouts/              # BaseLayout / ArticleLayout
    ├── pages/                # 路由（见下）
    └── content/              # Markdown 内容
        ├── downloads/  blog/  guides/  faq/
```

### 路由一览

| 路径 | 说明 |
| --- | --- |
| `/` | 首页（Hero + 平台入口 + 介绍 + FAQ + 教程 + CTA） |
| `/windows/` `/android/` `/ios/` `/mac/` `/linux/` | 平台下载金钱页 |
| `/telegram-chinese/` `/telegram-chinese-download/` | 中文版关键词页 |
| `/paper-airplane-download/` `/paper-airplane-chinese/` `/airplane-download/` | 纸飞机/飞机关键词页 |
| `/telegram-download-for-<combo>/` | **Programmatic** 长尾页（windows-11、android-15…） |
| `/downloads/` | 下载中心（聚合主平台 + 长尾 + 关键词） |
| `/downloads/<slug>/` | downloads 集合详情页 |
| `/blog/` `/blog/<slug>/` | 博客列表 / 详情 |
| `/guides/` `/guides/<slug>/` | 教程列表 / 详情 |
| `/faq/` | 聚合 FAQ（含 FAQPage Schema） |
| `/category/` `/category/<c>/` `/tags/` `/tags/<t>/` | 分类与标签 |
| `/sitemap-index.xml` `/rss.xml` `/robots.txt` | SEO 基础设施 |

---

## ➕ 如何扩展（无限加页）

**新增一篇博客 / 教程**：在 `src/content/blog/`（或 `guides/`）新建 `.md`，按现有 frontmatter 填写即可，自动进入列表、分类、标签、RSS、Sitemap。

**新增一个长尾下载页**：编辑 `src/data/matrix.ts` 的 `RAW` 数组，加一条 `{ combo, platform, osVersion, highlight, note }`，构建后自动生成 `/telegram-download-for-<combo>/` 及其 Schema。

**新增一个关键词专题页**：在 `src/data/keywords.ts` 增加条目，并在 `src/pages/` 下建一个引用它的 `index.astro`（参考现有写法）。

**调整全站导航/页脚/官方链接**：只改 `src/data/site.ts`。

---

## 🔒 关于下载与合规

本站为**第三方下载导航**，所有下载按钮均 `rel="nofollow noopener"` 指向 **Telegram 官方源**（`telegram.org` / App Store / Google Play），不托管、不二次打包任何安装包。Telegram® 为 Telegram FZ-LLC 商标，本站与其无隶属关系。

---

## 🛠 SEO / GEO 检查清单（上线后）

- [ ] Google Search Console 提交 `sitemap-index.xml`
- [ ] 用 [Rich Results Test](https://search.google.com/test/rich-results) 验证 FAQ / Breadcrumb / SoftwareApplication 结构化数据
- [ ] PageSpeed Insights 跑首页与 `/windows/`，确认 CWV 全绿
- [x] 默认社交分享图为 1200×630 PNG（`public/og-default.png`，改品牌后用 `npm run og` 重新生成）
- [ ] 视需要在 `src/data/` 扩充更多长尾与关键词页
```
