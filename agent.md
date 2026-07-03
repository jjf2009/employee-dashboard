# agent.md

You are an expert React and TypeScript engineer helping me build **PulseHR**, a modern employee self-service HR dashboard.

Your goal is to build clean, maintainable, production-quality frontend code.

Always prefer simplicity over unnecessary abstraction.

Think like a senior frontend engineer.

---

# Current Goal

Build only two supporting pages.

1. Profile Page
2. Notifications Page

Both pages should use **mock data only**.

Do not implement authentication, backend APIs, editing profile information, notification persistence, or real-time updates.

The goal is to create polished supporting pages that fit naturally within the PulseHR dashboard.

---

# Tech Stack

- React
- TypeScript
- React Router
- Tailwind CSS
- shadcn/ui

Do not introduce new libraries without approval.

---

# Development Philosophy

For every task:

1. Read this file first.
2. Build the smallest useful version.
3. Keep code readable.
4. Avoid unnecessary abstraction.
5. Finish one feature before starting another.
6. Never overengineer.

---

# Navigation

The application navbar contains:

- Profile Avatar
- Notification Bell

Clicking the avatar opens:

```
/profile
```

Clicking the notification bell opens:

```
/notifications
```

Navigation should use React Router.

---

# Profile Page

The Profile page displays employee information.

The page is **read-only**.

No editing functionality.

---

# Profile Layout

The page consists of:

```
-------------------------------------

Profile

-------------------------------------

Avatar

Employee Name

Role

Department

-------------------------------------

Personal Information

Email

Phone

Employee ID

Manager

Joining Date

Office Location

-------------------------------------

Employment Summary

Attendance %

Remaining Leave

Completed Projects

-------------------------------------

```

Everything should be displayed inside clean shadcn Cards.

---

# Mock Profile Data

Create typed mock data.

Example:

```ts
export interface EmployeeProfile {
    id: string;
    name: string;
    role: string;
    department: string;
    email: string;
    phone: string;
    manager: string;
    joiningDate: string;
    officeLocation: string;
    attendance: number;
    remainingLeave: number;
    completedProjects: number;
}
```

Store data inside:

```
data/profile.ts
```

---

# Notifications Page

The Notifications page displays recent company notifications.

Use mock data.

Notifications are read-only.

No real-time updates.

---

# Notification Layout

```
Notifications

----------------------------------

Today

Notification Card

Notification Card

----------------------------------

Yesterday

Notification Card

----------------------------------

Earlier

Notification Card

```

Group notifications by date.

---

# Notification Card

Each notification contains:

- Icon
- Title
- Description
- Timestamp
- Read / Unread Indicator

Unread notifications should have stronger visual emphasis.

Examples:

- Blue indicator dot
- Slightly darker background
- Bold title

---

# Notification Types

Example notifications:

- Leave Request Approved
- Leave Request Rejected
- Company Announcement
- HR Update
- Holiday Reminder
- Policy Update

Display each notification with an appropriate icon.

---

# Mock Notification Data

Example interface:

```ts
export interface Notification {
    id: string;
    title: string;
    description: string;
    type:
        | "Leave"
        | "Announcement"
        | "Holiday"
        | "HR"
        | "Reminder";

    date: string;
    time: string;
    isRead: boolean;
}
```

Store inside:

```
data/notifications.ts
```

---

# Components

Create reusable components only when they improve readability.

Suggested components:

ProfileHeader

ProfileInfoCard

EmploymentSummaryCard

NotificationCard

NotificationList

DateGroup

Do not split components unnecessarily.

---

# Styling

Use Tailwind CSS.

Use shadcn/ui components whenever possible.

Maintain:

- consistent spacing
- rounded corners
- clean typography
- subtle borders
- modern card layouts

Support both Light Mode and Dark Mode.

Never hardcode colors that break theming.

---

# Responsiveness

Desktop:

Cards use comfortable spacing.

Profile information can be displayed using a two-column grid.

Notifications use a single vertical timeline.

Tablet:

Grid becomes narrower.

Mobile:

Everything stacks vertically.

Profile cards remain readable.

---

# State Management

Use local React state only if needed.

Do not introduce Context, Redux, or Zustand.

---

# TypeScript

Use strict typing.

No `any`.

Prefer interfaces.

Keep types simple.

---

# Performance

Do not optimize prematurely.

Readable code is more important than micro-optimizations.

---

# Folder Structure

```
src/

components/

profile/
    ProfileHeader.tsx
    ProfileInfoCard.tsx
    EmploymentSummary.tsx

notifications/
    NotificationCard.tsx
    NotificationList.tsx

pages/
    ProfilePage.tsx
    NotificationsPage.tsx

data/
    profile.ts
    notifications.ts

types/
    profile.ts
    notification.ts
```

---

# User Experience

The Profile page should help employees quickly understand their information.

The Notifications page should help employees immediately identify important updates.

Both pages should feel like natural extensions of the dashboard.

Avoid unnecessary interactions.

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

Every implementation should answer one question:

"Is this the simplest production-quality solution?"

If something feels overengineered, simplify it.

The goal is a polished Profile page and a clean Notifications page using mock data, not a complete employee management system.