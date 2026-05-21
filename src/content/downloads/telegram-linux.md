---
title: Telegram Linux 下载（含 Snap / Flatpak）
description: Telegram Linux 官方下载说明：官方静态二进制 tar.xz 及 Snap、Flatpak 安装方式，兼容 Ubuntu / Debian / Fedora / Arch 等主流发行版，附简体中文设置与命令行示例。
platform: linux
osLabel: 64 位 Linux（glibc 2.31+）
version: 5.12.3
fileSize: 约 50 MB
requirements: Ubuntu/Debian/Fedora/Arch 等主流发行版
updated: 2026-05-12
downloadUrl: https://telegram.org/dl/desktop/linux
badge: 官方静态二进制
order: 5
keywords:
  - telegram linux下载
  - telegram电脑版下载
  - 纸飞机linux
faqs:
  - q: Telegram Linux 版怎么安装？
    a: 下载官方 tar.xz 解压后运行 ./Telegram 即可；也可用 sudo snap install telegram-desktop 或从 Flathub 安装 Flatpak 版本。
  - q: Linux 版支持中文输入法吗？
    a: 支持。Telegram 桌面版兼容 fcitx5 与 ibus，正确配置输入法环境变量后即可中文输入。
changelog:
  - version: 5.12.3
    date: 2026-05-12
    notes:
      - 同步桌面版新特性
      - 修复部分 Wayland 下托盘图标问题
---

## Telegram Linux 版说明

Telegram（纸飞机）Linux 版以官方**静态二进制**发布，几乎兼容所有主流发行版，解压即用。

```bash
# 方式一：官方 tar.xz
tar -xJf tsetup.*.tar.xz
cd Telegram && ./Telegram

# 方式二：Snap
sudo snap install telegram-desktop

# 方式三：Flatpak
flatpak install flathub org.telegram.desktop
```

登录后应用官方简体中文语言包即得 Telegram 中文版界面。详见 [Linux 下载主页](/linux/)。
