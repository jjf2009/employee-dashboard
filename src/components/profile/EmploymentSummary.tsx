import type { EmployeeProfile } from '@/types/profile'
import { Briefcase, CalendarCheck, FolderKanban } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface EmploymentSummaryProps {
  profile: EmployeeProfile
}

const summaryItems = [
  {
    key: 'attendance' as const,
    label: 'Attendance',
    suffix: '%',
    icon: CalendarCheck,
  },
  {
    key: 'remainingLeave' as const,
    label: 'Remaining Leave',
    suffix: ' days',
    icon: Briefcase,
  },
  {
    key: 'completedProjects' as const,
    label: 'Completed Projects',
    suffix: '',
    icon: FolderKanban,
  },
]

export function EmploymentSummary({ profile }: EmploymentSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employment Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-3">
          {summaryItems.map((item) => (
            <div
              key={item.key}
              className="rounded-lg border border-border bg-muted/30 p-4"
            >
              <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                <item.icon className="h-4 w-4" />
                <span className="text-sm">{item.label}</span>
              </div>
              <p className="text-2xl font-bold">
                {profile[item.key]}
                {item.suffix}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}