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
    title: 'Telegram中文 - 中文版界面设置与下载入口',
    description:
      'Telegram 中文版完整说明。讲清简体中文设置原理——官方原版 App + 官方中文语言包，一键切换为完整中文界面，并附各平台下载入口。无需第三方汉化、安全可逆。Telegram 中文用户常称“纸飞机”。',
    keywords: ['telegram中文', 'telegram中文版', 'telegram中文版下载', '纸飞机中文版', 'telegram汉化'],
    lead:
      'Telegram 官方应用本身不内置“中文版安装包”，所谓 Telegram 中文版，是指安装官方原版应用后，再应用官方简体中文语言包，使界面完整中文化。这种方式最安全，避免第三方汉化包夹带风险。',
    sections: [
      {
        heading: 'Telegram 中文版到底是什么',
        paragraphs: [
          'Telegram（中文用户常称“纸飞机”或“飞机”）是一款跨平台即时通讯应用。它的“中文版”并不是一个独立的下载文件，而是“官方原版 App + 官方中文语言包”的组合。',
          '官方语言包由 Telegram 社区维护并经官方收录，通过一个 t.me 深链一键应用，界面（菜单、设置、按钮）会立即变为简体中文，聊天功能完全不受影响。',
        ],
      },
      {
        heading: '为什么不建议下载第三方“中文版安装包”',
        paragraphs: [
          '网络上一些“Telegram 中文版.exe / 汉化版 APK”可能被二次打包，存在植入广告、窃取验证码甚至盗号风险。',
        ],
        bullets: [
          '官方原版 + 官方语言包 = 完整中文且安全',
          '第三方汉化包可能篡改客户端、危害账号安全',
          '本站所有下载入口均指向 telegram.org 官方服务器',
        ],
      },
      {
        heading: '各平台如何获得 Telegram 中文版',
        paragraphs: [
          '无论 Windows 电脑版、安卓 APK、iOS、Mac 还是 Linux，步骤都一样：先装官方原版，再应用官方简体中文语言包。',
        ],
        bullets: [
          '电脑版（Windows）：见 /windows/',
          '安卓（APK）：见 /android/',
          'iPhone / iPad：见 /ios/',
          'Mac：见 /mac/，Linux：见 /linux/',
        ],
      },
    ],
    faqs: [
      { q: 'Telegram 有官方中文版吗？', a: 'Telegram 没有单独的“中文版安装包”，但提供官方简体中文语言包。安装官方原版后应用该语言包，即可获得完整简体中文界面，这就是通常说的 Telegram 中文版。' },
      { q: 'Telegram 中文和纸飞机是同一个软件吗？', a: '是的。“纸飞机”“飞机”是中文用户对 Telegram 的俗称，Telegram 中文版就是设置为简体中文界面的官方 Telegram。' },
      { q: '设置中文后会影响账号安全吗？', a: '不会。应用官方语言包只改变界面显示语言，不修改客户端本体，账号与消息安全不受影响。' },
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
        heading: '按设备选择下载',
        paragraphs: ['先确认你的设备类型，再点击对应平台进入下载与中文设置说明页。'],
        bullets: [
          'Windows 电脑：/windows/（支持 Win 11/10/8/7 64 位）',
          '安卓手机：/android/（官方 APK 或 Google Play）',
          'iPhone / iPad：/ios/（App Store）',
          'Mac：/mac/（M1/M2 与 Intel）',
          'Linux：/linux/（tar.xz / Snap / Flatpak）',
        ],
      },
      {
        heading: '下载后如何变成“中文版”',
        paragraphs: [
          '安装完官方原版，打开本站“中文设置教程”，点击官方简体中文语言包深链并选择“应用”，整个界面会立即切换为简体中文。',
        ],
      },
      {
        heading: '安全下载提醒',
        paragraphs: ['只认 telegram.org 官方域名与官方应用商店；不要安装来历不明的“汉化破解版”，以免账号被盗。'],
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
};

export const KEYWORD_LIST = Object.values(KEYWORD_PAGES);
