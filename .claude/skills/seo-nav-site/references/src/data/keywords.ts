import type { Faq } from './platforms';

/**
 * 关键词语义着陆页数据
 * 每个页面针对一个高价值中文关键词簇，内容独立、非重复，强化“纸飞机=Telegram”语义。
 */
export interface KeywordPage {
  slug: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  lead: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: Faq[];
  related: { label: string; href: string }[];
}

const COMMON_RELATED = [
  { label: 'Telegram 电脑版下载', href: '/windows/' },
  { label: 'Telegram 安卓 APK 下载', href: '/android/' },
  { label: 'Telegram iOS 下载', href: '/ios/' },
  { label: 'Telegram 中文设置教程', href: '/guides/telegram-chinese-language-pack/' },
];

export const KEYWORD_PAGES: Record<string, KeywordPage> = {
  'telegram-chinese': {
    slug: '/telegram-chinese/',
    h1: 'Telegram 中文版：界面汉化与简体中文设置完整说明',
    title: 'Telegram中文 - 中文版界面与简体中文设置教程',
    description:
      'Telegram 中文版是什么、怎么把界面设置成简体中文？本文讲清 Telegram 中文版的原理（官方原版 + 官方语言包）、分步设置方法、是否安全可逆，以及与第三方汉化版的区别，电脑、安卓、iOS 全平台通用。',
    keywords: ['telegram中文', 'telegram中文版', 'telegram汉化', '纸飞机中文版', 'telegram设置中文'],
    lead:
      '刚装好 Telegram，打开却是一整屏英文——这是几乎每个中文用户的第一道坎。其实把它变成“Telegram 中文版”非常简单，关键是要用对方法：官方原版 App 加上官方简体中文语言包，既能得到完整中文界面，又不必冒第三方汉化包的盗号风险。这篇就把“中文版到底是什么、怎么设、安不安全”一次讲清楚。',
    sections: [
      {
        heading: '“Telegram 中文版”到底是什么',
        paragraphs: [
          '先纠正一个最常见的误解：Telegram 官方并不提供一个单独的“中文版安装包”。你在网上看到的“Telegram 中文版.exe / 中文版 APK”，要么其实就是官方原版，要么是被人二次打包过的高风险文件。',
          '真正的“Telegram 中文版”是一个组合——官方原版 App 加上官方简体中文语言包。语言包由社区维护、经官方收录，通过一个 t.me 深链一键应用后，菜单、设置、按钮等界面文字会立刻变成简体中文，而聊天、加密、云端同步等核心功能完全不受影响。',
        ],
      },
      {
        heading: '三步把 Telegram 切换成简体中文',
        paragraphs: ['无论电脑、安卓还是 iPhone，方法都一样，整个过程不到一分钟：'],
        bullets: [
          '第一步：从官方源下载并安装 Telegram 原版（还没装见下方各平台入口）；',
          '第二步：在浏览器打开官方简体中文语言包深链（本站每个页面底部的「应用简体中文语言包」按钮即是）；',
          '第三步：系统唤起 Telegram 并弹出语言提示，点击「Apply / 应用」，界面立即变为简体中文。',
        ],
      },
      {
        heading: '设置中文安全吗？还能改回英文吗',
        paragraphs: [
          '可以放心：应用官方语言包只改变界面的显示语言，不会修改客户端本体，对你的账号、聊天记录和加密都没有任何影响。',
          '而且操作完全可逆——日后想换回英文或其它语言，在「设置（Settings）→ 语言（Language）」里随时切换即可，不会丢失任何数据。',
        ],
      },
      {
        heading: '为什么别用第三方“汉化版 / 破解版”',
        paragraphs: [
          '为了图省事去下“现成的中文版”，反而是最危险的做法。这类被二次打包的客户端常见的坑有：',
        ],
        bullets: [
          '植入广告、后台程序，偷偷消耗流量与电量；',
          '篡改客户端逻辑，甚至窃取登录验证码导致账号被盗；',
          '更新滞后、与官方协议不兼容，随时可能无法登录。正确做法始终是「官方原版 ＋ 官方语言包」，既能得到完整中文，又安全可靠。',
        ],
      },
      {
        heading: '各平台都能设中文，方法一致',
        paragraphs: ['“先装官方原版，再应用官方语言包”这套流程在所有平台都通用，差别只在于打开深链的方式：'],
        bullets: [
          'Windows / Mac / Linux 桌面版：用系统默认浏览器打开深链，会自动唤起桌面客户端确认；',
          '安卓：用手机浏览器打开深链，唤起 Telegram App 后点击应用；',
          'iPhone / iPad：建议用 Safari 打开深链，唤起 App 的成功率最高；',
          '各平台的官方下载入口可在页面底部或顶部「应用下载」菜单中找到。',
        ],
      },
      {
        heading: '中文、纸飞机、电报，其实是同一个',
        paragraphs: [
          '由于图标是一架蓝色纸飞机，中文用户称 Telegram 为“纸飞机”或“飞机”；而“Telegram”的中文意译正是“电报”。所以“Telegram 中文”“纸飞机中文版”“电报中文版”指的都是同一款设置成简体中文的官方 Telegram，并不存在另一个独立软件。',
        ],
      },
    ],
    faqs: [
      { q: 'Telegram 有官方中文版吗？', a: 'Telegram 没有单独的“中文版安装包”，但提供官方简体中文语言包。安装官方原版后应用该语言包，即可获得完整简体中文界面，这就是通常说的 Telegram 中文版。' },
      { q: 'Telegram 怎么设置成简体中文？', a: '装好官方原版后，在浏览器打开官方简体中文语言包深链，点击“Apply / 应用”即可；也可在 设置 → 语言 中手动选择简体中文。' },
      { q: '设置中文后会影响账号安全吗？能改回英文吗？', a: '不会影响安全，语言包只改显示语言、不动客户端本体；并且随时可在 设置 → 语言 里切回英文，操作完全可逆。' },
      { q: 'Telegram 中文和纸飞机、电报是同一个吗？', a: '是的。纸飞机、飞机、电报都是中文用户对 Telegram 的叫法，Telegram 中文版就是设置为简体中文界面的官方 Telegram。' },
    ],
    related: [
      { label: 'Telegram 中文版下载入口', href: '/telegram-chinese-download/' },
      ...COMMON_RELATED,
    ],
  },

  'telegram-chinese-download': {
    slug: '/telegram-chinese-download/',
    h1: 'Telegram 中文版下载：各平台官方安全入口汇总',
    title: 'Telegram中文版下载 - 电脑安卓iOS官方入口汇总',
    description:
      'Telegram 中文版下载权威导航。汇总 Windows 电脑版、安卓 APK、iOS、Mac、Linux 各平台官方安全下载地址，并附简体中文一键设置方法。所有入口直连 telegram.org 官方源，不二次打包、不捆绑。',
    keywords: ['telegram中文版下载', 'telegram下载', 'telegram中文', '纸飞机中文版下载', 'telegram apk下载'],
    lead:
      '本页汇总 Telegram（纸飞机）各平台官方下载入口。下载官方原版后按教程应用简体中文语言包，即可得到 Telegram 中文版。所有链接均指向 telegram.org 官方源。',
    sections: [
      {
        heading: '什么是 Telegram 中文版',
        paragraphs: [
          'Telegram 官方并没有单独的“中文版安装包”。所谓 Telegram 中文版，是指安装官方原版应用后，再应用官方简体中文语言包，使界面（菜单、设置、按钮）完整中文化——这样既得到完整中文界面，又保证账号安全。',
          '该方式适用于全部平台：Windows 电脑版、安卓、iOS、Mac、Linux，设置方法一致；切勿为“中文”去下载第三方汉化包或破解版，以免被植入广告甚至盗号。',
        ],
      },
      {
        heading: '三步获取 Telegram 中文版',
        paragraphs: ['无论哪个平台，把 Telegram 变成中文版只需三步：'],
        bullets: [
          '第一步：从下方对应平台官方入口下载并安装 Telegram 原版',
          '第二步：在浏览器打开官方简体中文语言包深链（本站每页底部均提供）',
          '第三步：在弹出的 Telegram 中点击“应用 / Apply”，界面立即变为简体中文',
        ],
      },
      {
        heading: '按平台下载 Telegram 中文版',
        paragraphs: ['先确认设备类型，再进入对应平台的下载与中文设置说明页：'],
        bullets: [
          'Windows 电脑版：/windows/（支持 Win 11/10/8/7 64 位）',
          '安卓手机：/android/（官方 APK 或 Google Play）',
          'iPhone / iPad：/ios/（App Store）',
          'Mac：/mac/（M1/M2 与 Intel）',
          'Linux：/linux/（tar.xz / Snap / Flatpak）',
        ],
      },
      {
        heading: '安全下载提醒',
        paragraphs: ['只认 telegram.org 官方域名与官方应用商店；不要安装来历不明的“汉化破解版”，以免账号被盗。本站汇总的入口均直连官方源。'],
      },
    ],
    faqs: [
      { q: 'Telegram 中文版下载到哪里最安全？', a: '认准 telegram.org 官方地址或 App Store / Google Play。本站所有下载按钮均直连官方服务器，不做二次打包。' },
      { q: '下载的是英文版，怎么变中文？', a: '下载的官方包默认英文，安装后应用官方简体中文语言包即可变中文，详见本站中文设置教程。' },
      { q: '纸飞机中文版和 Telegram 中文版有区别吗？', a: '没有区别，只是叫法不同，都是设置为简体中文的官方 Telegram。' },
    ],
    related: COMMON_RELATED,
  },

  'paper-airplane-download': {
    slug: '/paper-airplane-download/',
    h1: '纸飞机下载：纸飞机就是 Telegram，官方各平台入口',
    title: '纸飞机下载 - 纸飞机APP（Telegram）官方下载',
    description:
      '“纸飞机”就是 Telegram 的中文俗称。本页提供纸飞机（Telegram）电脑版、安卓 APK、iOS、Mac 各平台官方下载入口与简体中文设置教程，认准 telegram.org 官方源，安全无捆绑、不夹带插件。',
    keywords: ['纸飞机下载', '纸飞机app下载', 'telegram下载', '飞机下载', '纸飞机中文版'],
    lead:
      '很多人搜索的“纸飞机 App”，其实就是 Telegram —— 因为它的图标是一架纸飞机，中文用户便习惯称它“纸飞机”或“飞机”。本页提供官方各平台下载入口。',
    sections: [
      {
        heading: '“纸飞机”为什么是 Telegram',
        paragraphs: [
          'Telegram 的应用图标是一架蓝色纸飞机，中文社区因此口口相传称其为“纸飞机”，部分人也简称“飞机”。它们指的是同一个官方应用，没有另一个叫“纸飞机”的独立软件。',
        ],
      },
      {
        heading: '纸飞机（Telegram）官方下载入口',
        paragraphs: ['请按设备选择，全部指向 telegram.org 官方服务器：'],
        bullets: [
          '纸飞机电脑版（Windows）：/windows/',
          '纸飞机安卓版（APK）：/android/',
          '纸飞机 iOS 版：/ios/',
          '纸飞机 Mac 版：/mac/',
        ],
      },
      {
        heading: '下载后设置中文',
        paragraphs: ['官方原版默认英文，按本站教程应用官方简体中文语言包，即得“纸飞机中文版”。'],
      },
    ],
    faqs: [
      { q: '纸飞机是什么软件？', a: '纸飞机是即时通讯软件 Telegram 的中文俗称，得名于其纸飞机图标。它支持私密聊天、超大群组、频道与文件传输。' },
      { q: '纸飞机和 Telegram 是同一个吗？', a: '是同一个。纸飞机、飞机都是 Telegram 的中文叫法，下载的就是官方 Telegram 应用。' },
      { q: '纸飞机怎么下载中文版？', a: '先从官方入口下载 Telegram 原版，再应用官方简体中文语言包即可，详见本站中文设置教程。' },
    ],
    related: [
      { label: '纸飞机中文版设置', href: '/paper-airplane-chinese/' },
      ...COMMON_RELATED,
    ],
  },

  'paper-airplane-chinese': {
    slug: '/paper-airplane-chinese/',
    h1: '纸飞机中文版：把 Telegram 设为简体中文',
    title: '纸飞机中文版 - 纸飞机（Telegram）中文设置教程',
    description:
      '纸飞机中文版怎么设置？本页讲清纸飞机（Telegram）切换简体中文的官方方法——官方原版加官方语言包，三步完成，并提供各平台下载入口。无第三方汉化风险，操作随时可逆。',
    keywords: ['纸飞机中文版', '纸飞机中文', 'telegram中文版', '纸飞机下载', 'telegram中文'],
    lead:
      '“纸飞机中文版”指的是把 Telegram 界面设置为简体中文。方法是：安装官方纸飞机（Telegram）原版 → 应用官方简体中文语言包。无需任何第三方汉化补丁。',
    sections: [
      {
        heading: '纸飞机中文版的正确打开方式',
        paragraphs: [
          '不存在单独的“纸飞机中文版安装包”。正确做法是装官方原版，再用官方语言包切换中文，这样既得到完整中文界面，又保证账号安全。',
        ],
      },
      {
        heading: '三步设置中文',
        paragraphs: ['以下步骤适用于电脑版、安卓、iOS、Mac、Linux：'],
        bullets: [
          '第一步：从本站官方入口下载并安装 Telegram 原版',
          '第二步：在浏览器打开官方简体中文语言包深链',
          '第三步：在弹出的 Telegram 中点击“应用 / Apply”，界面立即变中文',
        ],
      },
      {
        heading: '常见误区',
        paragraphs: ['搜索“纸飞机中文版破解 / 汉化版”往往是被二次打包的高风险文件，请勿安装，坚持官方原版 + 官方语言包。'],
      },
    ],
    faqs: [
      { q: '纸飞机中文版在哪下载？', a: '没有独立的中文版安装包。下载官方纸飞机（Telegram）原版后应用官方简体中文语言包即可，本站提供官方下载入口与一键语言包链接。' },
      { q: '纸飞机设置中文后还能改回英文吗？', a: '可以。在 Settings → Language（语言）中随时切换语言，操作可逆。' },
      { q: '为什么我的纸飞机是英文？', a: '官方原版默认英文，需手动应用一次中文语言包才会变为简体中文，之后会一直保持中文。' },
    ],
    related: [
      { label: '纸飞机下载入口', href: '/paper-airplane-download/' },
      ...COMMON_RELATED,
    ],
  },

  'airplane-download': {
    slug: '/airplane-download/',
    h1: '飞机下载：飞机（Telegram / 纸飞机）官方下载导航',
    title: '飞机下载 - 飞机APP（Telegram纸飞机）官方下载',
    description:
      '“飞机”是 Telegram（纸飞机）的中文简称。本页提供飞机 App 各平台官方下载入口与简体中文设置教程，所有地址直连 telegram.org 官方源，安全无捆绑、不二次打包。',
    keywords: ['飞机下载', '飞机app下载', '纸飞机下载', 'telegram下载', 'telegram中文'],
    lead:
      '搜索“飞机 App / 飞机下载”的用户，找的通常就是 Telegram —— 别名“纸飞机”“飞机”。本页提供官方各平台下载入口，全部直连 telegram.org。',
    sections: [
      {
        heading: '“飞机”指的是哪个软件',
        paragraphs: [
          '“飞机”是“纸飞机”的进一步简称，指即时通讯软件 Telegram。无论你搜“飞机”“纸飞机”还是“Telegram”，下载的都是同一个官方应用。',
        ],
      },
      {
        heading: '飞机（Telegram）官方下载',
        paragraphs: ['按设备选择对应平台页面：'],
        bullets: [
          '电脑版：/windows/',
          '安卓 APK：/android/',
          'iOS：/ios/',
          'Mac：/mac/  ｜  Linux：/linux/',
        ],
      },
      {
        heading: '安装后切换中文',
        paragraphs: ['下载官方原版后，按本站教程应用官方简体中文语言包，即得“飞机中文版”。'],
      },
    ],
    faqs: [
      { q: '飞机 App 是什么？', a: '“飞机”是 Telegram 的中文简称（同“纸飞机”），是一款注重隐私与速度的即时通讯应用。' },
      { q: '飞机和纸飞机、Telegram 有区别吗？', a: '没有区别，都是同一个 Telegram 官方应用的不同中文叫法。' },
      { q: '飞机怎么下载安装并设置中文？', a: '从本站官方入口按设备下载安装，再应用官方简体中文语言包即可，全程不需要第三方汉化。' },
    ],
    related: [
      { label: '纸飞机下载', href: '/paper-airplane-download/' },
      { label: 'Telegram 中文版下载', href: '/telegram-chinese-download/' },
      ...COMMON_RELATED.slice(0, 3),
    ],
  },

  'dianbao-download': {
    slug: '/dianbao-download/',
    h1: '电报下载：电报就是 Telegram，官方各平台下载入口',
    title: '电报下载 - 电报APP（Telegram）官方下载',
    description:
      '“电报”是 Telegram 的中文译名。本页提供电报（Telegram）电脑版、安卓 APK、iOS、Mac 各平台官方下载入口与简体中文设置教程，所有地址均指向 telegram.org 官方源，安全无捆绑。',
    keywords: ['电报下载', '电报app下载', 'telegram下载', '电报中文版', '纸飞机下载'],
    lead:
      '很多人搜索的“电报 App”，其实就是 Telegram —— “电报”是英文 Telegram 的中文意译。无论你叫它电报、纸飞机还是飞机，下载的都是同一个官方应用。本页提供各平台官方下载入口。',
    sections: [
      {
        heading: '“电报”为什么是 Telegram',
        paragraphs: [
          'Telegram 一词的中文意译就是“电报”，因此中文社区里“电报”“纸飞机”“飞机”指的都是同一款官方即时通讯应用，并不存在另一个叫“电报”的独立软件。',
          '它支持私密聊天、最多 20 万人的超大群组、频道广播与大文件传输，账号全平台云端同步。',
        ],
      },
      {
        heading: '电报（Telegram）官方下载入口',
        paragraphs: ['请按设备选择，全部指向 telegram.org 官方服务器：'],
        bullets: [
          '电报电脑版（Windows）：/windows/',
          '电报安卓版（APK）：/android/',
          '电报 iOS 版：/ios/',
          '电报 Mac 版：/mac/，Linux：/linux/',
        ],
      },
      {
        heading: '下载后设置中文（电报中文版）',
        paragraphs: [
          '官方原版默认英文，安装后应用官方简体中文语言包即得“电报中文版”，无需第三方汉化。详细方法见本站中文设置教程。',
        ],
      },
    ],
    faqs: [
      { q: '电报是什么软件？', a: '电报是即时通讯软件 Telegram 的中文译名（Telegram 意译为“电报”）。它注重隐私与速度，支持超大群组、频道与大文件传输。' },
      { q: '电报和 Telegram、纸飞机是同一个吗？', a: '是同一个。电报、纸飞机、飞机都是中文用户对 Telegram 的不同叫法，下载的就是官方 Telegram 应用。' },
      { q: '电报怎么下载中文版？', a: '先从官方入口下载 Telegram 原版，再应用官方简体中文语言包即可，详见本站中文设置教程。' },
    ],
    related: [
      { label: '电报中文版设置', href: '/dianbao-chinese/' },
      { label: '纸飞机下载', href: '/paper-airplane-download/' },
      ...COMMON_RELATED.slice(0, 3),
    ],
  },

  'dianbao-chinese': {
    slug: '/dianbao-chinese/',
    h1: '电报中文版：把 Telegram（电报）设为简体中文',
    title: '电报中文版 - 电报（Telegram）中文设置教程',
    description:
      '电报中文版怎么设置？本页讲清电报（Telegram）切换简体中文的官方方法——官方原版加官方语言包，三步完成，并提供各平台下载入口，无第三方汉化风险、操作可逆。',
    keywords: ['电报中文版', '电报中文', 'telegram中文版', '电报下载', 'telegram中文'],
    lead:
      '“电报中文版”指的是把 Telegram（电报）界面设置为简体中文。方法是：安装官方电报（Telegram）原版 → 应用官方简体中文语言包，无需任何第三方汉化补丁。',
    sections: [
      {
        heading: '电报中文版的正确打开方式',
        paragraphs: [
          '不存在单独的“电报中文版安装包”。正确做法是装官方原版，再用官方语言包切换中文，这样既得到完整中文界面，又保证账号安全。',
        ],
      },
      {
        heading: '三步设置中文',
        paragraphs: ['以下步骤适用于电脑版、安卓、iOS、Mac、Linux：'],
        bullets: [
          '第一步：从本站官方入口下载并安装 Telegram（电报）原版',
          '第二步：在浏览器打开官方简体中文语言包深链',
          '第三步：在弹出的 Telegram 中点击“应用 / Apply”，界面立即变中文',
        ],
      },
      {
        heading: '常见误区',
        paragraphs: ['搜索“电报中文版破解 / 汉化版”往往是被二次打包的高风险文件，请勿安装，坚持官方原版 + 官方语言包。'],
      },
    ],
    faqs: [
      { q: '电报中文版在哪下载？', a: '没有独立的中文版安装包。下载官方电报（Telegram）原版后应用官方简体中文语言包即可，本站提供官方下载入口与一键语言包链接。' },
      { q: '电报设置中文后还能改回英文吗？', a: '可以。在 Settings → Language（语言）中随时切换语言，操作可逆。' },
      { q: '电报、纸飞机、Telegram 是同一个吗？', a: '是的，都是同一款官方应用的不同中文叫法。' },
    ],
    related: [
      { label: '电报下载入口', href: '/dianbao-download/' },
      { label: 'Telegram 中文版下载', href: '/telegram-chinese-download/' },
      ...COMMON_RELATED.slice(0, 3),
    ],
  },
};

export const KEYWORD_LIST = Object.values(KEYWORD_PAGES);
