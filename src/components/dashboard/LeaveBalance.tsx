import type { LeaveBalance as LeaveBalanceType } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface LeaveBalanceProps {
  balance: LeaveBalanceType
}

const leaveTypes = [
  { key: 'annual' as const, label: 'Annual', description: 'Vacation days' },
  { key: 'sick' as const, label: 'Sick', description: 'Medical leave' },
  { key: 'personal' as const, label: 'Personal', description: 'Personal time off' },
]

export function LeaveBalance({ balance }: LeaveBalanceProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {leaveTypes.map(({ key, label, description }) => {
        const data = balance[key]

        return (
          <Card key={key}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{label} Leave</CardTitle>
              <p className="text-xs text-muted-foreground">{description}</p>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{data.remaining}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {data.used} used · {data.total} total
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}