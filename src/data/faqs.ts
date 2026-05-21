import type { Faq } from './platforms';

/** 首页 / FAQ 页复用的核心问答（强语义：纸飞机=Telegram=中文版） */
export const CORE_FAQS: Faq[] = [
  {
    q: 'Telegram 和“纸飞机”“飞机”是同一个软件吗？',
    a: '是的。Telegram 的图标是一架蓝色纸飞机，中文用户因此称它为“纸飞机”或“飞机”。三者指的是同一个官方即时通讯应用，下载安装的都是 Telegram。',
  },
  {
    q: 'Telegram 中文版从哪里下载最安全？',
    a: '请认准 telegram.org 官方域名，或 App Store / Google Play。本站（telegrams.ltd）所有下载按钮均直连官方服务器，不做二次打包、不捆绑插件。',
  },
  {
    q: 'Telegram 有官方中文版安装包吗？',
    a: 'Telegram 没有单独的“中文版安装包”。正确做法是下载官方原版，再应用官方简体中文语言包，界面即变为完整简体中文，这就是大家说的 Telegram 中文版。',
  },
  {
    q: 'Telegram 电脑版需要手机一直开着吗？',
    a: '不需要。电脑版（Windows/Mac/Linux）是独立客户端，首次用手机验证码登录后即可独立收发消息，手机关机也不影响。',
  },
  {
    q: '安卓下载 APK 提示“未知来源”安全吗？',
    a: '只要 APK 来自 telegram.org 官方地址就是安全的。“未知来源”只是 Android 的标准安全提示，对你的浏览器授予一次安装权限即可。',
  },
  {
    q: 'Telegram 怎么快速切换简体中文？',
    a: '安装官方应用后，用浏览器打开本站提供的官方简体中文语言包深链，在弹出的 Telegram 中点击“应用 / Apply”，界面立即变为简体中文。',
  },
  {
    q: 'Telegram 支持哪些平台？',
    a: 'Telegram 提供 Windows 电脑版、Android（APK/Play）、iOS（iPhone/iPad）、macOS、Linux 桌面版以及网页版，账号云端互通，可多端同时在线。',
  },
  {
    q: 'iOS 在 App Store 搜不到 Telegram 怎么办？',
    a: '可切换其它地区的 App Store 账号，或通过本站 iOS 页面的官方入口跳转到 Telegram 应用页直接安装。',
  },
];

/** 首页专用：纯下载意图 FAQ（不含别名/中文版话题，聚焦“下载”本身） */
export const DOWNLOAD_FAQS: Faq[] = [
  {
    q: 'Telegram 从哪里下载最安全？',
    a: '请认准 telegram.org 官方域名，或通过 App Store / Google Play 下载。本站所有下载入口均直连官方服务器，不做二次打包、不捆绑插件。',
  },
  {
    q: 'Telegram 下载与使用收费吗？',
    a: 'Telegram 完全免费。聊天、群组、频道、文件传输等基础功能永久免费；另有可选的 Premium 会员提供增值特权，但不影响普通使用。',
  },
  {
    q: 'Telegram 电脑版需要手机一直开着吗？',
    a: '不需要。电脑版（Windows/Mac/Linux）是独立客户端，首次用手机验证码登录后即可独立收发消息，手机关机也不影响。',
  },
  {
    q: '安卓下载 APK 提示“未知来源”安全吗？',
    a: '只要 APK 来自 telegram.org 官方地址就是安全的。“未知来源”只是 Android 的标准安全提示，对你的浏览器授予一次安装权限即可。',
  },
  {
    q: 'Telegram 支持哪些平台下载？',
    a: 'Telegram 提供 Windows 电脑版、Android（APK / Google Play）、iOS（iPhone/iPad）、macOS、Linux 桌面版以及网页版，账号云端互通，可多端同时在线。',
  },
  {
    q: 'iOS 在 App Store 搜不到 Telegram 怎么办？',
    a: '可切换到其它地区的 App Store 账号，或通过本站 iOS 页面的官方入口跳转到 Telegram 应用页直接安装。',
  },
];
