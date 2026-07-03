import { notifications } from '@/data/notifications'
import { employees } from '@/data/employees'
import { CURRENT_EMPLOYEE_ID } from '@/constants/navigation'
import { Header } from '@/components/layout/Header'
import { NotificationList } from '@/components/notifications/NotificationList'

const currentEmployee = employees.find((e) => e.id === CURRENT_EMPLOYEE_ID)!

export function NotificationsPage() {
  return (
    <>
      <Header
        employee={currentEmployee}
        title="Notifications"
        description="Recent updates and reminders."
      />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <NotificationList notifications={notifications} />
      </main>
    </>
  )
}