import type { EmployeeProfile } from '@/types/profile'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/utils/format'

interface ProfileInfoCardProps {
  profile: EmployeeProfile
}

const fields: Array<{ label: string; value: (profile: EmployeeProfile) => string }> = [
  { label: 'Email', value: (p) => p.email },
  { label: 'Phone', value: (p) => p.phone },
  { label: 'Employee ID', value: (p) => p.id },
  { label: 'Manager', value: (p) => p.manager },
  { label: 'Joining Date', value: (p) => formatDate(p.joiningDate) },
  { label: 'Office Location', value: (p) => p.officeLocation },
]

export function ProfileInfoCard({ profile }: ProfileInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {fields.map((field) => (
            <div key={field.label}>
              <dt className="text-sm text-muted-foreground">{field.label}</dt>
              <dd className="mt-1 text-sm font-medium">{field.value(profile)}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  )
}