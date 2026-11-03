# 🎬 iLoveMP4 — 100% Client-Side Universal MP4 & Audio Converter

[![Live Demo](https://img.shields.io/badge/Live_App-ilovemp4.github.io-790D16?style=for-the-badge)](https://ilovemp4.github.io/)
[![Astro 5.x](https://img.shields.io/badge/Framework-Astro_5.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![FFmpeg.wasm](https://img.shields.io/badge/Engine-FFmpeg.wasm-007808?style=for-the-badge)](https://ffmpegwasm.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-E5D3AF?style=for-the-badge&labelColor=12100E)](./LICENSE)
[![Support the Developer](https://img.shields.io/badge/Support_the_Developer-Buy_Me_a_Coffee-790D16?style=for-the-badge&logo=gumroad&logoColor=white)](https://kisharadilshan.gumroad.com/coffee)

**iLoveMP4** ([https://ilovemp4.github.io/](https://ilovemp4.github.io/)) is an ultra-minimal, privacy-first web application that converts videos, audio tracks, and animated GIFs **100% locally inside your browser's RAM**.

Powered by Astro Islands and WebAssembly (`FFmpeg.wasm`), your files never leave your device—**zero cloud uploads, zero file-size paywalls, and full offline capability**.

---

## ✨ Key Features

- **🔒 100% Local RAM Processing:** Zero server uploads. Complete privacy for sensitive personal or commercial media files.
- **⚡ Instant Hero Utility:** Clean, oversized UI inside an interactive converter box—drop a file and convert in 3 clicks with smooth hardware-accelerated animations.
- **🌍 8-Language Localization:** Full native UI support for **English (`en`), Español (`es`), Português (`pt`), Deutsch (`de`), Français (`fr`), 日本語 (`ja`), 简体中文 (`zh`), and Русский (`ru`)**.
- **🌓 Adaptive Light & Dark Mode:** Crafted with a warm editorial palette (`#790D16` Crimson Ruby, `#E5D3AF` Warm Sand, `#F5EFE1` Soft Alabaster, and `#AEC4D4` Steel Blue) plus a WCAG AAA high-contrast dark mode (`#12100E`).
- **📲 Offline-Ready PWA ("Add to Home Screen"):** Installable on Desktop, iOS, and Android for 100% offline video and audio conversion.
- **📱 Responsive Icon-First Mobile Navbar:** Automatically adapts to mobile and tablet viewports (`< 1024px`) using oversized, accessible `44x44px` touch-target icons.
- **🔄 Universal Format Engine:**
  - **Video to MP4:** `MOV`, `MKV`, `AVI`, `WEBM`, `HEVC (H.265)`, `MTS`, `DAV`, `MPEG`, `MPG`, and `FLV` to `MP4 (H.264)`.
  - **Audio Extraction & Conversion:** `MP4 to MP3` (up to 320kbps studio master), `MP4 to WAV` (lossless PCM), and `MP3 to MP4`.
  - **Social & GIF Presets:** `GIF to MP4`, `MP4 to GIF`, and optimized MP4 presets for **TikTok**, **X (Twitter)**, and **Pinterest**.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Astro 5.x](https://astro.build/) (Static Islands Architecture, 100% Static Output) |
| **Media Engine** | [FFmpeg.wasm](https://ffmpegwasm.netlify.app/) (`@ffmpeg/ffmpeg` & `@ffmpeg/util`) + Web Workers |
| **Cross-Origin Isolation** | `coi-serviceworker.js` (Enables `SharedArrayBuffer` via COOP/COEP headers on GitHub Pages) |
| **Styling** | Tailwind CSS + Hardware-Accelerated Cubic-Bezier CSS/SVG Animations |
| **Offline Support** | Service Worker Cache API (`sw.js`) + Standalone Web App Manifest (`manifest.webmanifest`) |
| **Analytics & SEO** | Google Analytics 4 (`G-WGBYLST5W0`), Ethical JSON-LD `@graph` Schema, Automated Sitemap & `hreflang` |

---

## 🎨 Color Palette Specification

| Role | Hex Code (Light) | Hex Code (Dark) | Usage |
| :--- | :--- | :--- | :--- |
| **Crimson Ruby** | `#790D16` | `#A31621` | Primary CTAs, Active States, Progress Bars, Brand Heart Icon |
| **Warm Sand** | `#E5D3AF` | `#3A332C` | Converter Box Borders, Dropzone Accents, Secondary Pills |
| **Soft Alabaster** | `#F5EFE1` | `#12100E` | Clean Minimal Canvas Background |
| **Elevated Surface** | `#FFFFFF` | `#1C1917` | Hero Converter Box Div & Format Preset Cards |
| **Steel Blue** | `#AEC4D4` | `#AEC4D4` | Format Badges, Focus Rings, Technical Status Indicators |

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/ilovemp4/ilovemp4.github.io.git
cd ilovemp4.github.io

# 2. Install dependencies
npm install

# 3. Start the local development server (with COOP/COEP headers enabled)
npm run dev

# 4. Build static production bundle into ./dist
npm run build

# 5. Preview the production build locally
npm run preview
```

---

## 📂 Repository Architecture

```text
ilovemp4.github.io/
├── .github/workflows/
│   └── deploy.yml              # Automated GitHub Actions CI/CD to GitHub Pages (Node 22)
├── public/
│   ├── .nojekyll               # Bypass Jekyll processing on GitHub Pages
│   ├── coi-serviceworker.js    # Injects COOP/COEP headers & caches assets for offline PWA
│   ├── sw.js                   # Progressive Web App offline Service Worker
│   ├── favicon.svg             # Brand Heart-Play vector icon (#790D16)
│   ├── og-preview.svg          # High-contrast Open Graph social card (1200x630)
│   ├── manifest.webmanifest    # Installable PWA configuration
│   └── robots.txt              # Search crawler directives + Sitemap reference
├── src/
│   ├── components/
│   │   ├── Navbar.astro        # Responsive navbar (8-lang i18n, Theme, PWA, Support CTA)
│   │   └── ConverterBox.astro  # Above-the-fold FFmpeg.wasm local RAM converter engine
│   ├── i18n/
│   │   └── translations.ts     # 8-language UI translation dictionary
│   ├── layouts/
│   │   └── BaseLayout.astro    # SEO meta, Gtag (G-WGBYLST5W0), hreflang & JSON-LD @graph
│   └── pages/
│       └── index.astro         # Semantic landing page, Breadcrumbs, Format Grid, HowTo & FAQ
├── astro.config.mjs            # Astro 5.x static configuration + Sitemap + Tailwind
├── tailwind.config.mjs         # Custom Crimson & Warm Sand design tokens
├── LICENSE                     # MIT License
└── README.md                   # Project documentation
```

---

## 💖 Support the Developer

Every tip helps keep **iLoveMP4** 100% free, ad-free, and privacy-focused!

👉 **[Support the Developer](https://kisharadilshan.gumroad.com/coffee)**

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](./LICENSE) for full details.
