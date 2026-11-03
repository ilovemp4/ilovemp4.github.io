<div align="center">

# 🎬 iLoveMP4

### **The 100% Client-Side Universal MP4, Audio & GIF Converter**

*Zero Cloud Uploads • Zero File-Size Paywalls • 100% Offline-Ready PWA • Powered by WebAssembly*

[![Live Website](https://img.shields.io/badge/Live_Application-ilovemp4.github.io-790D16?style=for-the-badge&logo=googlechrome&logoColor=white)](https://ilovemp4.github.io/)
[![Astro 5.x](https://img.shields.io/badge/Framework-Astro_5.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![FFmpeg.wasm](https://img.shields.io/badge/Core_Engine-FFmpeg.wasm-007808?style=for-the-badge&logo=webassembly&logoColor=white)](https://ffmpegwasm.netlify.app/)
[![Tailwind CSS](https://img.shields.io/badge/UI_System-Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-E5D3AF?style=for-the-badge&labelColor=12100E)](./LICENSE)
[![Support the Developer](https://img.shields.io/badge/Support_the_Developer-Buy_Me_a_Coffee-790D16?style=for-the-badge&logo=gumroad&logoColor=white)](https://kisharadilshan.gumroad.com/coffee)

[**Launch Web App**](https://ilovemp4.github.io/) · [**Supported Formats**](#-supported-format-matrix) · [**Architecture**](#️-system-architecture) · [**Local Setup**](#-quick-start--local-development) · [**Support the Developer**](#-support-the-developer)

</div>

---

## 📖 Overview

**iLoveMP4** ([https://ilovemp4.github.io/](https://ilovemp4.github.io/)) is an ultra-minimal, privacy-first web application engineered to transcode video files, extract studio-grade audio tracks, and generate animated GIFs **100% locally inside the user's browser**.

Unlike traditional cloud converters that upload sensitive personal or commercial videos to remote servers, **iLoveMP4** runs a compiled WebAssembly build of **FFmpeg (`@ffmpeg/ffmpeg`)** directly on your device using Web Workers and `SharedArrayBuffer`. Your media files **never leave your computer or phone**.

---

## ✨ Core Highlights

| Feature | Description |
| :--- | :--- |
| 🔒 **100% Local Privacy** | Zero server uploads and zero cloud queues. Every byte of video and audio is processed strictly on your own device. |
| ⚡ **Single-Screen Hero Utility** | Designed so the entire interactive conversion workspace loads above the fold. Drop a file, click **Convert**, and download immediately. |
| 🎯 **Smart Auto-Hiding Dropzone** | Once a file is selected, the upload dropzone automatically collapses into a focused conversion control bar for a distraction-free workflow. |
| 🌍 **8-Language Native i18n** | Instant client-side localization with `localStorage` persistence for **English, Español, Português, Deutsch, Français, 日本語, 简体中文, and Русский**. |
| 🌓 **Editorial Light & Dark Themes** | Built around a warm crimson & sand editorial palette (`#790D16`, `#E5D3AF`, `#F5EFE1`, `#AEC4D4`) paired with a WCAG AAA high-contrast dark mode (`#12100E`). |
| 📲 **100% Offline-Ready PWA** | One-click **Add to Home Screen** installation for Desktop, iOS, and Android backed by full Service Worker asset caching. |
| 📱 **Responsive Mobile Drawer** | Automatically collapses navigation controls into an accessible toggle menu on mobile and tablet viewports (`< 1024px`). |

---

## 🔄 Supported Format Matrix

### 1. Input Formats (`Convert From`)
`MP4` • `MOV` • `MKV` • `AVI` • `WEBM` • `HEVC (H.265)` • `MTS` • `DAV` • `MPEG` • `MPG` • `FLV` • `GIF` • `MP3` • `WAV` • `M4A`

### 2. Output Formats (`Convert To`)

| Output Container | Codec / Specification | Typical Use Case |
| :--- | :--- | :--- |
| **`MP4`** | `H.264 (libx264)` + `AAC` | Universal playback across Windows, macOS, iOS, Android, Smart TVs & Web |
| **`MP3`** | `libmp3lame` (Up to `320 kbps`) | High-fidelity audio extraction from video lectures, music videos & podcasts |
| **`GIF`** | Animated Loop (`Lanczos` scaling) | Crisp animated loops for documentation, messaging & social media |
| **`WAV`** | `pcm_s16le` (Uncompressed Lossless) | Studio-grade lossless audio editing in DAWs & NLE video editors |
| **`WEBM`** | `VP9 / libvpx` + `libvorbis` | Lightweight HTML5 web video embedding |
| **`MOV`** | Apple QuickTime Container | Final Cut Pro & macOS/iOS native production workflows |

### 3. Pro Encoding Controls
- **Resolution Scaling:** `Original Source`, `1080p Full HD (1920×1080)`, `720p HD (1280×720)`, `480p Compact (854×480)`
- **Compression Quality (CRF):** `High Studio Quality (CRF 18)`, `Balanced (CRF 23)`, `Maximum Compression (CRF 28)`
- **Audio Bitrate:** `320 kbps (Studio Master)`, `192 kbps (High)`, `128 kbps (Standard)`
- **Precision Clip Trimming:** Custom `Start Time (HH:MM:SS)` and `End Time (HH:MM:SS)`

---

## 🏗️ System Architecture

```mermaid
flowchart LR
    A["User Selects Video / Audio File"] --> B["Browser File API (Local Memory)"]
    B --> C["coi-serviceworker.js (COOP / COEP Isolation)"]
    C --> D["FFmpeg.wasm Web Worker"]
    D --> E["Transcode / Trim / Compress Locally"]
    E --> F["Instant Local Blob Download"]
```

### Tech Stack Breakdown

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Static Framework** | [Astro 5.x](https://astro.build/) | Zero-bloat static HTML generation with interactive Islands Architecture |
| **Transcoding Engine** | [`@ffmpeg/ffmpeg`](https://www.npmjs.com/package/@ffmpeg/ffmpeg) & [`@ffmpeg/util`](https://www.npmjs.com/package/@ffmpeg/util) | In-browser WebAssembly video & audio transcoding |
| **Header Isolation** | `coi-serviceworker.js` | Injects `Cross-Origin-Opener-Policy: same-origin` & `Cross-Origin-Embedder-Policy: require-corp` on GitHub Pages |
| **Design & Styling** | [Tailwind CSS](https://tailwindcss.com/) | Responsive layout, dark mode tokens, and hardware-accelerated transitions |
| **Offline PWA** | `sw.js` + `manifest.webmanifest` | Caches application shell and assets for standalone offline execution |
| **Technical SEO** | `@astrojs/sitemap` + JSON-LD `@graph` | Automated `sitemap-index.xml`, `hreflang` tags, and ethical Schema.org structured data |

---

## 🎨 Design System & Color Tokens

| Token Role | Light Mode Hex | Dark Mode Hex | UI Application |
| :--- | :--- | :--- | :--- |
| **Crimson Ruby** | `#790D16` | `#A31621` | Primary CTAs, Active Format Presets, Progress Bar, Brand Heart Logo |
| **Warm Sand** | `#E5D3AF` | `#3A332C` | Elevated Card Borders, Dropzone Dashed Borders, Secondary Accents |
| **Soft Alabaster** | `#F5EFE1` | `#12100E` | Primary Page Canvas Background |
| **Surface Card** | `#FFFFFF` | `#1C1917` | Main Converter Box Container & Format Preset Cards |
| **Steel Blue** | `#AEC4D4` | `#AEC4D4` | Informational Format Badges, Keyboard Focus Rings, Status Accents |

---

## 📂 Project Structure

```text
ilovemp4.github.io/
├── .github/workflows/
│   └── deploy.yml              # Automated GitHub Actions CI/CD to GitHub Pages (Node 22)
├── public/
│   ├── .nojekyll               # Prevents Jekyll processing on GitHub Pages
│   ├── coi-serviceworker.js    # Enables SharedArrayBuffer via COOP/COEP + Offline Cache
│   ├── sw.js                   # Progressive Web App Service Worker entrypoint
│   ├── favicon.svg             # Crisp vector brand icon (#790D16)
│   ├── og-preview.svg          # 1200x630 Open Graph social preview card
│   ├── manifest.webmanifest    # Standalone PWA manifest specification
│   └── robots.txt              # Search crawler directives + Sitemap reference
├── src/
│   ├── components/
│   │   ├── Navbar.astro        # Sticky header + Mobile/Tablet toggle drawer + 8-lang switcher
│   │   └── ConverterBox.astro  # Above-the-fold FFmpeg.wasm converter + Auto-hiding dropzone
│   ├── i18n/
│   │   └── translations.ts     # Complete 8-language translation dictionary
│   ├── layouts/
│   │   └── BaseLayout.astro    # Head metadata, GA4 (G-WGBYLST5W0), hreflang & JSON-LD @graph
│   └── pages/
│       └── index.astro         # Semantic landing page, Breadcrumbs, Format Grid, HowTo & FAQ
├── astro.config.mjs            # Astro 5.x static configuration + Sitemap + Vite COOP/COEP headers
├── tailwind.config.mjs         # Custom Crimson & Warm Sand theme palette
├── tsconfig.json               # Strict TypeScript configuration
├── LICENSE                     # MIT License
└── README.md                   # Executive repository documentation
```

---

## 🚀 Quick Start & Local Development

### Prerequisites
- **Node.js** `>= 20.x` (Node 22 LTS recommended)
- **npm** `>= 10.x`

### Installation & Commands

```bash
# 1. Clone the repository
git clone https://github.com/ilovemp4/ilovemp4.github.io.git
cd ilovemp4.github.io

# 2. Install project dependencies
npm install

# 3. Start local development server at http://localhost:4321
npm run dev

# 4. Generate production static build in ./dist
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🔍 SEO, Accessibility & Privacy Compliance

- **100% Ethical Structured Data:** Implements a validated JSON-LD `@graph` (`WebApplication`, `BreadcrumbList`, `HowTo`, and `FAQPage`) strictly omitting fake `AggregateRating` snippets in full compliance with Google Search Central guidelines.
- **International SEO (`hreflang`):** Includes self-referencing canonical URLs, alternate language links (`en`, `es`, `pt`, `de`, `fr`, `ja`, `zh`, `ru`, `x-default`), and an automatically generated `sitemap-index.xml`.
- **WCAG AAA Accessibility:** Full keyboard navigation (`tabindex="0"` dropzone), explicit `aria-label` attributes on all interactive controls, and live `role="progressbar"` / `aria-live="polite"` status announcements.

---

## 💖 Support the Developer

**iLoveMP4** is built and maintained as a 100% free, open-source utility with zero paywalls or intrusive ads. If this tool saves you time, consider buying the developer a coffee:

<div align="center">

[![Support the Developer](https://img.shields.io/badge/☕_Support_the_Developer-kisharadilshan.gumroad.com%2Fcoffee-790D16?style=for-the-badge)](https://kisharadilshan.gumroad.com/coffee)

</div>

---

## 📄 License

Distributed under the **MIT License**. Copyright © 2026 **Kishara Dilshan (iLoveMP4)**. See [LICENSE](./LICENSE) for full details.
