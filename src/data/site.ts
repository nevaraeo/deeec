/**
 * 全站配置中心 —— 单一可信源
 * 改这里即可全站生效（域名 / 导航 / 页脚 SEO 链接 / 默认元信息）
 */

export const SITE = {
  name: 'Telegram中文下载',
  domain: 'telegrams.ltd',
  url: 'https://telegrams.ltd',
  title: 'Telegram官方下载｜电脑版安卓iOS客户端',
  description:
    'Telegram 下载官方源导航：获取 Telegram Windows 电脑版、安卓 APK、iOS、Mac、Linux 官方客户端，所有下载均直连 telegram.org 官方源，安全无捆绑、完全免费，支持多端云端同步。',
  defaultOgImage: '/og-default.png',
  logo: '/logo.png',
  locale: 'zh-CN',
  lang: 'zh-CN',
  twitter: '@telegram',
  // 首页元关键词（聚焦“telegram下载”头部词；别名词由各专属页承载）
  keywords: [
    'telegram下载',
    'telegram电脑版下载',
    'telegram安卓下载',
    'telegram ios下载',
    'telegram mac下载',
    'telegram apk下载',
    'telegram官方下载',
    'telegram下载安装',
  ],
  publisher: {
    name: 'telegrams.ltd',
    url: 'https://telegrams.ltd',
  },
} as const;

/** Telegram 各平台官方下载地址（导航站只指向官方源，保证安全与 E-E-A-T） */
export const OFFICIAL = {
  windows: 'https://telegram.org/dl/desktop/win64',
  windowsPortable: 'https://telegram.org/dl/desktop/win64_portable',
  mac: 'https://telegram.org/dl/desktop/mac',
  macAppStore: 'https://apps.apple.com/app/telegram/id747648890',
  linux: 'https://telegram.org/dl/desktop/linux',
  android: 'https://telegram.org/dl/android',
  androidPlay: 'https://play.google.com/store/apps/details?id=org.telegram.messenger',
  ios: 'https://telegram.org/dl/ios',
  web: 'https://web.telegram.org/',
  // 简体中文语言包（官方机器人深链）
  zhLangPack: 'https://t.me/setlanguage/classic-zh-cn',
} as const;

export interface NavChild {
  label: string;
  href: string;
  icon?: 'windows' | 'android' | 'apple' | 'linux';
}
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

/** 主导航 —— 「应用下载」为带下拉的菜单 */
export const NAV: NavItem[] = [
  {
    label: '应用下载',
    href: '/downloads/',
    children: [
      { label: 'Windows 电脑版', href: '/windows/', icon: 'windows' },
      { label: '安卓 Android', href: '/android/', icon: 'android' },
      { label: 'iOS / iPhone', href: '/ios/', icon: 'apple' },
      { label: 'Mac', href: '/mac/', icon: 'apple' },
      { label: 'Linux', href: '/linux/', icon: 'linux' },
    ],
  },
  { label: '中文设置', href: '/telegram-chinese/' },
  { label: '教程', href: '/guides/' },
  { label: '博客', href: '/blog/' },
  { label: 'FAQ', href: '/faq/' },
];

/** 页脚 SEO 链接矩阵 —— 集中内链权重 */
export const FOOTER_LINKS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: '平台下载',
    links: [
      { label: 'Telegram 电脑版下载', href: '/windows/' },
      { label: 'Telegram 安卓下载（APK）', href: '/android/' },
      { label: 'Telegram iOS 下载', href: '/ios/' },
      { label: 'Telegram Mac 下载', href: '/mac/' },
      { label: 'Telegram Linux 下载', href: '/linux/' },
      { label: '全部下载入口', href: '/downloads/' },
    ],
  },
  {
    title: '中文版 / 纸飞机',
    links: [
      { label: 'Telegram 中文版', href: '/telegram-chinese/' },
      { label: 'Telegram 中文版下载', href: '/telegram-chinese-download/' },
      { label: '纸飞机下载', href: '/paper-airplane-download/' },
      { label: '纸飞机中文版', href: '/paper-airplane-chinese/' },
      { label: '飞机下载', href: '/airplane-download/' },
      { label: '电报下载', href: '/dianbao-download/' },
      { label: '电报中文版', href: '/dianbao-chinese/' },
    ],
  },
  {
    title: '教程与帮助',
    links: [
      { label: '安装教程', href: '/guides/' },
      { label: '常见问题 FAQ', href: '/faq/' },
      { label: '博客文章', href: '/blog/' },
      { label: '分类浏览', href: '/category/' },
      { label: '标签云', href: '/tags/' },
    ],
  },
  {
    title: '热门长尾',
    links: [
      { label: 'Windows 11 下载', href: '/telegram-download-for-windows-11/' },
      { label: 'Windows 10 下载', href: '/telegram-download-for-windows-10/' },
      { label: 'Android 15 下载', href: '/telegram-download-for-android-15/' },
      { label: 'iOS 18 下载', href: '/telegram-download-for-ios-18/' },
      { label: 'Mac M1/M2 下载', href: '/telegram-download-for-mac-m1/' },
    ],
  },
];

/** 全站复用的语义锚句 —— 在多页面合理出现，建立“纸飞机=Telegram”强关联 */
export const SEMANTIC_ANCHOR =
  'Telegram（中文用户常称“纸飞机”“飞机”或“电报”，也写作 Telegram 中文版）是一款主打隐私、安全与速度的跨平台即时通讯应用。';

export type Platform = 'windows' | 'android' | 'ios' | 'mac' | 'linux';
