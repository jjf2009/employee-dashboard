export interface AttendanceRecord {
  month: string
  present: number
  absent: number
  leave: number
}

export type CalendarDayStatus = 'present' | 'absent' | 'leave'

export interface CalendarDay {
  date: string
  status: CalendarDayStatus
}

export const annualAttendanceOverview: AttendanceRecord[] = [
  { month: 'Jan', present: 20, absent: 1, leave: 2 },
  { month: 'Feb', present: 18, absent: 0, leave: 2 },
  { month: 'Mar', present: 21, absent: 1, leave: 1 },
  { month: 'Apr', present: 19, absent: 2, leave: 1 },
  { month: 'May', present: 20, absent: 0, leave: 3 },
  { month: 'Jun', present: 21, absent: 1, leave: 0 },
  { month: 'Jul', present: 2, absent: 0, leave: 0 },
  { month: 'Aug', present: 0, absent: 0, leave: 0 },
  { month: 'Sep', present: 0, absent: 0, leave: 0 },
  { month: 'Oct', present: 0, absent: 0, leave: 0 },
  { month: 'Nov', present: 0, absent: 0, leave: 0 },
  { month: 'Dec', present: 0, absent: 0, leave: 0 },
]

export const julyAttendanceCalendar: CalendarDay[] = [
  { date: '2026-07-01', status: 'present' },
  { date: '2026-07-02', status: 'present' },
]