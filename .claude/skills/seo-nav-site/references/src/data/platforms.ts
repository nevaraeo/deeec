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
  deepDive: { heading: string; paragraphs: string[] }[]; // 平台特有的权威语义段
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
      'Telegram 电脑版下载权威指南。面向 Windows 11/10/8/7（64 位）的官方桌面客户端，提供安装版与便携版两种下载入口，并附简体中文设置完整步骤。Telegram 在中文圈常被称为“纸飞机”，本页所有下载地址均指向 telegram.org 官方源，安全无捆绑。',
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
      '作为一款跨平台即时通讯软件，Telegram 以隐私保护、消息云端同步与高速传输著称。桌面版完整继承这些能力，并针对 Windows 优化了系统通知、任务栏托盘、多窗口与高 DPI 显示，适合长时间办公与多账号管理。',
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
    deepDive: [
      {
        heading: 'Telegram 电脑版：独立运行与高效办公',
        paragraphs: [
          'Telegram 电脑版是真正独立的桌面客户端：首次用手机验证码登录后，即使手机离线或关机，也能在电脑上独立收发消息、加入群组与频道。它支持在同一客户端登录多个账号并一键切换，配合聊天文件夹、置顶会话与丰富的键盘快捷键，非常适合长时间办公、客服与社群管理场景。',
          '所有聊天通过 Telegram 云端保存，换电脑或重装系统后登录即恢复，不会丢消息；单文件最高 2GB（Premium 4GB）的传输能力，也让它胜任发送资料、视频与安装包。',
        ],
      },
      {
        heading: '为什么坚持从官方源下载 Windows 版',
        paragraphs: [
          '本页的安装版与便携版均直连 telegram.org 官方服务器，文件未经任何二次打包或捆绑。网络上的“Telegram 中文版.exe / 汉化绿色版”常被植入广告、后台程序，甚至窃取登录验证码导致盗号——为“中文”去装这类文件得不偿失。',
          '正确做法是：下载官方原版，再应用官方简体中文语言包获得完整中文界面；并在客户端内开启两步验证，为账号再加一道密码锁。',
        ],
      },
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
      'Telegram 安卓下载权威指南。提供官方 APK 直接安装与 Google Play 两种方式，兼容 Android 6.0 及以上机型，并附简体中文设置教程。官方 APK 直连 telegram.org，不二次打包、不捆绑插件。中文用户常称的“纸飞机安卓版”即官方 Telegram。',
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
      'Android 版由 Telegram 官方持续维护，支持消息云端同步、最多 20 万人的超大群组与频道、端到端加密的秘密聊天，以及最高 2GB 的文件传输。官方 APK 适合无 Google 服务（GMS）的国行机型，与 Google Play 版功能完全一致。',
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
    deepDive: [
      {
        heading: '官方 APK 与 Google Play：该怎么选',
        paragraphs: [
          '安卓版有两种官方安装方式：官方 APK 直连 telegram.org，不依赖 Google 服务、更新更快，特别适合没有 GMS 的国行机型；Google Play 版本则可随商店自动更新。两者由 Telegram 官方发布、功能完全一致，按你的设备与使用习惯选择即可。',
          '请始终从这两个官方渠道获取安装包，避免第三方应用市场中被捆绑插件、二次打包的版本。',
        ],
      },
      {
        heading: '让安卓消息既及时又省电',
        paragraphs: [
          '为保证群组与私聊消息实时送达，建议安装后在系统中允许 Telegram 的通知权限，并把它加入电池优化（省电）白名单，避免被厂商的后台清理策略误杀。',
          '首次安装 APK 时，系统会提示“安装未知应用”——这是 Android 的正常安全机制，只需对你使用的浏览器或文件管理器授予一次权限即可，与安装包是否安全无关。',
        ],
      },
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
      'Telegram iOS 下载权威指南。通过 App Store 安装 iPhone / iPad 官方客户端，兼容 iOS / iPadOS 15 及以上，账号云端同步、多端互通，并附简体中文设置步骤。中文用户常称的“纸飞机 iOS 版”即官方 Telegram 应用。',
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
      'iOS 版由 Telegram FZ-LLC 在 App Store 官方发布，签名可信、自动更新，支持秘密聊天端到端加密、两步验证与锁屏小组件。聊天记录存于 Telegram 云端，更换设备登录即可恢复，不占用 iCloud 空间。',
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
    deepDive: [
      {
        heading: 'App Store 正版：可信签名与自动更新',
        paragraphs: [
          'iOS 版由 Telegram FZ-LLC 在 App Store 官方发布，应用签名可信、随系统自动更新，是 iPhone / iPad 上最省心、最安全的获取方式。点击本页入口会跳转到官方应用页，确保你安装的是正版而非仿冒应用。',
          '聊天记录保存在 Telegram 云端、不占用 iCloud 空间，换机后用手机号登录即可恢复全部消息，iPhone 与 iPad 还能同时在线。',
        ],
      },
      {
        heading: 'iPhone / iPad 上的隐私与多端协作',
        paragraphs: [
          '隐私方面，iOS 版支持端到端加密的“秘密聊天”、阅后即焚与两步验证，满足高私密沟通需求；日常云聊天则在多设备间实时同步，手机、平板、电脑无缝衔接。',
          '若所在区域的 App Store 暂时搜索不到 Telegram，可切换其它地区的 Apple ID，或通过本站官方入口跳转安装，全程指向官方页面。',
        ],
      },
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
      'Telegram Mac 下载权威指南。原生支持 Apple Silicon（M1/M2/M3）与 Intel 的 macOS 客户端，提供官方 DMG 与 Mac App Store 两种入口，并附简体中文设置步骤。所有下载地址均指向官方源，安全可靠。',
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
      'Mac 版采用通用二进制（Universal）原生运行于 Apple Silicon，启动迅速、能耗更低，并支持系统通知、聚焦搜索、拖拽分享与暗色模式，与手机端、Windows 端实时云端同步，适合苹果生态用户无缝衔接多设备。',
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
    deepDive: [
      {
        heading: 'macOS：原生性能与系统级集成',
        paragraphs: [
          'Telegram Mac 版为通用二进制（Universal），原生运行于 Apple Silicon（M1/M2/M3）同时兼容 Intel，启动迅速、内存占用低、对续航更友好。它深度集成 macOS 体验：系统通知、聚焦搜索、拖拽分享与暗色模式一应俱全，并与 iPhone、Windows 端实时云端同步。',
          '你可从官方 DMG 直接安装，或通过 Mac App Store 获取；两者均为官方版本，DMG 更新更快、App Store 可随系统自动更新。',
        ],
      },
      {
        heading: '首次打开的安全提示如何处理',
        paragraphs: [
          '从官方 DMG 安装后首次打开，若 macOS 提示“无法验证开发者 / 来源未知”，前往“系统设置 → 隐私与安全性”，在底部找到 Telegram 点击“仍要打开”确认即可，这是 Gatekeeper 的正常机制。',
          '请只从 telegram.org 或 Mac App Store 获取安装包，不要使用来历不明的第三方 DMG，以保障账号与系统安全。',
        ],
      },
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
      'Telegram Linux 下载权威指南。提供官方静态二进制（tar.xz）以及 Snap、Flatpak 安装方式，兼容 Ubuntu / Debian / Fedora / Arch 等主流发行版，并附简体中文设置与命令行示例，地址均指向 telegram.org 官方源。',
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
      'Linux 版与 Windows、Mac 版功能完全一致，支持云端同步、fcitx5 / ibus 中文输入法与系统托盘。官方静态二进制几乎兼容所有现代发行版，解压即可运行、无需额外依赖，是开发者与桌面用户的可靠选择。',
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
    deepDive: [
      {
        heading: '三种官方安装方式，怎么选',
        paragraphs: [
          'Linux 上获取 Telegram 有三种官方方式：解压即用的静态二进制 tar.xz、由官方维护并自动更新的 Snap（sudo snap install telegram-desktop），以及来自 Flathub 的 Flatpak（flatpak install flathub org.telegram.desktop）。追求省心的桌面用户推荐 Snap 或 Flatpak，希望轻量可控、随时拿到最新版的用户可选 tar.xz。',
          '三种方式都与 Windows、Mac 版同源同步，功能完全一致；发行版仓库里的版本往往偏旧，因此更推荐上述官方渠道。',
        ],
      },
      {
        heading: '中文输入与桌面兼容性',
        paragraphs: [
          'Telegram 桌面版良好兼容 fcitx5 与 ibus 中文输入法，正确配置输入法环境变量后即可正常中文输入；在 X11 与 Wayland 桌面环境下均可运行，托盘图标等细节也已针对 Wayland 优化。',
          '官方静态二进制几乎兼容所有现代发行版（Ubuntu、Debian、Fedora、Arch 等），解压后运行 ./Telegram 即可，无需安装额外依赖，适合开发者与桌面用户长期使用。',
        ],
      },
    ],
  },
};

export const PLATFORM_LIST = Object.values(PLATFORMS);
