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
├── index.html   # The entire site — one self-contained HTML file
└── README.md
```

The site is intentionally a single, dependency-free HTML file:

| Section | Description |
|---|---|
| **Header** | Fixed top bar with the site name and a pulsing "loading" indicator |
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

