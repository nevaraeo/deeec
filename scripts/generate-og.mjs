/**
 * 生成站点默认 OG 分享图（1200×630 PNG）
 * 在本机运行（需有中文字体），产物提交为静态资源，避免在 Vercel 构建时渲染缺中文字体。
 * 用法：npm run og
 */
import { createCanvas, GlobalFonts, Path2D } from '@napi-rs/canvas';
import { writeFileSync, existsSync } from 'node:fs';

// 注册中文字体（按可用情况回退）
const FONT_CANDIDATES = [
  ['C:/Windows/Fonts/simhei.ttf', 'BrandFont'],
  ['C:/Windows/Fonts/Deng.ttf', 'BrandFont'],
  ['/System/Library/Fonts/PingFang.ttc', 'BrandFont'],
  ['/usr/share/fonts/truetype/noto/NotoSansCJK-Bold.ttc', 'BrandFont'],
];
let fontLoaded = false;
for (const [p, family] of FONT_CANDIDATES) {
  if (existsSync(p)) {
    GlobalFonts.registerFromPath(p, family);
    console.log('Using font:', p);
    fontLoaded = true;
    break;
  }
}
const FAMILY = fontLoaded ? 'BrandFont' : 'sans-serif';

const W = 1200,
  H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// 背景渐变
const bg = ctx.createLinearGradient(0, 0, W, H);
bg.addColorStop(0, '#0f172a');
bg.addColorStop(1, '#155b80');
ctx.fillStyle = bg;
ctx.fillRect(0, 0, W, H);

// 右上装饰圆
ctx.save();
ctx.globalAlpha = 0.12;
ctx.fillStyle = '#229ed9';
ctx.beginPath();
ctx.arc(980, 120, 260, 0, Math.PI * 2);
ctx.fill();
ctx.restore();

// 圆角矩形辅助
function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Logo（纸飞机）
ctx.save();
ctx.translate(96, 150);
const lg = ctx.createLinearGradient(0, 0, 0, 120);
lg.addColorStop(0, '#2aabee');
lg.addColorStop(1, '#229ed9');
ctx.fillStyle = lg;
roundRect(0, 0, 120, 120, 28);
ctx.fill();
ctx.fillStyle = '#ffffff';
const plane = new Path2D(
  'M27 58 84 36c2.7-1 5 .6 4 4.6l-9.6 45c-.7 3-2.6 3.8-5.2 2.4l-14.4-10.6-7 6.7c-.8.8-1.5 1.5-3 1.5l1.1-15.7 28.8-26c1.2-1-.3-1.7-1.9-.7L43 60.8 27.8 56c-3.2-1-3.3-3.2 1-5.3z'
);
ctx.fill(plane);
ctx.restore();

// 文案
ctx.fillStyle = '#ffffff';
ctx.font = `700 80px ${FAMILY}`;
ctx.fillText('Telegram 中文下载', 96, 372);

ctx.fillStyle = '#9fd6f0';
ctx.font = `400 38px ${FAMILY}`;
ctx.fillText('电脑版 · 安卓 · iOS · Mac · 纸飞机中文版', 96, 446);

ctx.fillStyle = '#5fbfe6';
ctx.font = `700 32px ${FAMILY}`;
ctx.fillText('telegrams.ltd', 96, 560);

writeFileSync('public/og-default.png', canvas.toBuffer('image/png'));
console.log(`OG image written: public/og-default.png (${W}x${H})`);
