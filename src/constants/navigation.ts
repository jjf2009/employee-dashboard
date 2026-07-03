import { CalendarDays, LayoutDashboard, Megaphone, Users } from 'lucide-react'

export const CURRENT_EMPLOYEE_ID = 'emp-001'

export const NAV_ITEMS = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Apply for Leave', path: '/leave', icon: CalendarDays },
  { label: 'Announcements', path: '/announcements', icon: Megaphone },
  { label: 'Team Directory', path: '/team', icon: Users },
] as const