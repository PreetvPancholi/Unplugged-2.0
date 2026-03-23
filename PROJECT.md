# SafariIQ — Predictive Safari Intelligence System
### Public / Customer-Facing Website

> Built for **UNPLUGGED Hackathon, DJSCE 2026**  
> Stack: **React 18 + Vite 8 + Tailwind CSS v3 + React Router DOM v7**

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# App runs at → http://localhost:5173
```

---

## 📁 Project Structure

```
Webpage/
├── index.html                  # HTML entry (SEO meta, OG tags, paw favicon)
├── tailwind.config.js          # Custom color tokens + font families
├── postcss.config.js           # PostCSS config for Tailwind
├── vite.config.js              # Vite config
├── package.json
└── src/
    ├── main.jsx                # React DOM entry point
    ├── App.jsx                 # Router setup — wraps all pages in Navbar + Footer
    ├── index.css               # Google Fonts import + Tailwind base/utilities
    │
    ├── components/
    │   ├── Navbar.jsx          # Sticky navbar, scroll-aware, mobile hamburger
    │   ├── Footer.jsx          # Logo, tagline, links, social icons, copyright
    │   ├── PackageCard.jsx     # Safari package cards (supports "highlighted" state)
    │   ├── TestimonialCard.jsx # 5-star quote cards with author avatar initial
    │   ├── StepTimeline.jsx    # 4-step horizontal (desktop) / vertical (mobile) timeline
    │   ├── BookingSummary.jsx  # Live-updating booking summary + price calculator
    │   └── FAQAccordion.jsx    # Animated expandable FAQ accordion
    │
    └── pages/
        ├── Home.jsx            # / — Home page (6 sections)
        ├── Booking.jsx         # /book — Booking form + live summary
        └── Contact.jsx         # /contact — Contact form + park info + FAQ
```

---

## 🎨 Design System

### Color Tokens (`tailwind.config.js`)

| Token | Hex | Usage |
|---|---|---|
| `safari-dark` | `#0a0f0d` | Primary background |
| `safari-darker` | `#111816` | Card / section background |
| `safari-green` | `#166534` | Forest green accents, borders |
| `safari-amber` | `#d97706` | Primary accent, CTAs, highlights |
| `safari-amber-light` | `#f59e0b` | Hover state for amber |
| `safari-cream` | `#f5f0e8` | Body text, headings |
| `safari-muted` | `#6b7280` | Muted labels |

### Typography

| Font | Use |
|---|---|
| **Playfair Display** (serif) | All headings (`h1`–`h4`) |
| **Inter** (sans-serif) | Body, labels, buttons |

---

## 🗺️ Pages

### Page 1 — Home (`/`)

| Section | Content |
|---|---|
| **Hero** | Full-viewport dark hero, amber gradient headline, IoT badge, two CTAs: "Book Your Safari" → `/book`, "How It Works" → smooth scroll |
| **Why Smart Safari** | 3 feature cards: Wildlife-First Routing 🐅, Zero Overcrowding 🚙, Conservation by Design 🌿 |
| **How It Works** | 4-step timeline: Wildlife Sensors 👁️ → Jeep Tracking 🛰️ → Predictive Intelligence 🧠 → Smart Routing 🗺️ |
| **Safari Packages** | 3 cards: Dawn Patrol (₹1,499), Golden Hour ⭐ (₹1,799, highlighted), Full Day Expedition (₹4,999) |
| **Stats Bar** | 5,000+ Safaris · 47 Species Tracked · 6 Smart Zones · 98% Satisfaction |
| **Testimonials** | 3 guest quote cards — Priya M. (Mumbai), Rahul S. (Pune), Ananya K. (Bangalore) |
| **CTA Banner** | Full-width gradient banner → "Book Your Safari" |

---

### Page 2 — Booking (`/book`)

**Two-column layout** (form left, summary right; single column on mobile)

**Left — Form fields:**
1. Full Name (text)
2. Email (email)
3. Phone Number (tel)
4. Safari Date (date, no past dates via `min`)
5. Time Slot (dropdown): Dawn Patrol · Golden Hour · Full Day Expedition
6. Number of Guests (number, min 1 / max 6)
7. Jeep Type (styled radio toggle): Open Jeep · Covered Jeep
8. Special Requests (optional textarea)

**Right — Live Booking Summary (`BookingSummary.jsx`):**
- Safari Type, Date, Guests, Jeep — all update reactively
- Price per person (based on slot): ₹1,499 / ₹1,799 / ₹4,999
- Total = Guests × Price, calculated live
- "What makes this different?" info box below

**On submit:** Renders a success card:
> 🎉 Booking Confirmed! A confirmation will be sent to [email]. Your adventure awaits.

No API call — pure React `useState` toggle.

---

### Page 3 — Contact (`/contact`)

**Two-column layout** (form left, info right; single column on mobile)

**Left — Contact Form:**
- Name, Email, Subject (dropdown: General Inquiry / Booking Help / Group Bookings / Media-Press / Feedback), Message
- On submit: ✅ "Message received! We'll get back to you within 24 hours."

**Right — Park Info:**
- 📍 Jungle Biosphere Reserve Entry Gate 1, NH-7, MP – 481 001
- 📞 +91 98765 43210
- 📧 contact@predictivesafari.in
- 🕐 Safari: 6 AM–7 PM daily · Office: 9 AM–5 PM Mon–Sat
- Dark map placeholder (grid-line styled div, "Interactive map coming soon")
- FAQ Accordion (4 items): smart routing · cancellations · safety · jeep count

---

## 🧩 Components

### `Navbar.jsx`
- Logo: paw icon + **SafariIQ** (amber "IQ")
- Links: Home · How It Works (smooth scroll to `#how-it-works`) · Contact
- **"Book Now"** — amber filled button (always visible)
- Scroll-aware: transparent → `bg-safari-dark/95 backdrop-blur` after 20px scroll
- Mobile: animated hamburger → slide-down menu
- Active link highlighted in amber via React Router `NavLink`

### `Footer.jsx`
- Logo + tagline: _"Intelligent safaris. Undisturbed wildlife."_
- Quick Links: Home · Book Safari · Contact
- Social icons: Twitter / Instagram (decorative, no real URLs)
- Copyright: © 2026 Predictive Safari Intelligence System. Built for UNPLUGGED Hackathon, DJSCE.

### `PackageCard.jsx`
Props: `pkg` (object), `highlighted` (boolean)
- When `highlighted=true`: amber border, "Most Popular" banner, filled amber Book Now button
- Shows: name, time, guests, jeep, bestFor, price

### `TestimonialCard.jsx`
Props: `quote`, `author`, `location`
- 5 amber stars
- Large decorative quote mark
- Avatar circle with author's first initial

### `StepTimeline.jsx`
Props: `steps` (array of `{icon, title, description}`)
- Desktop: 4-column grid with horizontal amber gradient connector line
- Mobile: vertical stack with thin amber dividers
- Amber numbered badge on each step icon

### `BookingSummary.jsx`
Props: `formData` (object from Booking form state)
- Maps `timeSlot` → price using internal lookup: `{ "Dawn Patrol (6:00 AM – 9:00 AM)": 1499, ... }`
- Formats date via `toLocaleDateString('en-IN', ...)`
- Sticky on desktop (`sticky top-24`)
- Shows placeholder text in muted style when fields are empty

### `FAQAccordion.jsx`
Props: `items` (array of `{question, answer}`)
- Single open at a time (toggle with `openIndex` state)
- Smooth `max-height` transition
- Open item: amber question text + amber chevron rotated 180°

---

## ⚙️ Key Implementation Notes

- **No backend / API calls** — all data is static or mock
- **Form submissions** use `React.useState` to toggle success states only
- **Scroll animations**: `IntersectionObserver` via custom `useScrollReveal` hook in `Home.jsx`
  - Elements start with `opacity: 0; transform: translateY(30px)`
  - `.visible` class adds `opacity: 1; transform: translateY(0)` when in viewport
- **React Router** v7 handles all navigation. `<BrowserRouter>` wraps `<App>`.
- **Tailwind custom component classes** are defined in `@layer components` in `index.css`:
  - `.btn-primary`, `.btn-outline`, `.card-dark`, `.input-field`, `.label-text`, `.section-badge`, `.section-title`, `.section-subtitle`

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^7.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x",
    "tailwindcss": "^3.x",
    "vite": "^8.x"
  }
}
```

---

*© 2026 Predictive Safari Intelligence System — UNPLUGGED Hackathon, DJSCE*
