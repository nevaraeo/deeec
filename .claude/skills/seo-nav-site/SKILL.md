---
name: seo-nav-site
description: Scaffold a niche software-download / landing navigation site with strong SEO + GEO + Programmatic SEO baseline. Stack — Astro 5 SSG + TailwindCSS 4 + Markdown content collections, deployed on Vercel. Includes data-driven platform pages, keyword/alias landing pages, programmatic long-tail matrix, full Schema.org JSON-LD (Organization/WebSite/SoftwareApplication/FAQPage/BreadcrumbList/BlogPosting), sitemap with per-page precise lastmod, llms.txt for AI search, robots with AI-crawler allowlist, and domain-migration 301 redirects. Use when the user asks to build or replicate this kind of site — phrases like "复刻这个项目", "再做一个 XXX 下载站", "做一个 XXX 下载导航/落地页", "build a programmatic SEO landing site", "scaffold a niche download site", "make a Vercel SEO site like telegrams.ltd / ldmnq.ltd", or when they start a fresh empty repo with similar intent.
---

# SEO Navigation Site — Programmatic SEO + GEO Playbook

A reusable blueprint for building a niche software-download / landing navigation site that ranks well on Google AND is well-cited by AI search engines (GEO). Proven on a production Telegram download navigation site: 1 head keyword + multiple aliases + 5 cross-platform pages + programmatic long-tail matrix + 19 articles, all on a single Astro static site.

The skill bundles:
- **This playbook (SKILL.md)** — how to apply the blueprint to a new niche
- **`references/`** — a snapshot of the production codebase (architectural skeleton; niche-specific text is preserved as concrete worked examples)

---

## When to use this skill

Trigger this skill when the user says anything along these lines:
- "复刻这个项目 / 按这个模板再做一个 / 做一个 XXX 下载导航站"
- "做个 XXX(软件/App)的下载站 / 落地页 / 中文版下载站"
- "build a new programmatic SEO site for XXX"
- "scaffold a niche download navigation site"
- "make me a Vercel SEO site like telegrams.ltd / ldmnq.ltd"
- Starts an empty Astro project + mentions SEO/GEO/landing/download

If the user is editing an EXISTING niche site (just changing a string here or there), do NOT trigger this skill — only trigger for green-field or full replication.

---

## Step 0 — Inputs to collect first

Before writing any code, gather these inputs from the user (use `AskUserQuestion` for clarity):

| Input | Example | Used for |
|---|---|---|
| 品牌 / 软件名 (brand) | "Telegram" / "雷电模拟器 / LDPlayer" | 全站品牌词 |
| 中文常用别名 (aliases) | ["纸飞机","飞机","电报"] / ["LD","安卓模拟器"] | 别名落地页 + 实体语义锚 |
| 域名 (domain) | "telegramyp.com" | canonical / sitemap / og:url |
| 站点中文名 (site name) | "Telegram中文下载" | 品牌名 + og:site_name |
| 头部目标关键词 (head keyword) | "telegram下载" / "雷电模拟器下载" | 首页 SEO 标题 + 描述 |
| 平台列表 (platforms) | `["windows","android","ios","mac","linux"]` 或子集 | 平台金钱页生成 |
| 品牌主色 (brand color) | "#229ed9" (tg-500) | Tailwind 主题 token |
| 各平台官方下载地址 (OFFICIAL) | telegram.org/dl/desktop/win64 等 | OFFICIAL 常量(数据保留;按钮可不跳) |
| OG 图主文案 | "<品牌名> 中文下载" | scripts/generate-og.mjs 渲染 |
| 旧域名(如有迁移) | "telegrams.ltd" | vercel.json host-based 301 |

如果用户没明确给,**不要瞎猜**,挨个问。"品牌别名"和"官方下载地址"尤其关键,直接决定数据层结构。

---

## Architecture at a glance

```
project/
├── astro.config.mjs        # Astro + Tailwind + Sitemap(精确 lastmod)
├── vercel.json             # Headers + 域名迁移 redirects + cache rules
├── package.json            # Astro 5 + Tailwind 4 + RSS + Sitemap
├── tsconfig.json
├── public/
│   ├── robots.txt          # 含 AI 抓取器放行(GPTBot/Perplexity/ClaudeBot…)
│   ├── og-default.png      # 1200×630(由 npm run og 生成)
│   └── logo.png
├── scripts/
│   └── generate-og.mjs     # @napi-rs/canvas 渲染 OG 图 + logo(支持中文字体)
└── src/
    ├── content.config.ts   # 4 个集合 Zod schema: downloads/blog/guides/faq
    ├── styles/global.css   # Tailwind 4 @theme tokens + 正文排版
    ├── data/               # ★ 单一可信源
    │   ├── site.ts         # 域名/导航/页脚链接矩阵/官方下载地址/SEMANTIC_ANCHOR
    │   ├── platforms.ts    # 5 大平台「金钱页」数据
    │   ├── keywords.ts     # 关键词语义落地页(别名词承载)
    │   ├── matrix.ts       # Programmatic SEO 长尾矩阵
    │   └── faqs.ts         # 跨页复用 FAQ
    ├── layouts/
    │   ├── BaseLayout.astro    # 全站 head + Org/WebSite @graph + verification
    │   └── ArticleLayout.astro # 文章布局 + TOC + 阅读时间 + 作者 + JSON-LD
    ├── components/             # SEO/Schema/UI 组件 (~22 个)
    └── pages/
        ├── index.astro                          # 首页
        ├── {windows,android,ios,mac,linux}/index.astro  # 平台金钱页
        ├── <keyword>/index.astro                # 关键词/别名落地页(由 keywords.ts 驱动)
        ├── telegram-download-for-[combo].astro  # 程序化长尾路由(由 matrix.ts 生成)
        ├── downloads/{index,[...slug]}.astro
        ├── blog/{index,[...slug]}.astro
        ├── guides/{index,[...slug]}.astro
        ├── faq/index.astro
        ├── category/{index,[category]}.astro
        ├── tags/{index,[tag]}.astro             # noindex
        ├── sitemap.txt.ts                       # 纯文本 sitemap
        ├── llms.txt.ts                          # GEO/AI 搜索引导
        ├── rss.xml.js                           # 博客 RSS
        └── 404.astro
```

### 核心模式 1 — 数据层是单一可信源

所有"跨页面复用 + 按 niche 变化"的内容集中在 `src/data/`：
- `site.ts` —— 域名/品牌/导航/页脚链接矩阵/官方下载地址/`SEMANTIC_ANCHOR`(品牌别名强语义锚句)
- `platforms.ts` —— 平台数据 + 平台级 FAQ + 更新日志
- `keywords.ts` —— `KEYWORD_PAGES` 字典(slug → {h1,title,description,lead,sections,faqs,related})
- `matrix.ts` —— `RAW` 矩阵(每条 = 一个 /<verb>-for-<combo>/ 长尾页)
- `faqs.ts` —— CORE_FAQS、DOWNLOAD_FAQS

**改 niche 时，90% 的"内容侧"工作就是在这 5 个文件里调字段。页面文件几乎不用动。**

### 核心模式 2 — 三类页面 archetype

| Archetype | 路由 | 作用 | 数据源 |
|---|---|---|---|
| 平台金钱页 | `/windows/`, `/android/`, ... | 主要排名页(`X下载`) | `platforms.ts` |
| 关键词/别名页 | `/<keyword>/` | 别名/同义词独占落地页(避免蚕食首页) | `keywords.ts` |
| 程序化长尾页 | `/<verb>-for-<combo>/` | 平台×系统版本组合(Windows 11/Android 15…) | `matrix.ts` |

加上 **首页 + 教程/博客 + 列表(category/tags/faq) + 静态(404/llms/sitemap/rss)**,完整覆盖搜索意图。

### 核心模式 3 — JSON-LD 实体图谱

- BaseLayout 全站注入 `@graph: [Organization(#organization), WebSite(#website)]`
- 文章 `author/publisher/isPartOf` 都用 `@id` 引用上面两个实体
- 每页 SoftwareApplication / FAQPage / BreadcrumbList 局部追加
- 实体图谱稳定,Google 能可靠识别"这是哪个品牌、谁运营、组织信息"

### 核心模式 4 — 精确 lastmod

`astro.config.mjs` 里:
- 在 config 加载期 `buildArticleLastmodMap()` 读 `src/content/{blog,guides}/*.md` 的 frontmatter,取 `updatedDate > pubDate`
- `serialize(item)` 里:文章用 map 里的真实日期,其余用 `SITE_LASTMOD` 稳定常量
- **永远不要写 `lastmod: new Date()`** —— Google 会判定"全站永远同时间修改"而不信任 lastmod

### 核心模式 5 — GEO/AI 搜索友好

- `src/pages/llms.txt.ts` —— 按 llmstxt.org 约定生成 AI 抓取友好的站点导引
- `public/robots.txt` —— 显式 `Allow:` GPTBot / OAI-SearchBot / PerplexityBot / ClaudeBot / Claude-Web / Google-Extended / Applebot-Extended

---

## Step-by-step build (greenfield)

### 1. 初始化项目

```bash
mkdir <new-project> && cd <new-project>
git init
npm init -y
npm install astro@^5 @astrojs/sitemap @astrojs/rss @tailwindcss/vite tailwindcss
npm install -D @astrojs/check typescript @napi-rs/canvas
```

### 2. 复制 references 骨架

把 references/ 里的所有非 `content/` 文件原样复制到新项目根:
```bash
# 在 skill 目录里
cp -r references/* <new-project>/
```

### 3. 配置 package.json scripts

```json
"scripts": {
  "dev": "astro dev",
  "start": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "check": "astro check",
  "og": "node scripts/generate-og.mjs",
  "astro": "astro"
}
```

### 4. 创建空内容集合占位

```bash
mkdir -p src/content/{blog,guides,downloads,faq}
```
照 `src/content.config.ts` 的 Zod schema 各放至少一篇示例 markdown。否则 `getCollection()` 会报错。

### 5. 替换 niche 参数(见下方 checklist)

按 A → B → C → D → E 顺序改。先改 `src/data/`,后改组件,最后写 markdown。

### 6. 生成 OG 图 + logo

```bash
npm run og
```
确认 `scripts/generate-og.mjs` 里的中文字体路径在目标机器存在:
- Windows: `C:/Windows/Fonts/simhei.ttf` ✓
- macOS: 改 `/System/Library/Fonts/STHeiti Medium.ttc` 或 `/Library/Fonts/Songti.ttc`
- Linux: 装 `fonts-noto-cjk-sc` 后用 `/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc` 等

### 7. 构建 + 类型检查

```bash
npm run build
npm run check
```
对 `dist/index.html` grep 检查 canonical / og:url / JSON-LD 都对(详见下方 Verification)。

### 8. 部署 + 域名 + GSC

```bash
git add -A && git commit -m "init <brand>"
git remote add origin <github-url>
git push -u origin main
```
- Vercel Import Project → Astro 自动识别
- Vercel → Settings → Domains: 加域名并设 Primary
- DNS 注册商指向 Vercel(A 76.76.21.21 或 CNAME cname.vercel-dns.com)
- GSC 加资源(meta verification 已埋好)→ 提交 sitemap-index.xml → 对核心页"请求编入索引"

---

## Per-niche customization checklist

按以下顺序改。**先数据层、后组件、最后 markdown 内容**。

### A. 必改 — 品牌 + 域名（先做这一组）
- [ ] `src/data/site.ts`
  - `SITE.{name, domain, url, title, description, keywords}` 全改
  - `publisher.{name, url}` 改为新域名
  - `NAV` 主菜单(如平台不同要裁剪)
  - `FOOTER_LINKS` 链接矩阵
  - `SEMANTIC_ANCHOR` —— 一句"品牌(俗名/别名/英文)是一款 X" 的实体描述
  - `OFFICIAL` —— 官方下载地址
  - `Platform` 联合类型 —— 平台减少时同步
- [ ] `astro.config.mjs` —— `SITE` 常量(新域名)
- [ ] `vercel.json` —— 如有旧域要迁,添加 host-based 301/308 redirect
- [ ] `public/robots.txt` —— Sitemap URL 改新域
- [ ] `package.json` —— `name`, `description`
- [ ] `scripts/generate-og.mjs` —— OG 图和 logo 上的文案
- [ ] `src/components/Header.astro` —— Logo SVG + 站点名
- [ ] `src/components/Footer.astro` —— 页脚一句话介绍 + 版权商标声明
- [ ] `src/components/Hero.astro` —— Hero H1 渐变词 + 副标题 + CTA 按钮
- [ ] `src/layouts/BaseLayout.astro`
  - `alternateName` 列表(品牌别名集合)
  - `knowsAbout`(品牌 + 别名 + "下载"/"中文设置"等动作词)
  - `google-site-verification` token

### B. 必改 — 内容数据
- [ ] `src/data/platforms.ts` —— 每个平台 entry: name/version/fileSize/req/deepDive/faqs/changelog
- [ ] `src/data/keywords.ts` —— 每个别名/同义词一个 KEYWORD_PAGES entry,包含 slug/title/description/h1/lead/sections/bullets/faqs/related
- [ ] `src/data/matrix.ts` —— `RAW` 矩阵每条的 combo/platform/osVersion/highlight/detail/note
- [ ] `src/data/faqs.ts` —— `CORE_FAQS` + `DOWNLOAD_FAQS`

### C. 必改 — 路由
- [ ] `src/pages/<keyword>/index.astro` —— 每个 KEYWORD_PAGES key 一个目录,里面 `index.astro` 用 KeywordView 渲染对应 entry。新 niche 的别名词不同 → 删旧的 + 新建对应的
- [ ] `src/pages/<verb>-for-[combo].astro` —— 长尾页路由名按 niche 改(`telegram-download-for-` → `ldplayer-download-for-` 等),`getStaticPaths` 从 `MATRIX` 取
- [ ] `src/pages/<platform>/index.astro` —— niche 不需要的平台直接删

### D. 必改 — Markdown 内容
- [ ] `src/content/blog/*.md` —— 全部重写(每篇 frontmatter 含 pubDate/updatedDate/category/tags/faqs/description)
- [ ] `src/content/guides/*.md` —— 重写(含 platform/difficulty)
- [ ] `src/content/downloads/*.md` —— 重写(含 platform/osLabel/version/downloadUrl)
- [ ] `src/content/faq/*.md` —— 重写(含 category/order)

### E. 可选优化
- [ ] `src/styles/global.css` —— @theme 改主品牌色 `tg-{50…900}`(参考 tailwind color generator)
- [ ] `src/components/Icon.astro` —— 加品牌特有图标
- [ ] `src/content.config.ts` —— 改 author 默认值

---

## Bundled references guide

`references/` 镜像了一个生产级 Telegram 下载导航站的源码(不含 markdown 内容)。结构:

```
references/                          → 新项目根目录(整体 cp)
├── astro.config.mjs                 → astro.config.mjs
├── vercel.json                      → vercel.json
├── package.json                     → 参考依赖+脚本(改 name/description)
├── tsconfig.json                    → tsconfig.json
├── public/robots.txt                → public/robots.txt
├── scripts/generate-og.mjs          → scripts/generate-og.mjs
└── src/                             → src/
    ├── content.config.ts
    ├── styles/global.css
    ├── data/{site,platforms,keywords,matrix,faqs}.ts
    ├── layouts/{Base,Article}Layout.astro
    ├── components/*.astro (~22)
    └── pages/*.{astro,ts,js}
```

**用法**:
- 不确定某组件实现 → read 对应 references 文件
- 用户说"按这套模板做" → 直接 `cp -r references/* <new-project>/`,然后跑 niche 替换 checklist
- references 里具体文案是 Telegram-themed,是"如何写"的范例,不是"必须保留"的内容

---

## Verification (post-scaffold)

构建后逐项 grep dist/ 确认:

```bash
npm run build

# 1) 元信息层
grep -o '<title>[^<]*</title>' dist/index.html
grep -o '<meta name="description"[^>]*>' dist/index.html
grep -o '<link rel="canonical"[^>]*>' dist/index.html
grep -o '<meta property="og:url"[^>]*>' dist/index.html
# 都应是新域名 + 新品牌内容,无残留

# 2) Schema.org JSON-LD
grep -oE '"@type":"[^"]*"' dist/index.html | sort -u
# 应包含至少: Organization / WebSite / SoftwareApplication / ItemList / FAQPage / BreadcrumbList

# 3) Sitemap 不是"全站同一时间戳"
grep -oE '<lastmod>[^<]*</lastmod>' dist/sitemap-0.xml | sort -u | wc -l
# 应远大于 1(理想:文章日期各异 + 静态页一个稳定日期)

# 4) llms.txt 输出正常
curl -s http://localhost:4321/llms.txt | head -20

# 5) robots.txt 含 AI 抓取器
grep -E 'GPTBot|PerplexityBot|ClaudeBot' dist/robots.txt

# 6) 无残留旧 niche/旧域名字符串
grep -rln '<OLD-BRAND>\|<OLD-DOMAIN>' src/ public/ astro.config.mjs package.json README.md 2>/dev/null
# 应为空

# 7) 内部链接完整性(可选)
# 用一段 node 脚本扫描 dist/**/*.html 里所有 href,确认没有 404
```

---

## Domain migration helper (旧域 → 新域)

如果是从旧域迁到新域(权重要继承):

1. **代码层** —— `vercel.json` 加 host-based 301/308:
   ```json
   {
     "redirects": [
       {
         "source": "/(.*)",
         "has": [{ "type": "host", "value": "<OLD-DOMAIN>" }],
         "destination": "https://<NEW-DOMAIN>/$1",
         "permanent": true
       },
       {
         "source": "/(.*)",
         "has": [{ "type": "host", "value": "www.<OLD-DOMAIN>" }],
         "destination": "https://<NEW-DOMAIN>/$1",
         "permanent": true
       }
     ]
   }
   ```

2. **Vercel 后台** —— 旧域名继续保留在同一项目里(必须!),新域设为 Primary。
3. **BaseLayout** —— 同时挂两条 `google-site-verification`(新旧各一条),迁移期内并存。
4. **GSC** —— 「设置 → 更改地址(Change of Address)」工具,选 旧→新,正式通知 Google。
5. **保留** —— 旧域名在 Vercel + DNS 至少 6~12 个月,让 Google 完成索引迁移。

---

## Design decisions (worth keeping verbatim)

1. **`trailingSlash: 'always' + build.format: 'directory'`** —— `/windows/index.html`,URL 干净,对 Google 最稳。
2. **下载按钮不跳转** —— `DownloadButton` 渲染为 inert `<button>`,实际官方地址放数据(OFFICIAL)。让站点更像"导航/教程"而不是"软件下载站",E-E-A-T 更稳。如 niche 需要可点下载,把 DownloadButton 改成 `<a>`。
3. **精确 lastmod** —— astro.config.mjs 里 `buildArticleLastmodMap()`。**绝不用 `lastmod: new Date()`**。
4. **关键词蚕食隔离** —— 首页吃头部词,每个别名/同义词独占一个 slug,薄页 `noindex,follow` + 从 sitemap 排除。
5. **JSON-LD @graph 跨页关联** —— Org(#organization) + WebSite(#website) 在 BaseLayout 全站注入,文章用 `@id` 引用,Google 实体识别可靠。
6. **GEO 友好** —— llms.txt 端点 + robots 显式放行 AI 抓取器。
7. **零运行时 JS** —— Astro 纯静态,Header/Footer 移动菜单和 FAQ 折叠用 `<details>`/CSS,Lighthouse 100 基线。
8. **单一可信源** —— 永远先改 `src/data/`,组件只渲染。
9. **OG 图用 @napi-rs/canvas** —— 中文字体可控、CI 友好(node 原生)。
10. **公平的 noindex** —— /tags/、downloads 详情页(与平台页内容重叠)都 noindex,从 sitemap filter 排除,避免薄页拖低站点质量信号。

---

## Common pitfalls

- ❌ `lastmod: new Date()` — Google 不信任。
- ❌ 多个别名都做成首页关键词 → 严重蚕食。
- ❌ 部署后立刻删旧域名 → 权重不会自然迁移。新旧域并行 6~12 个月。
- ❌ 改文案只改组件不改数据 → 组件应是 data 的渲染器。
- ❌ 直接 grep -r "<旧品牌名>" 全局替换 → 注意官方源域名/商标名等不可改(如 `telegram.org` 是官方源,**不能误改**)。先 grep 出来人工核对再 replace。
- ❌ 忘了同步 `Platform` 联合类型 → 减少平台时 TS 报错。
- ❌ Markdown frontmatter 漏字段 → Zod schema 直接 fail build。先看 `content.config.ts` 定义。
- ❌ 改 SITE.url 但忘改 astro.config.mjs 的 SITE 常量 → canonical/sitemap 与 og:url 不一致。两处都改。

---

## TL;DR

按这套搞完,新 niche 从零到上线大约 1 个工作日(含写 markdown 内容)。技术侧到位的事:Astro 5 SSG 纯静态、Tailwind 4 主题、Schema.org JSON-LD @graph、精确 lastmod、llms.txt + AI crawler 白名单、Programmatic SEO 长尾矩阵、域名迁移 301 配套、Vercel 边缘缓存。

剩下决定生死的是 **运营**:GSC 提交 + sitemap 提交 + 外链 + 持续更新。技术只是底盘。
