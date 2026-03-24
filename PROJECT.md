# SafariIQ — Predictive Safari Intelligence System

A full-stack IoT-powered wildlife safari management platform. This repository contains the **public customer website** and **ranger command dashboard** — the software layer of an ESP32 + LoRa sensor network built for a hardware hackathon.

---

## Hackathon Context

| Field | Detail |
|---|---|
| **Event** | UNPLUGGED — 24-Hour Hardware Hackathon |
| **Organiser** | DJSCE IETE-ISF × DJS MicroMinds, SVKM |
| **Date** | 11–12 April 2026 |
| **Method** | IoT / Embedded (Method 1) |
| **Tasks** | Task 1 (Software) + Task 2 (Hardware) |

---

## System Overview

The platform is built around a **4-phase IoT architecture**:

**Phase 1 — Wildlife Cluster Nodes** → ESP32-CAM + PIR sensors placed across park zones detect animal motion, identify species, and broadcast detection events over LoRa radio.

**Phase 2 — Vehicle Intelligence Nodes** → Each safari jeep carries a GPS module + LoRa transmitter, broadcasting live location to the central gateway every few seconds.

**Phase 3 — Central Gateway & Server** → A Node.js server receives LoRa packets, calculates movement vectors, dynamically zones the park, and generates routing commands for each jeep.

**Phase 4 — Control Dashboard** → Rangers view live jeep movement tracks, zone overlays, wildlife intelligence, routing commands, bookings, and guest messages on the web dashboard.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite 8 |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v3 (custom tokens) |
| Fonts | Playfair Display (serif) + Inter (sans) |
| Maps | Leaflet + React-Leaflet + OpenStreetMap |
| Auth | Hardcoded `useState` guard (dev only) |
| Backend | Node.js + Express (planned, separate repo) |
| Hardware | ESP32, ESP32-CAM, LoRa SX1278, GPS NEO-6M |

---

## File Structure

```text
src/
├── main.jsx
├── App.jsx
├── index.css
│
├── shared/
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── customer/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Booking.jsx
│   │   └── Contact.jsx
│   └── components/
│       ├── PackageCard.jsx
│       ├── TestimonialCard.jsx
│       ├── StepTimeline.jsx
│       ├── BookingSummary.jsx
│       └── FAQAccordion.jsx
│
└── ranger/
    ├── pages/
    │   ├── RangerLogin.jsx
    │   ├── RangerDashboard.jsx
    │   ├── RangerBookingsPage.jsx
    │   └── RangerMessagesPage.jsx
    └── components/
        ├── RangerShell.jsx
        ├── JeepPanel.jsx
        ├── ZoneMap.jsx
        ├── RoutingCommandLog.jsx
        ├── WildlifeEventFeed.jsx
        ├── AnimalTracker.jsx
        ├── ContactMessageFeed.jsx
        ├── BookingSummaryPanel.jsx
        └── DisturbanceIndexBadge.jsx
```

---

## Pages & Features

### Customer Side

| Route | Page | Key Sections |
|---|---|---|
| `/` | Home | Hero · Why Smart Safari · How It Works · Packages · Stats · Testimonials · CTA |
| `/book` | Booking | Form + live summary + confirmation |
| `/contact` | Contact | Contact form + park info + FAQ |

### Ranger Side

| Route | Page | Auth |
|---|---|---|
| `/ranger` | Login | Open |
| `/ranger/dashboard` | Control Center | Protected |
| `/ranger/bookings` | Today’s Bookings | Protected |
| `/ranger/messages` | Guest Messages | Protected |

---

## Ranger UI (Current)

### RangerShell / Navbar
- Single thin top navbar (merged; no secondary row)
- Center nav tabs: Control Center / Today’s Bookings / Guest Messages
- DI badge moved toward center cluster
- DI pulse ring animation when DI > 15
- System status includes **6 jeep dots** (instant fleet health)
- Logout placed on right edge

### Control Center Layout
- No full-page scrolling (`h-screen`, overflow locked)
- Left column: `Active Jeeps`, `Tracked Species`, `Wildlife Population`
- Right column: `Live Zone Map` (top), `Routing Commands` (bottom)
- Each panel has independent internal scrolling

### Left Panel Details
- **Active Jeeps**
  - Status dot next to jeep ID (green active, amber idle, red alert)
  - Subtitle line combines zone + ping (`Zone A · 8s ago`)
  - Guest occupancy shown as progress bar
  - Progress colors: green (<50%), amber (50–80%), orange (>80%), red (full)
- **Tracked Species**
  - Vertical list layout
  - 3px left border by rarity (red high, amber medium, blue low)
  - Rarity text labels removed for cleaner scan

### Routing Commands
- 3px left severity border:
  - red = ALERT
  - orange = REROUTE / WARN
  - gray = INFO
- Message is primary bold line
- Timestamp + Jeep ID moved to subtitle
- `✓ ACK` interaction per row
- Acknowledged row fades to 50% and badge becomes `DONE` (gray)

### Live Map
- Real interactive **Leaflet** map using OpenStreetMap tiles
- Colored patrol tracks drawn as polylines
- Moving jeep circles animated along tracks
- Tooltip on each jeep marker (`J-0x`, status)
- Distinct colored zone overlays (`Zone A` to `Zone E`) with labels

---

## Mock Data vs Planned Live Data

| Data | Current State | Planned Source |
|---|---|---|
| Jeep movement | Simulated movement along predefined map tracks | GPS + LoRa → WebSocket |
| Wildlife events | Static mock array in UI | ESP32-CAM + LoRa → backend stream |
| Zone overlays | Static zone circles on map | Dynamic zoning from server model |
| Routing commands | Mock command list + local ACK state | Gateway/server-generated command stream |
| Bookings | Static panel data + booking form state | Node.js/Express REST API |
| Contact messages | Mock inbox list | Express backend |
| Disturbance Index | Mock formula (`43/4 = 10.75`) | Live DI from server telemetry |

---

## Getting Started

```bash
npm install
npm run dev
```

App runs at: `http://localhost:5173`

### Routes

| URL | Page |
|---|---|
| `/` | Customer Home |
| `/book` | Booking |
| `/contact` | Contact |
| `/ranger` | Ranger Login |
| `/ranger/dashboard` | Ranger Control Center |
| `/ranger/bookings` | Ranger Today’s Bookings |
| `/ranger/messages` | Ranger Guest Messages |

---

## Credentials (Dev Only)

```text
Username: ranger
Password: safari2026
```

---

## Planned Integrations

- Socket.io live telemetry stream from LoRa gateway
- Node.js/Express REST API for bookings/messages
- GeoJSON park boundary overlays for map fidelity
- ESP32-CAM species inference pipeline
- LoRa SX1278 long-range radio backhaul

---

## Built By

Team — UNPLUGGED Hackathon 2026, DJSCE  
*Predictive Safari Intelligence System — Where Technology Meets the Wild*
