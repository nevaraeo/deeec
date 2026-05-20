import { OFFICIAL, type Platform } from './site';

export interface Step {
  title: string;
  body: string;
}
export interface Faq {
  q: string;
  a: string;
}
export interface ChangelogEntry {
  version: string;
  date: string;
  notes: string[];
}
export interface PlatformData {
  key: Platform;
  slug: string;            // /windows/
  name: string;            // Telegram 电脑版
  shortName: string;       // 电脑版
  h1: string;
  title: string;           // <title>
  description: string;     // meta description
  keywords: string[];
  icon: string;            // svg path key
  tagline: string;
  version: string;
  fileSize: string;
  requirements: string;
  updated: string;         // ISO date
  downloadUrl: string;
  altUrl?: string;
  altLabel?: string;
  intro: string[];         // 段落
  features: { title: string; body: string }[];
  steps: Step[];
  faqs: Faq[];
  changelog: ChangelogEntry[];
}

const TODAY = '2026-05-18';

export const PLATFORMS: Record<Platform, PlatformData> = {
  windows: {
    key: 'windows',
    slug: '/windows/',
    name: 'Telegram 电脑版（Windows）',
    shortName: '电脑版',
    h1: 'Telegram 电脑版下载｜Windows 中文版客户端',
    title: 'Telegram电脑版下载 - Windows 11/10 中文版客户端',
    description:
      'Telegram 电脑版（Windows）官方下载入口，支持 Windows 11/10/8/7 64 位，附简体中文设置教程。Telegram 中文用户常称“纸飞机”，本页提供官方安全下载地址与安装步骤。',
    keywords: ['telegram电脑版下载', 'telegram下载', 'telegram中文版下载', 'telegram windows', '纸飞机电脑版'],
    icon: 'windows',
    tagline: '面向 Windows 的桌面客户端，支持多账号、云同步与端到端加密私聊。',
    version: '5.12.3',
    fileSize: '约 48 MB',
    requirements: 'Windows 11 / 10 / 8 / 7（64 位）',
    updated: TODAY,
    downloadUrl: OFFICIAL.windows,
    altUrl: OFFICIAL.windowsPortable,
    altLabel: '便携版（Portable）',
    intro: [
      'Telegram 电脑版是官方推出的 Windows 桌面客户端，登录后自动云端同步全部聊天记录，无需手机常在线即可独立收发消息。',
      '很多中文用户把 Telegram 称为“纸飞机”或“飞机”，因此“纸飞机电脑版下载”“飞机电脑端”指的都是同一个官方应用。本页所有下载链接均指向 telegram.org 官方服务器，安全无篡改。',
    ],
    features: [
      { title: '云端同步', body: '聊天记录保存在 Telegram 云端，换电脑、重装系统后登录即恢复，不丢消息。' },
      { title: '多账号切换', body: '单个客户端最多登录多个 Telegram 账号，一键切换互不干扰。' },
      { title: '简体中文', body: '安装后通过官方中文语言包即可切换为完整简体中文界面。' },
      { title: '大文件传输', body: '单文件最高支持 2GB（Premium 4GB），适合传资料、视频与安装包。' },
    ],
    steps: [
      { title: '下载安装包', body: '点击本页“下载 Windows 版”按钮，从官方服务器获取 .exe 安装程序。' },
      { title: '运行安装', body: '双击下载的安装包，按提示选择安装目录并完成安装（默认设置即可）。' },
      { title: '登录账号', body: '打开 Telegram，输入手机号接收验证码登录；已有账号会自动云端同步。' },
      { title: '切换简体中文', body: '在手机或电脑上打开官方中文语言包链接并应用，界面即变为简体中文。' },
    ],
    faqs: [
      { q: 'Telegram 电脑版需要手机一直在线吗？', a: '不需要。Telegram 电脑版是独立客户端，首次用手机验证码登录后即可独立收发消息，手机关机也不影响。' },
      { q: 'Telegram 电脑版怎么设置中文？', a: '安装后点击本站提供的官方简体中文语言包链接并选择“应用”，界面会立即切换为简体中文，无需下载第三方汉化补丁。' },
      { q: '“纸飞机电脑版”和 Telegram 电脑版是同一个吗？', a: '是的。“纸飞机”“飞机”是中文用户对 Telegram 的俗称，电脑版指的就是官方 Windows 桌面客户端。' },
      { q: 'Windows 7 还能用 Telegram 吗？', a: '可以。当前 Telegram 桌面版仍兼容 64 位 Windows 7，但建议尽量在 Windows 10/11 上使用以获得最佳安全性。' },
    ],
    changelog: [
      { version: '5.12.3', date: '2026-05-12', notes: ['优化大文件上传稳定性', '修复多账号通知偶发延迟', '提升简体中文翻译完整度'] },
      { version: '5.11.0', date: '2026-04-22', notes: ['新增聊天文件夹快捷键', '改进截图标注工具'] },
      { version: '5.10.1', date: '2026-04-03', notes: ['修复高 DPI 屏幕显示模糊问题'] },
    ],
  },

  android: {
    key: 'android',
    slug: '/android/',
    name: 'Telegram 安卓版（Android）',
    shortName: '安卓',
    h1: 'Telegram 安卓下载｜Android APK 中文版',
    title: 'Telegram安卓下载 - APK下载（Android 中文版）',
    description:
      'Telegram 安卓版下载，提供官方 APK 与 Google Play 两种安全安装方式，附简体中文设置教程。纸飞机安卓版指的就是 Telegram 官方 Android 客户端。',
    keywords: ['telegram安卓下载', 'telegram apk下载', 'telegram下载', '纸飞机下载', '飞机下载', 'telegram中文'],
    icon: 'android',
    tagline: 'Android 官方客户端，支持 APK 直装与 Google Play 安装。',
    version: '11.2.0',
    fileSize: '约 72 MB',
    requirements: 'Android 6.0 及以上',
    updated: TODAY,
    downloadUrl: OFFICIAL.android,
    altUrl: OFFICIAL.androidPlay,
    altLabel: 'Google Play 安装',
    intro: [
      'Telegram 安卓版提供两种官方安装方式：直接下载官方 APK 安装，或通过 Google Play 安装。两者均为官方正版，区别仅在更新渠道。',
      '“纸飞机 APK”“飞机安卓下载”说的都是 Telegram 官方 Android 客户端。本页 APK 链接直连 telegram.org，避免第三方市场捆绑插件的风险。',
    ],
    features: [
      { title: '官方 APK', body: '无需 Google 服务即可直接下载安装，适合无 Play 商店的设备。' },
      { title: '省电后台', body: '优化的推送与后台策略，长连接稳定且省电。' },
      { title: '中文界面', body: '应用官方简体中文语言包后，菜单、设置全部为中文。' },
      { title: '云端备份', body: '消息存于云端，更换手机登录即自动恢复全部聊天。' },
    ],
    steps: [
      { title: '下载 APK', body: '点击“下载 Android APK”，从官方服务器获取最新 .apk 文件。' },
      { title: '允许安装', body: '首次安装需在系统设置中允许“安装未知来源应用”（仅对浏览器/文件管理器授权一次）。' },
      { title: '完成安装并登录', body: '点击 APK 完成安装，输入手机号接收验证码登录账号。' },
      { title: '设置简体中文', body: '打开官方简体中文语言包链接，点击“应用”即切换为中文界面。' },
    ],
    faqs: [
      { q: 'Telegram APK 从哪里下载才安全？', a: '请只从 telegram.org 官方地址或 Google Play 下载。本站 APK 按钮直连官方服务器，未做任何二次打包或捆绑。' },
      { q: '安装 APK 提示“未知来源”怎么办？', a: '这是 Android 的正常安全提示。前往“设置 → 应用 → 特殊权限 → 安装未知应用”，对你使用的浏览器或文件管理器授予一次权限即可。' },
      { q: 'Telegram 安卓版怎么改成中文？', a: '安装后通过本站提供的官方简体中文语言包深链应用即可，无需第三方汉化包。' },
      { q: 'APK 版和 Play 商店版有什么区别？', a: '两者都是官方正版。APK 版更新更快、不依赖 Google 服务；Play 版可自动更新。功能完全一致。' },
    ],
    changelog: [
      { version: '11.2.0', date: '2026-05-10', notes: ['新增消息快速翻译', '优化弱网下消息发送重试', '修复部分机型通知延迟'] },
      { version: '11.1.4', date: '2026-04-20', notes: ['提升视频通话清晰度', '修复中文输入法偶发崩溃'] },
      { version: '11.0.0', date: '2026-03-28', notes: ['全新聊天界面与动效', '改进省电策略'] },
    ],
  },

  ios: {
    key: 'ios',
    slug: '/ios/',
    name: 'Telegram iOS 版（iPhone / iPad）',
    shortName: 'iOS',
    h1: 'Telegram iOS 下载｜iPhone / iPad 中文版',
    title: 'Telegram iOS下载 - iPhone/iPad 中文版',
    description:
      'Telegram iOS 版下载，通过 App Store 安装 iPhone / iPad 官方客户端，附中文设置教程。纸飞机 iOS 版即 Telegram 官方应用。',
    keywords: ['telegram ios下载', 'telegram下载', 'telegram中文版下载', '纸飞机ios', '飞机下载'],
    icon: 'apple',
    tagline: 'iPhone 与 iPad 官方客户端，App Store 一键安装。',
    version: '11.2',
    fileSize: '约 210 MB',
    requirements: 'iOS 15.0 及以上 / iPadOS 15.0 及以上',
    updated: TODAY,
    downloadUrl: OFFICIAL.ios,
    altUrl: OFFICIAL.macAppStore,
    altLabel: 'App Store 页面',
    intro: [
      'iOS 用户通过 App Store 安装 Telegram 最为简单安全。点击本页按钮会跳转到官方下载页 / App Store 的 Telegram 应用页。',
      '“纸飞机 iOS”“飞机苹果版”指的都是同一个 Telegram 官方应用。App Store 内的版本由 Telegram 官方发布，自动更新、可信赖。',
    ],
    features: [
      { title: 'App Store 正版', body: '由 Telegram FZ-LLC 官方发布，签名可信，自动更新。' },
      { title: 'iCloud 无关', body: '聊天记录存于 Telegram 云端，换机登录即恢复，不占用 iCloud。' },
      { title: '中文界面', body: '应用官方简体中文语言包后界面完整中文化。' },
      { title: '隐私保护', body: '支持秘密聊天端到端加密、阅后即焚与两步验证。' },
    ],
    steps: [
      { title: '打开下载入口', body: '点击“前往 App Store 下载”，跳转到 Telegram 官方应用页面。' },
      { title: '安装应用', body: '点击“获取 / 安装”，使用 Face ID 或 Apple ID 确认下载。' },
      { title: '登录账号', body: '打开 Telegram，输入手机号接收验证码完成登录。' },
      { title: '切换中文', body: '在 Safari 中打开官方简体中文语言包链接，点击“应用”即切换中文。' },
    ],
    faqs: [
      { q: 'Telegram iOS 版在中国区 App Store 搜不到怎么办？', a: '可切换到其它地区的 App Store 账号，或直接通过本站官方入口跳转到 Telegram 应用页安装。本站链接指向官方页面。' },
      { q: 'iPhone 上 Telegram 怎么设置中文？', a: '用 Safari 打开本站提供的官方简体中文语言包链接，点击“应用 / Apply”，Telegram 界面会立即变为简体中文。' },
      { q: 'iOS 版“纸飞机”和安卓版能互通吗？', a: '可以。Telegram 全平台账号互通，消息云端同步，iOS、安卓、电脑可同时在线。' },
      { q: 'iPad 可以单独安装 Telegram 吗？', a: '可以。iPad 在 App Store 同样能安装 Telegram，并支持分屏与外接键盘。' },
    ],
    changelog: [
      { version: '11.2', date: '2026-05-09', notes: ['适配最新 iOS，新增锁屏小组件', '优化媒体加载速度'] },
      { version: '11.1', date: '2026-04-18', notes: ['改进通话稳定性', '修复中文显示个别截断'] },
      { version: '11.0', date: '2026-03-25', notes: ['全新界面与手势', '支持更多自定义主题'] },
    ],
  },

  mac: {
    key: 'mac',
    slug: '/mac/',
    name: 'Telegram Mac 版（macOS）',
    shortName: 'Mac',
    h1: 'Telegram Mac 下载｜macOS 中文版客户端',
    title: 'Telegram Mac下载 - M1/M2/Intel 中文版',
    description:
      'Telegram Mac 版下载，原生支持 Apple Silicon（M1/M2/M3）与 Intel 芯片，附简体中文设置教程。纸飞机 Mac 版即 Telegram 官方 macOS 客户端。',
    keywords: ['telegram mac下载', 'telegram下载', 'telegram中文版下载', '纸飞机mac', 'telegram电脑版下载'],
    icon: 'apple',
    tagline: '原生 macOS 客户端，Apple Silicon 与 Intel 双架构支持。',
    version: '11.2.1',
    fileSize: '约 65 MB',
    requirements: 'macOS 11 Big Sur 及以上（Apple Silicon / Intel）',
    updated: TODAY,
    downloadUrl: OFFICIAL.mac,
    altUrl: OFFICIAL.macAppStore,
    altLabel: 'Mac App Store',
    intro: [
      'Telegram Mac 版是为 macOS 深度优化的原生应用，对 M1/M2/M3 等 Apple Silicon 芯片提供原生支持，运行流畅省电。',
      '你可以从官方 .dmg 直接下载，或通过 Mac App Store 安装。“纸飞机 Mac”“飞机苹果电脑版”均指此官方客户端。',
    ],
    features: [
      { title: '原生 Apple Silicon', body: '为 M 系列芯片原生编译，启动快、能耗低。' },
      { title: 'macOS 体验', body: '支持系统通知、聚焦、拖拽分享与暗色模式。' },
      { title: '云端同步', body: '与手机、Windows 端实时同步全部聊天记录。' },
      { title: '中文界面', body: '应用官方简体中文语言包即完整中文化。' },
    ],
    steps: [
      { title: '下载 DMG', body: '点击“下载 Mac 版”，从官方服务器获取 .dmg 安装镜像。' },
      { title: '拖入应用程序', body: '打开 .dmg，将 Telegram 图标拖入“应用程序”文件夹。' },
      { title: '首次打开授权', body: '在“启动台”打开 Telegram，如提示来源未知，在“系统设置 → 隐私与安全性”点击“仍要打开”。' },
      { title: '登录并切换中文', body: '输入手机号登录后，打开官方简体中文语言包链接应用即可。' },
    ],
    faqs: [
      { q: 'Telegram Mac 版支持 M1/M2/M3 芯片吗？', a: '支持。官方 Mac 版为通用二进制，原生运行于 Apple Silicon（M1/M2/M3），也兼容 Intel Mac。' },
      { q: '打开提示“无法验证开发者”怎么办？', a: '前往“系统设置 → 隐私与安全性”，在底部找到 Telegram 并点击“仍要打开”，确认后即可正常启动。' },
      { q: 'Mac 版“纸飞机”怎么设置中文？', a: '登录后用浏览器打开本站官方简体中文语言包链接并应用，界面立即变为简体中文。' },
      { q: '从官网 DMG 下载和 Mac App Store 有何区别？', a: '都是官方版本。DMG 更新更快；App Store 版本可随系统自动更新。功能一致。' },
    ],
    changelog: [
      { version: '11.2.1', date: '2026-05-11', notes: ['优化 Apple Silicon 内存占用', '修复拖拽发送大文件偶发失败'] },
      { version: '11.1.2', date: '2026-04-19', notes: ['改进通知中心交互', '修复中文字体渲染'] },
      { version: '11.0.0', date: '2026-03-26', notes: ['全新侧边栏与多窗口支持'] },
    ],
  },

  linux: {
    key: 'linux',
    slug: '/linux/',
    name: 'Telegram Linux 版',
    shortName: 'Linux',
    h1: 'Telegram Linux 下载｜中文版桌面客户端',
    title: 'Telegram Linux下载 - 中文版桌面客户端',
    description:
      'Telegram Linux 版下载，提供官方静态二进制（tar.xz）以及 Snap / Flatpak 安装方式，附简体中文设置教程。',
    keywords: ['telegram linux下载', 'telegram下载', 'telegram中文版下载', 'telegram电脑版下载', '纸飞机linux'],
    icon: 'linux',
    tagline: '官方静态二进制，几乎兼容所有主流 Linux 发行版。',
    version: '5.12.3',
    fileSize: '约 50 MB',
    requirements: 'glibc 2.31+ 的 64 位发行版（Ubuntu/Debian/Fedora/Arch 等）',
    updated: TODAY,
    downloadUrl: OFFICIAL.linux,
    intro: [
      'Telegram Linux 版以官方静态二进制方式发布，解压即用，几乎兼容所有主流发行版，也可通过 Snap 或 Flatpak 安装。',
      '“纸飞机 Linux 版”指的就是此官方桌面客户端，与 Windows / Mac 版同源同步。',
    ],
    features: [
      { title: '静态二进制', body: '无需复杂依赖，下载解压即可运行。' },
      { title: '多发行版兼容', body: 'Ubuntu、Debian、Fedora、Arch 等主流系统均可使用。' },
      { title: 'Snap / Flatpak', body: '也可通过 snap install telegram-desktop 或 Flathub 安装。' },
      { title: '中文界面', body: '应用官方简体中文语言包后完整中文化。' },
    ],
    steps: [
      { title: '下载 tar.xz', body: '点击“下载 Linux 版”，获取官方 tsetup tar.xz 压缩包。' },
      { title: '解压', body: '执行 tar -xJf tsetup.*.tar.xz 解压到任意目录。' },
      { title: '运行', body: '进入解压目录执行 ./Telegram 启动；首次运行会创建桌面图标。' },
      { title: '登录并设置中文', body: '手机号登录后，浏览器打开官方简体中文语言包链接并应用。' },
    ],
    faqs: [
      { q: 'Telegram Linux 版怎么安装？', a: '下载官方 tar.xz 解压后运行 ./Telegram 即可；也可用 snap install telegram-desktop 或从 Flathub 安装 Flatpak 版本。' },
      { q: 'Linux 版支持中文输入法（fcitx/ibus）吗？', a: '支持。Telegram 桌面版兼容 fcitx5 与 ibus，正常配置输入法环境变量后即可中文输入。' },
      { q: 'Linux 版“纸飞机”如何切换简体中文？', a: '登录后通过本站官方简体中文语言包链接应用即可，无需额外汉化。' },
      { q: '没有 GUI 的服务器能用 Telegram 吗？', a: '桌面版需要图形环境。无 GUI 服务器可使用 Telegram Bot API 或第三方 CLI 客户端，但本站推荐普通用户使用官方桌面版。' },
    ],
    changelog: [
      { version: '5.12.3', date: '2026-05-12', notes: ['同步桌面版新特性', '修复部分 Wayland 下托盘图标问题'] },
      { version: '5.11.0', date: '2026-04-22', notes: ['改进 fcitx5 输入法兼容性'] },
      { version: '5.10.1', date: '2026-04-03', notes: ['修复高分屏缩放'] },
    ],
  },
};

export const PLATFORM_LIST = Object.values(PLATFORMS);
