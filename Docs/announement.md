# agent.md

You are an expert React and TypeScript engineer helping me build **PulseHR**, a modern employee self-service HR dashboard.

Your goal is to build production-quality frontend code that is clean, maintainable, and easy to understand.

Think like a senior frontend engineer.

Always choose the simplest solution that would be acceptable in production.

---

# Current Goal

Build only the **Announcements Page**.

Do not implement authentication, admin dashboards, leave management, attendance, notifications, settings, or unrelated features.

The page should be fully functional using mock data.

---

# Feature Overview

The Announcements page has two major features.

## 1. Company Announcements Feed

A timeline of company announcements.

## 2. AI Assistant

A floating chatbot that helps employees quickly understand recent announcements by answering natural language questions.

The AI assistant summarizes information from the announcements.

---

# Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Local Mock Data
- Gemini API (through a server/API route only)

Do not introduce new libraries without approval.

---

# Development Philosophy

For every task:

1. Read this file.
2. Build the smallest complete solution.
3. Prefer readability over abstraction.
4. Avoid unnecessary components.
5. Finish one feature before starting another.
6. Refactor only when repetition appears.
7. Never overengineer.

---

# Page Layout

The page contains:

```
---------------------------------------------------

Announcements

---------------------------------------------------

Today

Announcement Card

Announcement Card

---------------------------------------------------

Yesterday

Announcement Card

---------------------------------------------------

15 Jul 2026

Announcement Card

---------------------------------------------------

(Floating AI Chat Button)

```

The announcement feed occupies the page.

The chatbot remains fixed at the bottom-right corner.

---

# Announcements Feed

Announcements are grouped by date.

Possible headings:

- Today
- Yesterday
- DD/MM/YYYY

Only show a heading once for each group.

---

# Announcement Card

Each announcement is displayed inside a shadcn Card.

Every card contains:

- Announcement Title
- Announcement Description
- Announcement Category
- Posted By
- Posted Time

---

## Announcement Category

Display as a Badge.

Examples:

- General
- Leave Policy
- Work From Home
- Holiday
- Company Event
- HR Update

Each category should have a visually distinct badge while remaining compatible with light and dark mode.

---

## Posted By

Display who published the announcement.

Examples:

- HR
- CEO
- Engineering
- Finance
- Operations

Use a small avatar or icon if appropriate.

---

# Mock Data

Keep all announcements inside

```
data/announcements.ts
```

Example structure:

```ts
export interface Announcement {
    id: string;
    title: string;
    description: string;
    category:
        | "General"
        | "Leave Policy"
        | "Holiday"
        | "WFH Policy"
        | "HR Update";

    author: string;

    date: string;

    time: string;
}
```

Do not hardcode announcement data inside components.

---

# AI Assistant

The AI Assistant is a floating chatbot.

Position:

Bottom-right corner.

The chatbot should:

- Open inside a dialog or floating panel.
- Display previous conversation.
- Accept user input.
- Show loading state.
- Display AI responses.

---

# AI Purpose

The chatbot answers questions only about company announcements.

Examples:

"Any leave policy updates?"

"What happened this week?"

"Did HR announce anything yesterday?"

"Any WFH updates?"

"Summarize today's announcements."

It should summarize announcements using the provided mock data.

---

# AI Architecture

Never call Gemini directly from React components.

Use this architecture:

```
React UI

↓

API Route / Server Function

↓

Gemini API

↓

Return summary

↓

Display inside chatbot
```

The Gemini API key must remain on the server.

Never expose API keys.

---

# Chat UI

The chatbot contains:

Header

Conversation Area

User Messages

AI Messages

Input Box

Send Button

Loading Indicator

Auto-scroll to newest messages.

Keep the interface clean and minimal.

---

# Styling

Use Tailwind CSS.

Use shadcn components whenever possible.

Maintain:

- rounded corners
- consistent spacing
- modern typography
- subtle borders
- clean shadows

Support both Light Mode and Dark Mode.

Never hardcode colors that break themes.

---

# Components

Only create reusable components when they improve readability.

Suggested components:

AnnouncementCard

AnnouncementTimeline

DateHeading

AnnouncementBadge

FloatingChatButton

ChatWindow

ChatMessage

ChatInput

LoadingMessage

Avoid unnecessary abstraction.

---

# Folder Structure

```
components/

announcement/
    AnnouncementCard
    AnnouncementTimeline
    AnnouncementBadge

chat/
    FloatingChatButton
    ChatWindow
    ChatMessage
    ChatInput

data/

announcements.ts

pages/

AnnouncementsPage.tsx

services/

gemini.ts
```

---

# State Management

Use local React state.

Do not introduce Context or Zustand.

---

# TypeScript

Use strict typing.

No any.

Keep interfaces simple.

---

# Performance

Avoid premature optimization.

Memoize only when necessary.

Readable code is more important than micro-optimizations.

---

# User Experience

The page should feel like a modern internal company portal.

Employees should immediately understand:

- What is new.
- Who posted it.
- When it was posted.
- Whether it affects them.

The chatbot should feel like a helpful assistant, not a general-purpose AI.

It only answers questions related to company announcements.

---

# Communication

For every completed task explain:

1. What was built.
2. Files created.
3. Files modified.
4. How to test.

Keep explanations concise.

---

# Final Reminder

Every implementation should answer this question:

"Is this the simplest production-quality implementation?"

If something feels overengineered, simplify it.

The objective is a polished announcements experience, not a complex AI platform.