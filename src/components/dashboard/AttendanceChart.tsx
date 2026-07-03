import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { AttendanceRecord } from '@/data/attendance'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface AttendanceChartProps {
  data: AttendanceRecord[]
}

export function AttendanceChart({ data }: AttendanceChartProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Annual Attendance Overview</CardTitle>
        <CardDescription>
          Monthly breakdown of present, absent, and leave days for 2026.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
              />
              <XAxis
                dataKey="month"
                tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  color: 'var(--foreground)',
                }}
                labelStyle={{ color: 'var(--foreground)' }}
                itemStyle={{ color: 'var(--foreground)' }}
              />
              <Legend wrapperStyle={{ color: 'var(--foreground)' }} />
              <Bar
                dataKey="present"
                name="Present"
                stackId="attendance"
                fill="var(--success)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="absent"
                name="Absent"
                stackId="attendance"
                fill="var(--destructive)"
              />
              <Bar
                dataKey="leave"
                name="Leave"
                stackId="attendance"
                fill="var(--muted-foreground)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}