<div align="center">

<img src="https://img.shields.io/badge/BMW-M%20Dashboard-0066CC?style=for-the-badge&logo=bmw&logoColor=white" />
<img src="https://img.shields.io/badge/Status-Live-00D97E?style=for-the-badge" />
<img src="https://img.shields.io/badge/Designed%20by-Abdul%20Aziz-F5A623?style=for-the-badge" />

# 🏎️ BMW M Dashboard Simulator

**A real-time interactive BMW M car dashboard simulator — built mobile-first with React, Vite, Tailwind CSS and Framer Motion.**

[Live Demo]([https://bmw-dashboard.vercel.app) · [Portfolio](https://azizdesigns.framer.ai) · [Report Bug](https://github.com/yourusername/bmw-dashboard/issues)

</div>

---

## 📸 Preview

> Mobile-first BMW M dashboard with live speedometer sweep, fuel/oil management, gear physics, engine simulation and synthesized BMW sounds — all in the browser.

---

## ✨ Features

### 🔑 Engine
- Startup ignition sound sequence
- Speedometer sweeps **0 → 220 → 0** on ignition (real car behaviour)
- Idle sound loop while engine runs
- All controls locked when engine is off

### 🏁 Speedometer
- Live SVG arc gauge (0–220 km/h)
- **Blue arc** → 0–50% speed · **Red arc** → 50–100%
- Speed badge blinks red when speed exceeds **80 km/h**
- Smooth delta-time based physics (frame-rate independent)

### ⚙️ Gear System

| Gear | Max Speed | Acceleration | Behaviour |
|------|-----------|-------------|-----------|
| **P** | 0 km/h | None | Locked — no movement |
| **R** | 40 km/h | 15 km/h/s | Slower, reverse only |
| **N** | — | None | Engine revs, no drive |
| **D** | 220 km/h | Tapered curve | Full BMW acceleration |

### ⛽ Fuel System
- Bar fills on engine start
- Drains while holding gas pedal
- Indicator activates for 5s on startup
- Stays active below **20%** threshold
- Tap indicator button to refuel · Acceleration blocked when empty

### 🛢️ Oil System
- Bar fills on engine start
- Drains only when **speed > 100 km/h**
- Indicator activates for 5s on startup
- Stays active below **20%** threshold
- Tap indicator button to top up

### 🎵 Sound System
| Sound | Trigger |
|-------|---------|
| Engine Start | Key button press |
| Engine Idle Loop | While engine runs |
| Gear Change | Every gear selection |
| Acceleration Rev | Hold gas pedal |
| Brake Squeal | Hold brake pedal |
| Signal Tick | Turn indicator active |
| Fuel Warning Chime | Fuel indicator activates |
| Oil Warning Chime | Oil indicator activates |

### 🎬 Intro Screen
- BMW M logo **spin-in** with expanding pulse rings
- Shine line reveal animation
- **"Abdul Aziz"** shimmer sweep effect
- Loading progress bar → triggers app reveal

### 📱 Responsive
- Mobile-first (390 × 844 base)
- CSS `scale()` transform for desktop — all absolute positions intact
- Reactive to window resize via `useScale` hook

---

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=20232A)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=1a1a2e)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=0f172a)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer&logoColor=white&labelColor=0d0d0d)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=black&labelColor=1a1a1a)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-Designed-F24E1E?style=flat-square&logo=figma&logoColor=white&labelColor=1e1e1e)

</div>

| Technology | Purpose |
|---|---|
| **React 18** | UI components, state management |
| **Vite 5** | Build tool, dev server |
| **Tailwind CSS 3** | Utility-first styling, custom design tokens |
| **Framer Motion 11** | Animations, transitions, `AnimatePresence` |
| **Web Audio API** | Synthesized BMW engine sounds |
| **HTML5 Audio** | Sound file playback |
| **Lucide React** | UI icons |

---


## ⚡ Physics

| Action | Rate |
|--------|------|
| Acceleration (D) | `30 × (1 − speed/220 × 0.7)` km/h/s |
| Acceleration (R) | 15 km/h/s |
| Hard brake | 60 km/h/s |
| Coast / engine brake | 20 km/h/s |
| Neutral coast | 15 km/h/s |

---

## 🗺️ Roadmap

- [ ] RPM gauge with live needle
- [ ] Turbo boost pressure indicator
- [ ] Trip odometer
- [ ] Night / Day mode toggle
- [ ] Multiple car themes (M3, M5, M8)

---

## 👨‍🎨 Designer & Developer

**Abdul Aziz V I** — UI/UX Designer & Frontend Developer, Dubai

[![Portfolio](https://img.shields.io/badge/Portfolio-azizdesigns.framer.ai-F5A623?style=flat-square)](https://azizdesigns.framer.ai)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/yourusername)

---

## 📄 License

MIT — free to use for portfolio and learning purposes.

---

<div align="center">

*Built with ❤️ by Abdul Aziz V I · Dubai, UAE*

</div>
