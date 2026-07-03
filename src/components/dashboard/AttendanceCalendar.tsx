import { useMemo } from 'react'
import type { CalendarDay, CalendarDayStatus } from '@/data/attendance'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface AttendanceCalendarProps {
  year: number
  month: number
  days: CalendarDay[]
  today: string
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const statusStyles: Record<CalendarDayStatus, string> = {
  present: 'bg-success/20 text-success ring-1 ring-success/30',
  absent: 'bg-destructive/20 text-destructive ring-1 ring-destructive/30',
  leave: 'bg-muted text-muted-foreground ring-1 ring-border',
}

function buildCalendarDays(
  year: number,
  month: number,
  statusByDate: Map<string, CalendarDayStatus>,
  today: string,
) {
  const firstDay = new Date(year, month - 1, 1)
  const daysInMonth = new Date(year, month, 0).getDate()
  const leadingEmpty = firstDay.getDay()
  const cells: Array<{ key: string; day: number | null; status: 'neutral' | CalendarDayStatus }> = []

  for (let i = 0; i < leadingEmpty; i += 1) {
    cells.push({ key: `empty-start-${i}`, day: null, status: 'neutral' })
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateKey = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const isFuture = dateKey > today
    const status = isFuture ? 'neutral' : (statusByDate.get(dateKey) ?? 'neutral')

    cells.push({ key: dateKey, day, status })
  }

  return cells
}

export function AttendanceCalendar({ year, month, days, today }: AttendanceCalendarProps) {
  const monthLabel = new Date(year, month - 1).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  const calendarCells = useMemo(() => {
    const statusByDate = new Map(days.map((d) => [d.date, d.status]))
    return buildCalendarDays(year, month, statusByDate, today)
  }, [year, month, days, today])

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Attendance Calendar</CardTitle>
        <CardDescription>{monthLabel} — daily attendance status.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-3 grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground">
          {WEEKDAYS.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarCells.map((cell) =>
            cell.day === null ? (
              <div key={cell.key} className="aspect-square" />
            ) : (
              <div
                key={cell.key}
                className={cn(
                  'flex aspect-square items-center justify-center rounded-md text-sm font-medium',
                  cell.status === 'neutral'
                    ? 'bg-card text-foreground ring-1 ring-border'
                    : statusStyles[cell.status],
                )}
              >
                {cell.day}
              </div>
            ),
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-success" />
            Present
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            Absent
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-muted ring-1 ring-border" />
            Leave
          </span>
        </div>
      </CardContent>
    </Card>
  )
}