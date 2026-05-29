import { PLATFORMS } from './platforms';
import type { Faq, Step } from './platforms';
import type { Platform } from './site';

/**
 * Programmatic SEO 矩阵
 * 「平台 × 系统版本」组合生成长尾下载页：/telegram-download-for-windows-11/ 等。
 * 每条数据携带版本特有的 highlight / note / detail，避免薄内容与模板化重复页。
 */

export interface MatrixEntry {
  combo: string;
  platform: Platform;
  osVersion: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  highlight: string; // 该系统版本的差异化要点（1 句）
  detail: string;    // 版本特有的权威正文段（独一无二，去模板化）
  note: string;      // 安装/兼容性提示
  extraSteps?: Step[];
  faqs: Faq[];
}

interface Raw {
  combo: string;
  platform: Platform;
  osVersion: string;
  /** 标题用的精简系统名（osVersion 过长时用，避免 SERP 截断）；缺省回退 osVersion */
  titleOs?: string;
  highlight: string;
  note: string;
  detail: string;
}

const RAW: Raw[] = [
  {
    combo: 'windows-11',
    platform: 'windows',
    osVersion: 'Windows 11',
    highlight: 'Windows 11 对 Telegram 桌面版的支持最为完善，系统级深色模式、圆角窗口与分屏布局一应俱全。',
    note: 'Windows 11 默认 64 位，直接下载官方 64 位安装包即可，无需任何兼容性设置。',
    detail:
      'Windows 11 是当前最适合运行 Telegram 桌面版的系统：它原生支持系统级深色模式、Mica 半透明材质、圆角窗口与 Snap Layouts 分屏，配合全新的通知中心，消息提醒与多窗口办公体验在 Win11 上表现最佳。安装官方桌面版后，你可登录多个账号、使用聊天文件夹、收发最高 2GB 的文件，所有聊天通过 Telegram 云端在 Win11 与手机端实时同步。',
  },
  {
    combo: 'windows-10',
    platform: 'windows',
    osVersion: 'Windows 10',
    highlight: 'Windows 10 是装机量最大、Telegram 桌面版运行最稳定成熟的环境。',
    note: '若为 32 位 Windows 10，建议升级系统或改用网页版 web.telegram.org。',
    detail:
      'Windows 10 拥有最庞大的桌面用户基数，也是 Telegram 桌面版兼容性最成熟、运行最稳定的平台。64 位 Win10 可完整使用多账号切换、云端同步、聊天文件夹、截图标注与大文件传输等全部功能，长时间挂机收发消息表现可靠；若你仍在使用 32 位系统，受限于内存寻址，建议升级到 64 位或改用网页版以获得完整体验。',
  },
  {
    combo: 'windows-7',
    platform: 'windows',
    osVersion: 'Windows 7',
    highlight: '当前 Telegram 桌面版仍兼容 64 位 Windows 7，可正常收发消息与传输文件。',
    note: 'Windows 7 已停止安全更新，建议尽快升级系统以保障账号安全。',
    detail:
      '尽管微软早已停止对 Windows 7 的官方安全更新，目前 Telegram 桌面版仍兼容 64 位 Win7，可正常登录、收发消息、加入群组与频道、传输文件。出于账号与系统安全考虑，长期使用仍强烈建议升级到 Windows 10 或 11；若暂时无法升级，请确保系统已打齐补丁、配合可靠的安全软件，并务必只从官方源下载安装包。',
  },
  {
    combo: 'windows-8',
    platform: 'windows',
    osVersion: 'Windows 8 / 8.1',
    titleOs: 'Windows 8',
    highlight: 'Windows 8 / 8.1 64 位可正常安装与运行 Telegram 桌面版。',
    note: '安装步骤与 Windows 10 完全一致，下载官方 64 位安装包即可。',
    detail:
      'Windows 8 与 8.1 的 64 位版本均可顺利安装运行 Telegram 桌面版，安装流程与 Windows 10 完全一致，触屏设备上同样可获得不错的操作体验。需要说明的是，深色模式、Mica 材质等较新的界面特性以 Windows 10/11 适配更为完整；若设备条件允许，升级系统不仅能延续安全更新，也能获得更现代的桌面体验。',
  },
  {
    combo: 'android-15',
    platform: 'android',
    osVersion: 'Android 15',
    highlight: 'Android 15 强化了前台服务与隐私沙盒，Telegram 已完整适配，推送及时、后台更省电。',
    note: '首次安装官方 APK 需对浏览器或文件管理器授予一次“安装未知应用”权限。',
    detail:
      'Android 15 进一步收紧了前台服务、通知权限与隐私沙盒策略，Telegram 已完整适配：消息推送通过受信任的前台连接保持及时，后台耗电也进一步优化。通过官方 APK 直装无需依赖 Google 服务，适合大量国行机型；安装完成后，建议把 Telegram 加入电池优化白名单，并在通知设置中允许其发送通知，避免厂商省电策略影响消息实时性。',
  },
  {
    combo: 'android-14',
    platform: 'android',
    osVersion: 'Android 14',
    highlight: 'Android 14 在通知与隐私控制上更精细，官方 APK 与 Google Play 版均完整支持。',
    note: '建议安装后允许通知权限，并把 Telegram 列入后台运行白名单。',
    detail:
      'Android 14 提供了更精细的通知与隐私控制，Telegram 官方 APK 与 Google Play 版本均完整支持其全部能力。APK 版更新更快、不依赖 Google 服务，Play 版则可自动更新，二者功能完全一致。建议安装后在系统设置中允许通知权限，并视机型把 Telegram 加入后台运行/省电白名单，确保群组与私聊消息能实时送达。',
  },
  {
    combo: 'android-13',
    platform: 'android',
    osVersion: 'Android 13',
    highlight: 'Android 13 起通知改为主动授予，安装后需在系统中允许 Telegram 通知。',
    note: '官方 APK 适合无 Google 服务（GMS）的设备，功能与 Play 版一致。',
    detail:
      '从 Android 13 开始，应用通知权限改由用户主动授予，因此安装 Telegram 后请在系统弹窗或“设置 → 通知”中允许其发送通知，否则可能收不到消息提醒。该版本完整支持最新版 Telegram；官方 APK 尤其适合没有 Google 服务（GMS）的设备，直连 telegram.org 下载，与 Play 商店版本功能完全相同。',
  },
  {
    combo: 'android-12',
    platform: 'android',
    osVersion: 'Android 12',
    highlight: 'Android 12 带来 Material You 动态取色，Telegram 主题可随壁纸生成配色。',
    note: '更早的 Android 6–11 同样兼容，下载同一官方 APK 即可。',
    detail:
      'Android 12 引入了 Material You 动态取色，Telegram 可随系统壁纸生成主题色，视觉风格更统一协调。该系统可流畅运行最新版 Telegram，享受云端同步、超大群组与端到端加密的秘密聊天；更早的 Android 6 至 11 也完全兼容，无需为旧系统寻找特殊或精简版本，下载同一份官方 APK 安装即可。',
  },
  {
    combo: 'ios-18',
    platform: 'ios',
    osVersion: 'iOS 18',
    highlight: 'iOS 18 上 Telegram 适配了全新锁屏/主屏小组件、控制中心入口与隐私权限提示。',
    note: '通过 App Store 安装即享自动更新，本站入口跳转 Telegram 官方应用页。',
    detail:
      'iOS 18 上的 Telegram 适配了全新的锁屏与主屏小组件、控制中心快捷入口以及更细致的隐私权限提示，让你在不解锁的情况下也能快速查看与回复消息。经 App Store 安装即享自动更新；本站入口会跳转到 Telegram 官方应用页，确保你下载到由 Telegram FZ-LLC 签名发布的正版应用，账号与聊天记录通过云端在 iPhone、iPad 与电脑间无缝同步。',
  },
  {
    combo: 'ios-17',
    platform: 'ios',
    osVersion: 'iOS 17',
    highlight: 'iOS 17 完整支持 Telegram 全部功能，含交互式小组件与待机显示。',
    note: 'iPhone 与 iPad 均可在 App Store 安装，账号云端互通。',
    detail:
      'iOS 17 完整支持 Telegram 的全部能力，包括交互式小组件、待机显示（StandBy）与实况活动，信息触手可及。iPhone 与 iPad 均可在 App Store 直接安装，账号云端互通、多端同时在线；更换设备后只需用手机号登录即可恢复全部聊天记录，无需手动备份迁移。',
  },
  {
    combo: 'ios-16',
    platform: 'ios',
    osVersion: 'iOS 16',
    highlight: 'iOS 16 可正常安装运行最新 Telegram，支持锁屏自定义与专注模式联动。',
    note: '若所在区域 App Store 搜索不到，可切换 Apple ID 地区或经本站官方入口跳转安装。',
    detail:
      'iOS 16 可正常安装并运行最新版 Telegram，支持锁屏自定义、专注模式联动以及端到端加密的秘密聊天，隐私保护到位。如果你所在区域的 App Store 暂时搜索不到 Telegram，可切换到其它地区的 Apple ID，或通过本站 iOS 页面的官方入口跳转到应用页直接安装，全程指向官方源。',
  },
  {
    combo: 'mac-m1',
    platform: 'mac',
    osVersion: 'Mac（Apple Silicon M1/M2/M3）',
    titleOs: 'Mac M1/M2/M3',
    highlight: 'Apple Silicon 上 Telegram 以原生 ARM 运行，启动快、内存低、续航更友好。',
    note: '下载官方 DMG（通用二进制）即可原生运行于 M 系列芯片。',
    detail:
      '在 Apple Silicon（M1/M2/M3）芯片上，Telegram Mac 版以原生 ARM 指令运行，启动迅速、内存占用更低、对续航也更友好。官方 DMG 为通用二进制（Universal），会自动匹配芯片架构；配合 macOS 的聚焦搜索、通知中心与拖拽分享，并与 iPhone、Windows 端实时云端同步，可构成顺畅一致的苹果生态多端体验。',
  },
  {
    combo: 'mac-intel',
    platform: 'mac',
    osVersion: 'Mac（Intel 芯片）',
    titleOs: 'Mac Intel',
    highlight: 'Intel Mac 同样获官方原生支持，功能与 Apple Silicon 版本完全一致。',
    note: '官方 DMG 为通用二进制，自动匹配 Intel 或 Apple Silicon。',
    detail:
      'Intel 芯片的 Mac 同样获得 Telegram 官方原生支持，功能与 Apple Silicon 版本完全一致。官方 DMG 为通用二进制，下载后会自动以适配 Intel 的方式运行，老款 MacBook、iMac 与 Mac mini 用户都可放心安装，照常享受云端同步、秘密聊天与大文件传输等完整能力。',
  },
  {
    combo: 'linux-ubuntu',
    platform: 'linux',
    osVersion: 'Ubuntu',
    highlight: 'Ubuntu 上可用官方 tar.xz 静态二进制，或 sudo snap install telegram-desktop。',
    note: 'snap 版本由官方维护、自动更新；tar.xz 解压即用。',
    detail:
      '在 Ubuntu 上安装 Telegram 有三种官方方式：解压即用的静态二进制 tar.xz、由官方维护并自动更新的 Snap（sudo snap install telegram-desktop），以及来自 Flathub 的 Flatpak。追求省心的桌面用户推荐 Snap，希望保持最新、可控的用户可选 tar.xz；三种方式与 Windows、Mac 版同源同步，并兼容 fcitx5 / ibus 中文输入法。',
  },
  {
    combo: 'linux-debian',
    platform: 'linux',
    osVersion: 'Debian',
    highlight: 'Debian 推荐使用官方静态二进制 tar.xz，避免发行版仓库版本过旧。',
    note: '解压后运行 ./Telegram，首次启动自动创建桌面快捷方式。',
    detail:
      'Debian 官方仓库中的 Telegram 版本往往偏旧，因此推荐直接使用官方静态二进制 tar.xz：解压后运行 ./Telegram 即可，首次启动会自动创建桌面快捷方式与图标。该方式不依赖发行版打包，可始终获得与官方同步的最新版本，对稳定优先、又希望及时更新的 Debian 用户尤为合适。',
  },
  {
    combo: 'linux-fedora',
    platform: 'linux',
    osVersion: 'Fedora',
    highlight: 'Fedora 可用官方 tar.xz 或 Flathub 的 Flatpak 安装 Telegram Desktop。',
    note: 'Flatpak：flatpak install flathub org.telegram.desktop。',
    detail:
      'Fedora 用户可通过官方静态二进制 tar.xz，或来自 Flathub 的 Flatpak（flatpak install flathub org.telegram.desktop）安装 Telegram。Flatpak 在依赖隔离与自动更新方面更省心，tar.xz 则更轻量、可控；两者都能完整使用云端同步、秘密聊天、超大群组与大文件传输，并良好兼容 Wayland 桌面环境。',
  },
];

export const MATRIX: MatrixEntry[] = RAW.map((r) => {
  const p = PLATFORMS[r.platform];
  const titleOs = r.titleOs ?? r.osVersion;
  return {
    combo: r.combo,
    platform: r.platform,
    osVersion: r.osVersion,
    h1: `Telegram ${r.osVersion} 下载｜${p.shortName}中文版安装教程`,
    title: `Telegram ${titleOs} 下载 - ${p.shortName}中文版安装`,
    description: `${r.osVersion} 上 Telegram（${p.shortName}）官方下载与简体中文设置完整指南。${r.highlight} 下载直连 telegram.org 官方源，安全无捆绑。`,
    keywords: [
      `telegram ${r.osVersion.toLowerCase()} 下载`,
      'telegram下载',
      'telegram中文版下载',
      `${p.shortName}下载`,
      '纸飞机下载',
    ],
    intro: `本页面向 ${r.osVersion} 用户，提供 Telegram（中文俗称“纸飞机”/“飞机”）的官方下载入口与分步安装步骤。${r.note}`,
    highlight: r.highlight,
    detail: r.detail,
    note: r.note,
    faqs: [
      {
        q: `Telegram 在 ${r.osVersion} 上怎么下载安装？`,
        a: `从本页官方入口下载${p.shortName}安装包，按下方分步教程安装并登录，再应用官方简体中文语言包即可。${r.note}`,
      },
      {
        q: `${r.osVersion} 上的 Telegram 能设置成简体中文吗？`,
        a: '可以。安装官方原版后，点击官方简体中文语言包深链并选择“应用 / Apply”，界面会立即切换为简体中文，无需第三方汉化补丁。',
      },
      {
        q: `在 ${r.osVersion} 下载 Telegram 安全吗？`,
        a: '只要从 telegram.org 官方源或官方应用商店下载就是安全的。本页所有入口均直连官方服务器，不二次打包、不捆绑插件；请勿安装来历不明的“汉化破解版”。',
      },
    ],
  };
});

export const MATRIX_MAP = new Map(MATRIX.map((m) => [m.combo, m]));
