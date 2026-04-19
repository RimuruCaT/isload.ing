// ── Translations ──────────────────────────────────────────
const translations = {
  en: {
    'header-status':   'loading',
    'hero-eyebrow':    'digital meditation',
    'hero-title':      'Still<br><span class="dim">Loading.</span>',
    'hero-sub':        'A website that never finishes loading. An infinite wait rendered in pixels — a meditation on patience, progress, and the illusion of completion.',
    'progress-label':  'Loading resources',
    'loading-word':    'loading',
    'section-label':   'Specimens',
    'section-title':   'The Many Faces of Loading',
    'specimen-hint':   'Click any specimen to preview it in the progress block above ↑',
    'specimen-ring':   'Ring Spinner',
    'specimen-dots':   'Dot Pulse',
    'specimen-bar':    'Progress Bar',
    'specimen-skel':   'Skeleton',
    'specimen-arc':    'Circular Arc',
    'specimen-wave':   'Wave Bars',
    'specimen-ripple': 'Ripple',
    'specimen-double': 'Double Ring',
    'specimen-flip':   'Flip',
    'specimen-orbit':  'Orbit',
    'specimen-grid':   'Grid Pulse',
    'specimen-type':   'Typewriter',
    'footer-copy':     '© isload.ing',
    'footer-credit':   'Made by RimuruCaT',
    'lang-btn':        '中文',
  },
  zh: {
    'header-status':   '加载中',
    'hero-eyebrow':    '数字禅',
    'hero-title':      '仍在<br><span class="dim">加载中</span>',
    'hero-sub':        '一个永远加载不完的网站。无尽的等待凝结成像素——这是一场关于耐心、进度，以及"马上就好"这一永恒幻觉的沉思。',
    'progress-label':  '正在加载资源',
    'loading-word':    '加载中',
    'section-label':   '样品',
    'section-title':   '加载的千姿百态',
    'specimen-hint':   '点击任意样式，切换上方进度展示 ↑',
    'specimen-ring':   '旋转环',
    'specimen-dots':   '跳动圆点',
    'specimen-bar':    '进度条',
    'specimen-skel':   '骨架屏',
    'specimen-arc':    '弧形进度',
    'specimen-wave':   '波形条',
    'specimen-ripple': '涟漪',
    'specimen-double': '双环',
    'specimen-flip':   '翻转',
    'specimen-orbit':  '轨道环绕',
    'specimen-grid':   '网格跳动',
    'specimen-type':   '打字机',
    'footer-copy':     '© isload.ing',
    'footer-credit':   'Made by RimuruCaT',
    'lang-btn':        'EN',
  },
};

const statuses = {
  en: [
    'Initializing...',
    'Connecting to server...',
    'Fetching resources...',
    'Downloading assets...',
    'Almost there...',
    'Verifying integrity...',
    'Synchronizing data...',
    'Loading modules...',
    'Optimizing...',
    'Preparing your experience...',
    'Resolving dependencies...',
    'Still loading...',
  ],
  zh: [
    '初始化...',
    '正在连接服务器...',
    '获取资源...',
    '下载文件...',
    '快好了...',
    '校验文件完整性...',
    '同步数据...',
    '加载模块...',
    '优化中...',
    '为您精心准备中...',
    '解析依赖项...',
    '仍在加载...',
  ],
};

// ── State ─────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'en';
let statusIdx   = 0;
let pct         = 0;
const MAX_PROGRESS_PERCENT = 98.6;
const t0 = Date.now();
const timerPrefix = { en: 'waited:', zh: '已等待:' };

// ── DOM References ────────────────────────────────────────
const fillEl   = document.getElementById('bar-fill');
const pctEl    = document.getElementById('progress-pct');
const statusEl = document.getElementById('progress-status');
const timerEl  = document.getElementById('footer-timer');

// ── i18n ──────────────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var val = translations[lang][el.dataset.i18n];
    if (val !== undefined) {
      el.innerHTML = val;
    }
  });
  statusEl.textContent = statuses[lang][statusIdx % statuses[lang].length];
  updateTimer();
  localStorage.setItem('lang', lang);
}

// ── Progress ──────────────────────────────────────────────
function increment(current) {
  if (current < 40) return Math.random() * 3    + 1;
  if (current < 70) return Math.random() * 1.5  + 0.3;
  if (current < 85) return Math.random() * 0.5  + 0.05;
  if (current < 94) return Math.random() * 0.15 + 0.01;
  return Math.random() * 0.03 + 0.005; // asymptotic crawl
}

function tick() {
  if (pct < MAX_PROGRESS_PERCENT) pct = Math.min(pct + increment(pct), MAX_PROGRESS_PERCENT);
  var display = pct.toFixed(1);
  pctEl.textContent  = display + '%';
  fillEl.style.width = display + '%';
}

function cycleStatus() {
  statusEl.style.opacity = '0';
  setTimeout(function () {
    statusIdx = (statusIdx + 1) % statuses[currentLang].length;
    statusEl.textContent  = statuses[currentLang][statusIdx];
    statusEl.style.opacity = '1';
  }, 300);
}

// ── Timer ─────────────────────────────────────────────────
function updateTimer() {
  var s = Math.floor((Date.now() - t0) / 1000);
  var m = Math.floor(s / 60);
  timerEl.textContent = timerPrefix[currentLang] + ' ' + m + 'm ' + String(s % 60).padStart(2, '0') + 's';
}

// ── Init ──────────────────────────────────────────────────
document.getElementById('lang-btn').addEventListener('click', function () {
  setLang(currentLang === 'en' ? 'zh' : 'en');
});

// ── Progress Style ────────────────────────────────────────
var ALL_STYLES = ['bar','spinner','dots','arc','wave','double','ripple','orbit','grid','flip','type','skel'];
var RANDOM_STYLES = ['bar','spinner','dots','arc','wave','double','ripple','orbit','grid','flip','type'];

function setProgressStyle(style) {
  var block = document.getElementById('progress-block');
  ALL_STYLES.forEach(function (s) { block.classList.remove('style-' + s); });
  block.classList.add('style-' + style);
  document.querySelectorAll('.specimen').forEach(function (el) {
    el.classList.toggle('active', el.dataset.style === style);
  });
}

function initProgressStyle() {
  var style = RANDOM_STYLES[Math.floor(Math.random() * RANDOM_STYLES.length)];
  setProgressStyle(style);
}

document.querySelectorAll('.specimen[data-style]').forEach(function (el) {
  el.addEventListener('click', function () {
    setProgressStyle(el.dataset.style);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ── Scroll Hint ───────────────────────────────────────────
var scrollHint = document.getElementById('scroll-hint');
scrollHint.addEventListener('click', function () {
  document.querySelector('.divider').scrollIntoView({ behavior: 'smooth' });
});
window.addEventListener('scroll', function () {
  if (window.scrollY > 60) {
    scrollHint.classList.add('hidden');
  } else {
    scrollHint.classList.remove('hidden');
  }
}, { passive: true });

setInterval(tick, 800);
setInterval(cycleStatus, 3500);
setInterval(updateTimer, 1000);

tick();
updateTimer();
initProgressStyle();
setLang(currentLang);
