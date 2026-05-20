import { PLATFORMS } from './platforms';
import type { Faq, Step } from './platforms';
import type { Platform } from './site';

/**
 * Programmatic SEO 矩阵
 * 通过「平台 × 系统版本」组合自动生成长尾下载页：
 *   /telegram-download-for-windows-11/
 *   /telegram-download-for-android-15/  ...
 * 每条数据携带差异化文案，避免薄内容/重复页。
 */

export interface MatrixEntry {
  combo: string;          // windows-11
  platform: Platform;
  osVersion: string;      // Windows 11
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  highlight: string;      // 该系统版本的差异化要点
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
}

const RAW: Raw[] = [
  {
    combo: 'windows-11',
    platform: 'windows',
    osVersion: 'Windows 11',
    highlight: '在 Windows 11 上 Telegram 完整支持系统级深色模式、圆角窗口与新版通知中心。',
    note: 'Windows 11 默认 64 位，直接下载官方 64 位安装包即可，无需额外兼容设置。',
  },
  {
    combo: 'windows-10',
    platform: 'windows',
    osVersion: 'Windows 10',
    highlight: 'Windows 10 是 Telegram 桌面版最成熟稳定的运行环境，64 位系统体验最佳。',
    note: '若为 32 位 Windows 10，建议升级系统或改用网页版 web.telegram.org。',
  },
  {
    combo: 'windows-7',
    platform: 'windows',
    osVersion: 'Windows 7',
    highlight: '当前 Telegram 桌面版仍兼容 64 位 Windows 7，可正常收发消息与文件。',
    note: 'Windows 7 已停止安全更新，建议尽快升级系统以保障账号安全。',
  },
  {
    combo: 'windows-8',
    platform: 'windows',
    osVersion: 'Windows 8 / 8.1',
    titleOs: 'Windows 8',
    highlight: 'Windows 8 / 8.1 64 位可正常安装运行 Telegram 桌面版。',
    note: '安装步骤与 Windows 10 完全一致，下载官方 64 位安装包即可。',
  },
  {
    combo: 'android-15',
    platform: 'android',
    osVersion: 'Android 15',
    highlight: 'Android 15 上 Telegram 适配了新的通知权限与后台运行策略，推送更及时。',
    note: '首次安装 APK 需对浏览器授予“安装未知应用”权限（仅一次）。',
  },
  {
    combo: 'android-14',
    platform: 'android',
    osVersion: 'Android 14',
    highlight: 'Android 14 完整支持 Telegram 官方 APK 与 Google Play 两种安装方式。',
    note: '建议开启电池优化白名单，确保消息推送不被系统杀后台。',
  },
  {
    combo: 'android-13',
    platform: 'android',
    osVersion: 'Android 13',
    highlight: 'Android 13 起需单独授予通知权限，安装后请在系统设置允许 Telegram 通知。',
    note: '官方 APK 适合无 Google 服务的设备，功能与 Play 版一致。',
  },
  {
    combo: 'android-12',
    platform: 'android',
    osVersion: 'Android 12',
    highlight: 'Android 12 可流畅运行最新版 Telegram，支持 Material You 动态取色主题。',
    note: '低版本系统如 Android 6–11 同样兼容，下载同一官方 APK 即可。',
  },
  {
    combo: 'ios-18',
    platform: 'ios',
    osVersion: 'iOS 18',
    highlight: 'iOS 18 上 Telegram 适配了锁屏小组件、控制中心入口与最新隐私权限提示。',
    note: '通过 App Store 安装即可自动更新，本站入口跳转官方应用页。',
  },
  {
    combo: 'ios-17',
    platform: 'ios',
    osVersion: 'iOS 17',
    highlight: 'iOS 17 完整支持 Telegram 全部功能，包括待机显示与交互式小组件。',
    note: 'iPhone 与 iPad 均可在 App Store 安装，账号云端互通。',
  },
  {
    combo: 'ios-16',
    platform: 'ios',
    osVersion: 'iOS 16',
    highlight: 'iOS 16 可正常安装运行最新 Telegram，支持锁屏自定义与专注模式联动。',
    note: '若 App Store 区域无法搜索，可通过本站官方入口跳转安装。',
  },
  {
    combo: 'mac-m1',
    platform: 'mac',
    osVersion: 'Mac（Apple Silicon M1/M2/M3）',
    titleOs: 'Mac M1/M2/M3',
    highlight: 'Apple Silicon 上 Telegram 为原生 ARM 运行，启动快、内存低、续航好。',
    note: '下载官方 DMG（通用二进制）即可原生运行于 M 系列芯片。',
  },
  {
    combo: 'mac-intel',
    platform: 'mac',
    osVersion: 'Mac（Intel 芯片）',
    titleOs: 'Mac Intel',
    highlight: 'Intel Mac 同样获官方原生支持，功能与 Apple Silicon 版本完全一致。',
    note: '官方 DMG 为通用二进制，自动匹配 Intel 或 Apple Silicon。',
  },
  {
    combo: 'linux-ubuntu',
    platform: 'linux',
    osVersion: 'Ubuntu',
    highlight: 'Ubuntu 上可用官方 tar.xz 静态二进制，或 sudo snap install telegram-desktop。',
    note: 'snap 版本由官方维护，自动更新；tar.xz 解压即用。',
  },
  {
    combo: 'linux-debian',
    platform: 'linux',
    osVersion: 'Debian',
    highlight: 'Debian 推荐使用官方静态二进制 tar.xz，避免发行版仓库版本过旧。',
    note: '解压后运行 ./Telegram，首次启动自动创建桌面快捷方式。',
  },
  {
    combo: 'linux-fedora',
    platform: 'linux',
    osVersion: 'Fedora',
    highlight: 'Fedora 可用官方 tar.xz 或 Flathub 上的 Flatpak 安装 Telegram Desktop。',
    note: 'Flatpak：flatpak install flathub org.telegram.desktop。',
  },
];

export const MATRIX: MatrixEntry[] = RAW.map((r) => {
  const p = PLATFORMS[r.platform];
  return {
    combo: r.combo,
    platform: r.platform,
    osVersion: r.osVersion,
    h1: `Telegram ${r.osVersion} 下载｜${p.shortName}中文版安装教程`,
    title: `Telegram ${r.titleOs ?? r.osVersion} 下载 - ${p.shortName}中文版安装`,
    description: `${r.osVersion} 上的 Telegram（纸飞机）下载与中文设置：官方安全入口 + 分步安装教程。${r.highlight}`,
    keywords: [
      `telegram ${r.osVersion.toLowerCase()} 下载`,
      'telegram下载',
      'telegram中文版下载',
      `${p.shortName}下载`,
      '纸飞机下载',
    ],
    intro: `本页针对 ${r.osVersion} 提供 Telegram（中文俗称“纸飞机”/“飞机”）官方下载入口与详细安装步骤。${r.highlight} ${r.note}`,
    highlight: r.highlight,
    faqs: [
      {
        q: `Telegram 在 ${r.osVersion} 上怎么下载安装？`,
        a: `从本页官方入口下载${p.shortName}安装包，按下方分步教程安装并登录，再应用官方简体中文语言包即可。${r.note}`,
      },
      {
        q: `${r.osVersion} 上的 Telegram 能设置成中文吗？`,
        a: '可以。安装官方原版后，点击官方简体中文语言包深链并选择“应用”，界面会立即切换为简体中文。',
      },
      {
        q: `${r.osVersion} 的“纸飞机”和 Telegram 是同一个吗？`,
        a: '是同一个。“纸飞机”“飞机”是 Telegram 的中文俗称，下载的就是官方 Telegram 客户端。',
      },
    ],
  };
});

export const MATRIX_MAP = new Map(MATRIX.map((m) => [m.combo, m]));
