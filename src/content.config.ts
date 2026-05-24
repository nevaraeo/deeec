import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* 复用：FAQ 条目结构 —— 用于生成 FAQPage Schema */
const faqItem = z.object({
  q: z.string(),
  a: z.string(),
});

/* 复用：更新日志条目 */
const changelogItem = z.object({
  version: z.string(),
  date: z.coerce.date(),
  notes: z.array(z.string()),
});

/* ---------------- 下载内容集合 ---------------- */
const downloads = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/downloads' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: z.enum(['windows', 'android', 'ios', 'mac', 'linux']),
    osLabel: z.string(),
    version: z.string(),
    fileSize: z.string(),
    requirements: z.string(),
    updated: z.coerce.date(),
    downloadUrl: z.string().url(),
    altUrl: z.string().url().optional(),
    altLabel: z.string().optional(),
    badge: z.string().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    keywords: z.array(z.string()).default([]),
    faqs: z.array(faqItem).default([]),
    changelog: z.array(changelogItem).default([]),
  }),
});

/* ---------------- 博客集合 ---------------- */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('telegrams.ltd 编辑部'),
    image: z.string().optional(),
    category: z.string().default('使用教程'),
    tags: z.array(z.string()).default([]),
    faqs: z.array(faqItem).default([]),
    draft: z.boolean().default(false),
  }),
});

/* ---------------- 指南 / 教程集合 ---------------- */
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('安装教程'),
    platform: z.enum(['windows', 'android', 'ios', 'mac', 'linux', 'all']).default('all'),
    difficulty: z.enum(['入门', '进阶']).default('入门'),
    tags: z.array(z.string()).default([]),
    faqs: z.array(faqItem).default([]),
    draft: z.boolean().default(false),
  }),
});

/* ---------------- FAQ 集合 ---------------- */
const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default('通用'),
    order: z.number().default(0),
    faqs: z.array(faqItem),
  }),
});

export const collections = { downloads, blog, guides, faq };
