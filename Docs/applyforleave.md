# agent.md

You are an expert React and TypeScript engineer helping me build **PulseHR**, a modern employee self-service HR dashboard.

Your goal is to build clean, production-quality frontend code that is simple, maintainable, and polished.

Think like a senior frontend engineer.

Always prioritize readability, usability, and consistency over unnecessary abstraction.

---

# Current Goal

Build only the **Apply for Leave** page.

Do not build leave approval, backend integration, authentication, notifications, admin functionality, analytics, or unrelated features.

This page should be fully functional using mock submission only.

---

# Feature Overview

The Apply for Leave page contains a single centered form.

The purpose of the page is to allow an employee to submit a leave request.

No additional widgets or dashboard cards should be added.

---

# Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod

Do not introduce new libraries without approval.

---

# Development Philosophy

For every task:

1. Read this file first.
2. Build the smallest complete solution.
3. Keep components readable.
4. Avoid unnecessary abstraction.
5. Finish the feature before refactoring.
6. Never overengineer.

---

# Page Layout

The page contains one centered card.

Inside the card:

```
----------------------------------------

Apply for Leave

Small description

----------------------------------------

Start Date

End Date

Leave Type

Reason

Submit Button

----------------------------------------

```

The page should feel clean and professional.

Do not add unnecessary sections.

---

# Form Fields

The form contains exactly five fields.

## 1. Start Date

Use the shadcn Date Picker.

Allow selecting a single date.

Required.

---

## 2. End Date

Use the shadcn Date Picker.

Required.

The end date cannot be before the start date.

Validate this in the form.

---

## 3. Leave Type

Use a shadcn Select.

Options:

- Annual Leave
- Sick Leave
- Personal Leave

Required.

---

## 4. Reason

Use a shadcn Textarea.

Placeholder example:

"Briefly explain the reason for your leave request."

Required.

Limit to approximately 500 characters.

---

## 5. Submit Button

Use a shadcn Button.

Button should span the full width of the form.

Disable while submitting.

Show loading state during submission.

---

# Validation

Use React Hook Form with Zod.

Validate:

- All fields are required.
- End Date must not be before Start Date.
- Reason cannot be empty.
- Leave Type must be selected.

Display friendly validation messages.

---

# Submission

Submission is mocked.

Do not connect to any backend.

Simulate a request using a short timeout.

Example:

- User clicks Submit.
- Button enters loading state.
- Wait 1–2 seconds.
- Display success animation.
- Reset the form.

---

# Success Animation

After successful submission:

Display a success animation inside the card.

Examples:

- Animated checkmark
- Success icon with fade-in
- "Leave request submitted successfully"

Use simple CSS transitions or Tailwind animations.

Do not introduce animation libraries.

The animation should feel smooth but subtle.

---

# Components

Create reusable components only when they improve readability.

Suggested components:

- ApplyLeaveForm
- DateField
- LeaveTypeSelect
- SuccessState

Do not split components unnecessarily.

---

# Styling

Use Tailwind CSS.

Use shadcn/ui components wherever possible.

Maintain:

- Consistent spacing
- Rounded corners
- Clean typography
- Subtle borders
- Responsive layout

Support both Light Mode and Dark Mode.

Never hardcode colors that break theming.

---

# Responsiveness

Desktop:

The form should be centered with a comfortable maximum width.

Tablet:

Reduce width while maintaining spacing.

Mobile:

Inputs should stack naturally and remain easy to use.

The submit button should remain full width.

---

# Folder Structure

```
src/

components/

leave/
    ApplyLeaveForm.tsx
    DateField.tsx
    LeaveTypeSelect.tsx
    SuccessState.tsx

pages/
    ApplyLeavePage.tsx

types/
    leave.ts

lib/
    validation.ts
```

Keep business logic inside the form component.

Do not create unnecessary hooks.

---

# State Management

Use:

- React Hook Form
- Local React state

Do not introduce Context, Zustand, or Redux.

---

# TypeScript

Use strict typing.

No `any`.

Prefer interfaces.

Keep types readable.

---

# User Experience

The experience should feel polished.

Users should understand:

- What information is required.
- Whether the form is valid.
- When the form is submitting.
- When the request has been submitted successfully.

Avoid unnecessary interactions.

---

# Performance

Do not optimize prematurely.

Readable code is more important than micro-optimizations.

---

# Communication

After completing the feature, explain:

1. What was built.
2. Files created.
3. Files modified.
4. How to test the feature.

Keep explanations concise.

---

# Final Reminder

Every implementation should answer this question:

"Is this the simplest production-quality implementation?"

If the solution feels overly complex, simplify it.

The objective is a polished leave request form with excellent UX, strong validation, and a smooth submission experience using mock data.