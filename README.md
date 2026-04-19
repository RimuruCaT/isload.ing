# isload.ing

> 永远加载不完。  
> A website that never finishes loading.

**isload.ing** is a performance-art project deployed at [https://isload.ing](https://isload.ing).  
It is a single page that forever simulates the act of loading — a meditation on patience, progress, and the illusion of completion.

---

## Concept

Every day we stare at progress bars, spinners, and skeleton screens that promise content is on its way. *isload.ing* freezes that moment indefinitely. The progress bar climbs toward 100% and never arrives. The status messages cycle through familiar phrases. The wait-timer at the bottom counts up. Nothing ever loads.

That is the point.

---

## Structure

```
isload.ing/
├── index.html   # HTML structure with data-i18n attributes
├── style.css    # All styles
├── script.js    # Progress logic, timer, and i18n language switcher
└── README.md
```

| File | Description |
|---|---|
| **index.html** | Semantic markup; links external CSS and JS |
| **style.css** | All visual styles and animations |
| **script.js** | Progress counter, wait-timer, and EN/中文 language switcher |

---

## Sections

| Section | Description |
|---|---|
| **Header** | Fixed top bar with the site name, a pulsing "loading" indicator, and a language toggle button |
| **Hero** | Full-viewport title with an eternal progress bar and cycling status messages |
| **Gallery** | Eight distinct loading animations presented as labeled specimens |
| **Footer** | Copyright notice and a live counter showing how long the visitor has waited |

---

## Loading Specimens

| Specimen | Description |
|---|---|
| Ring Spinner | Classic single-border rotation |
| Dot Pulse | Three dots with staggered scale animation |
| Progress Bar | Indeterminate sweeping gradient |
| Skeleton | Shimmer-animated placeholder lines |
| Circular Arc | SVG stroke arc that oscillates near completion |
| Wave Bars | Five vertical bars with a wave height animation |
| Ripple | Concentric rings expanding outward forever |
| Double Ring | Two counter-rotating rings |

---

## Deployment

The site is deployed on [Vercel](https://vercel.com) with zero configuration — Vercel automatically serves `index.html` as a static site.

To run locally, just open `index.html` in a browser. No build step required.

---

## License

Do whatever you want with it. It'll be loading when you get back.

---
---

# isload.ing（中文说明）

> 永远加载不完。

**isload.ing** 是一个部署在 [https://isload.ing](https://isload.ing) 的行为艺术项目。这是一个永远模拟加载行为的单页网站——关于耐心、进度与完成幻觉的冥想。

---

## 概念

我们每天盯着进度条、旋转图标和骨架屏，期待内容如约而至。*isload.ing* 将这一瞬间无限定格。进度条不断趋近 100% 却永远无法到达，状态消息在熟悉的文字间循环，底部的计时器不停累加。什么都不会加载完成。

这就是这个项目的意义所在。

---

## 项目结构

```
isload.ing/
├── index.html   # 带有 data-i18n 属性的 HTML 结构
├── style.css    # 全部样式
├── script.js    # 进度逻辑、计时器及中英文切换
└── README.md
```

| 文件 | 描述 |
|---|---|
| **index.html** | 语义化标记，引用外部 CSS 和 JS |
| **style.css** | 所有视觉样式与动画 |
| **script.js** | 进度计数器、等待计时器及语言切换（EN / 中文） |

---

## 页面区块

| 区块 | 描述 |
|---|---|
| **顶栏** | 固定顶部导航，显示站点名称、脉冲加载指示器及语言切换按钮 |
| **主视区** | 全屏标题，配有永不完成的进度条和循环状态消息 |
| **示例区** | 以标注展示八种加载动画 |
| **页脚** | 版权声明及访客等待时长的实时计数器 |

---

## 加载动画示例

| 示例 | 描述 |
|---|---|
| 环形旋转 | 经典单边框旋转 |
| 点阵脉冲 | 三个点的交错缩放动画 |
| 进度条 | 不确定的渐变扫描效果 |
| 骨架屏 | 带闪光动画的占位线条 |
| 圆弧 | 在接近完成处振荡的 SVG 描边弧 |
| 波浪条 | 五根垂直条的波浪高度动画 |
| 涟漪 | 同心圆环永远向外扩散 |
| 双环 | 两个反向旋转的圆环 |

---

## 部署

本站部署于 [Vercel](https://vercel.com)，无需任何配置——Vercel 自动将 `index.html` 作为静态站点提供服务。

本地运行时，直接在浏览器中打开 `index.html` 即可，无需构建步骤。

---

## 许可证

随便用。等你回来的时候它还在加载。

