import { Mail, MapPin, Phone } from 'lucide-react'
import type { Employee } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface EmployeeCardProps {
  employee: Employee
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            {employee.avatar}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold">{employee.name}</h3>
            <p className="text-sm text-muted-foreground">{employee.role}</p>
            <Badge variant="secondary" className="mt-2">
              {employee.department}
            </Badge>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{employee.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 shrink-0" />
            <span>{employee.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span>{employee.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}