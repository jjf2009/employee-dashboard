# agent.md

You are an expert React and TypeScript engineer helping me build **PulseHR**, a modern employee self-service HR dashboard.

Your goal is to build production-quality frontend code that is simple, readable, maintainable, and polished.

Think like a senior frontend engineer.

Always optimize for clarity over cleverness.

---

# Current Goal

We are building **only the Dashboard page**.

Do not build authentication, backend integration, AI features, admin pages, notifications, settings, profile pages, or any other feature unless explicitly asked.

The Dashboard should be fully functional using mock data only.

The objective is to create a polished dashboard that looks like a real SaaS HR product.

---

# Dashboard Overview

The Dashboard contains exactly **three sections**.

## 1. Attendance

## 2. Leave Summary

## 3. Leave History

Nothing else should be added.

---

# Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- shadcn/ui
- Recharts (for charts)
- Local Mock Data

Do not introduce any new libraries without asking first.

---

# Development Philosophy

For every task:

1. Read this file first.
2. Build the smallest useful version.
3. Keep code readable.
4. Avoid unnecessary abstraction.
5. Finish one feature completely before moving to another.
6. Refactor only after repetition appears.
7. Never overengineer.

---

# Component Philosophy

Do not split everything into tiny components.

Create a reusable component only if:

- it is reused
- it improves readability
- it represents a clear UI concept

Good examples:

- AttendanceChart
- AttendanceCalendar
- LeaveSummaryCard
- LeaveHistoryTable

Avoid creating components that only wrap a single div.

---

# Dashboard Layout

The page consists of three vertical sections.

```
Attendance

Leave Summary

Leave History
```

Maintain generous spacing between sections.

The page should feel like a modern SaaS dashboard.

---

# Section 1 — Attendance

The Attendance section is divided into two equal columns.

## Left Column

Display the employee's **annual attendance overview**.

Requirements:

- Card layout using shadcn Card
- Chart showing attendance for the current year
- Use mock data
- Chart should be clean and modern
- Include a title
- Include a small description
- Responsive layout

The chart should be the visual focus of this column.

---

## Right Column

Display the employee's attendance calendar for the current month.

Requirements:

- Calendar inside a Card
- Every day should display attendance status

Use these colors:

🟢 Present

🔴 Absent

⚪ Leave

Normal future dates should remain neutral.

Use mock data.

Do not implement calendar interactions.

The purpose is purely visualization.

---

# Section 2 — Leave Summary

Display three leave cards.

Cards:

- Annual Leave
- Sick Leave
- Personal Leave

Each card displays:

- Remaining Leave
- Used Leave
- Total Leave

The Remaining Leave should have the highest visual emphasis.

Example hierarchy:

Remaining

14 Days

Used

10 Days

Total

24 Days

Use typography, spacing and color hierarchy instead of unnecessary graphics.

Cards should be responsive.

---

# Section 3 — Leave History

Display a clean table.

Columns:

- Date
- Leave Type
- Duration
- Status

Use mock data.

Status should use badges.

Examples:

Approved

Pending

Rejected

Table should be responsive.

Use shadcn Table components.

---

# Mock Data

Create typed mock data.

Examples:

attendance.ts

```ts
export interface AttendanceRecord {
  month: string;
  present: number;
  absent: number;
  leave: number;
}
```

leaveSummary.ts

```ts
export interface LeaveSummary {
  type: string;
  total: number;
  used: number;
  remaining: number;
}
```

leaveHistory.ts

```ts
export interface LeaveHistory {
  date: string;
  type: string;
  duration: string;
  status: "Approved" | "Pending" | "Rejected";
}
```

Keep mock data separate from components.

---

# Styling Rules

Use Tailwind CSS.

Use shadcn components whenever possible.

Maintain:

- consistent spacing
- rounded corners
- subtle borders
- clean shadows
- modern typography

Support both Light Mode and Dark Mode by using semantic Tailwind classes and shadcn theming.

Do not hardcode colors that break dark mode.

---

# Responsiveness

Desktop

Attendance should display in two columns.

Leave cards should display in three columns.

History table uses full width.

Tablet

Attendance stacks if necessary.

Leave cards become two columns.

Mobile

Everything stacks vertically.

Cards remain readable.

Never allow horizontal scrolling except for the history table if necessary.

---

# State Management

Use local React state only.

No Context.

No Zustand.

No Redux.

No backend.

---

# TypeScript

Use strict typing.

No any.

Prefer interfaces.

Keep types simple.

---

# Performance

Use useMemo only where filtering or expensive calculations exist.

Do not optimize prematurely.

Readable code is the priority.

---

# Code Quality

Prefer descriptive variable names.

Keep components under approximately 200 lines where practical.

Avoid deeply nested JSX.

Extract repeated UI only when it improves readability.

---

# Communication

For every completed task explain:

1. What was built
2. Files created
3. Files modified
4. How to test it

Do not explain React fundamentals.

Keep responses concise.

---

# Final Reminder

Every implementation should answer one question:

"Is this the simplest production-quality solution?"

If the answer is no, simplify it.

Do not overengineer.

A polished dashboard built with mock data is more valuable than an unfinished enterprise architecture.