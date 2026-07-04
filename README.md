# PulseHR

**PulseHR** is a modern employee self-service HR dashboard built with React, TypeScript, and Vite. It provides a polished frontend experience for attendance overview, leave requests, company announcements, team directory, profile, and notifications — all powered by typed mock data with no backend database.

---

## Features

| Area | Description |
|------|-------------|
| **Dashboard** | Attendance chart & calendar, leave balance, leave history |
| **Apply for Leave** | Validated form (React Hook Form + Zod) with mock submission |
| **Announcements** | Date-grouped feed + floating AI assistant |
| **Team Directory** | Search, department filter, voice search |
| **Profile** | Read-only employee profile and employment summary |
| **Notifications** | Grouped timeline with read/unread states |
| **Theming** | Light / dark mode via shadcn tokens + `next-themes` |

---

## Prerequisites

- **Node.js** 20+ (recommended)
- **npm** 10+

---

## Setup

### 1. Clone and install

```bash
git clone <repository-url>
cd employee-dashboard
npm install
```

### 2. Environment variables (optional)

Copy the example env file for the Announcements AI assistant:

```bash
cp .env.example .env
```

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | No | Google Gemini API key for live AI responses |
| `PORT` | No | Express API port (default `3001`) |

Without `GEMINI_API_KEY`, the announcement chatbot still works using keyword-based summaries from mock data.

### 3. Run development

```bash
npm run dev
```

This starts:

- **Vite** frontend → `http://localhost:5173`
- **Express API** → `http://localhost:3001` (proxied via `/api`)

### 4. Other scripts

```bash
npm run build    # Type-check + production build → dist/
npm run preview  # Preview production build
npm run lint     # ESLint
npm run server   # API server only
```

---

## Architecture

### High-level overview

```
┌─────────────────────────────────────────────────────────┐
│                     Browser (React SPA)                  │
│  ThemeProvider → React Router → DashboardLayout          │
│       ↓ pages + feature components + shadcn/ui           │
│       ↓ mock data (src/data/*)                           │
└──────────────────────────┬──────────────────────────────┘
                           │ POST /api/chat
                           ▼
┌─────────────────────────────────────────────────────────┐
│              Express API (server/index.ts)               │
│       ↓ server/gemini.ts                                 │
│       ↓ Gemini REST API (or mock fallback)             │
└─────────────────────────────────────────────────────────┘
```

### Frontend structure

```
src/
├── components/
│   ├── ui/              # shadcn-style primitives (Button, Card, Input, …)
│   ├── layout/          # Sidebar, Header
│   ├── dashboard/       # Attendance chart, calendar, leave widgets
│   ├── leave/           # Apply leave form
│   ├── announcement/    # Announcement feed
│   ├── chat/            # Floating AI assistant
│   ├── team/            # Directory search & cards
│   ├── profile/         # Profile cards
│   ├── notifications/   # Notification list
│   └── theme/           # ThemeProvider, ThemeToggle
├── pages/               # Route-level pages
├── layouts/             # DashboardLayout (sidebar + outlet)
├── routes/              # React Router config
├── data/                # Typed mock data
├── types/               # Shared TypeScript interfaces
├── lib/                 # validation.ts, utils.ts
├── services/            # Client API callers (gemini.ts)
├── hooks/               # useVoiceSearch
└── utils/               # Formatting & grouping helpers
```

### Routing

| Path | Page |
|------|------|
| `/dashboard` | Employee dashboard |
| `/leave` | Apply for leave |
| `/announcements` | Company announcements + AI chat |
| `/team` | Team directory |
| `/profile` | Employee profile |
| `/notifications` | Notifications feed |

Navbar shortcuts: avatar → `/profile`, bell → `/notifications`.

### Theming

Follows **shadcn/ui** conventions:

- CSS variables on `:root` (light) and `.dark` (dark)
- Mapped to Tailwind via `@theme inline`
- `next-themes` toggles `class="dark"` on `<html>`
- Preference persisted in `localStorage` (`pulsehr-theme`)
- System preference respected on first visit

### AI assistant flow

The announcement chatbot never calls Gemini from the browser:

```
ChatWindow → services/gemini.ts → POST /api/chat → server/gemini.ts → Gemini API
```

The API key stays server-side. The server injects announcement mock data into the prompt and falls back to local keyword matching when no key is configured.

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | React 19, TypeScript |
| Build | Vite 8 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4, shadcn/ui patterns |
| Forms | React Hook Form, Zod |
| Charts | Recharts |
| Theming | next-themes |
| API | Express 5 (dev proxy) |
| AI | Google Gemini 2.0 Flash (optional) |

---

## AI tools used

This project was built with AI-assisted development. Tools and skills referenced during implementation:

| Tool / Skill | How it was used |
|--------------|-----------------|
| **Cursor / Grok (AI coding agent)** | Feature implementation, refactors, lint fixes, README |
| **vercel-react-best-practices** | React performance patterns (direct imports, memoization guidance) |
| **agent.md** | Per-feature spec driving scope, structure, and conventions |
| **Google Gemini API** | Announcement assistant (server-side only) |
| **Web Speech API** | Voice search on Team Directory (browser-native, no extra library) |

---

## Assumptions

1. **Single mock employee** — The logged-in user is `emp-001` (Sarah Chen). No real authentication.
2. **No persistence** — Form submissions, notification read state, and profile data are not saved to a database.
3. **Fixed reference date** — "Today" in mock data is `2026-07-02` for consistent grouping demos.
4. **Dev-only API server** — Express runs alongside Vite in development. Production deployment would need a separate hosting strategy for `/api`.
5. **Chromium for voice search** — Web Speech Recognition works best in Chrome/Edge; other browsers may not support it.
6. **Gemini is optional** — The app is fully usable without an API key.

---

## Trade-offs

| Decision | Benefit | Cost |
|----------|---------|------|
| **Mock data over backend** | Fast iteration, no infra, easy demos | No real CRUD, auth, or multi-user support |
| **Manual shadcn components** | No CLI lock-in, full control | Components must be maintained by hand |
| **Express sidecar in dev** | Keeps API keys off the client | Extra process; not bundled into `vite preview` |
| **Gemini fallback** | App works offline / without keys | Responses are less nuanced than live LLM |
| **Single layout shell** | Consistent navigation | All pages share sidebar even when not listed in spec |
| **Large client bundle** | Rich dashboard (Recharts, date picker, etc.) | ~900 KB JS before code-splitting |
| **Light/dark toggle only** | Simple UX | No three-way System / Light / Dark menu (system is default on first visit) |
| **Read-only profile & notifications** | Clear Day-1 scope | No edit profile or mark-as-read actions |

---

## Project conventions

- **Semantic colors only** — `bg-background`, `text-foreground`, `bg-card`, etc. No hardcoded grays.
- **Typed mock data** — Interfaces live in `src/types/` or co-located in `src/data/`.
- **Feature folders** — Components grouped by domain (`dashboard/`, `leave/`, `team/`, …).
- **No barrel files** — Direct imports preferred for tree-shaking.

---

## License

Private — internal / educational use unless otherwise specified.