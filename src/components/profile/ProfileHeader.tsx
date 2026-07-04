import type { EmployeeProfile } from '@/types/profile'
import { Card, CardContent } from '@/components/ui/card'

interface ProfileHeaderProps {
  profile: EmployeeProfile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-4 p-4 text-center sm:flex-row sm:p-6 sm:text-left lg:p-6">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-primary-foreground">
          {profile.avatar}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-sm text-muted-foreground">{profile.role}</p>
          <p className="mt-1 text-sm font-medium text-primary">{profile.department}</p>
        </div>
      </CardContent>
    </Card>
  )
}