import { employees } from '@/data/employees'
import { employeeProfile } from '@/data/profile'
import { CURRENT_EMPLOYEE_ID } from '@/constants/navigation'
import { Header } from '@/components/layout/Header'
import { ProfileHeader } from '@/components/profile/ProfileHeader'
import { ProfileInfoCard } from '@/components/profile/ProfileInfoCard'
import { EmploymentSummary } from '@/components/profile/EmploymentSummary'

const currentEmployee = employees.find((e) => e.id === CURRENT_EMPLOYEE_ID)!

export function ProfilePage() {
  return (
    <>
      <Header employee={currentEmployee} title="Profile" />
      <main className="flex-1 space-y-6 p-4 sm:p-6 lg:p-8">
        <ProfileHeader profile={employeeProfile} />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ProfileInfoCard profile={employeeProfile} />
          <EmploymentSummary profile={employeeProfile} />
        </div>
      </main>
    </>
  )
}