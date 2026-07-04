import { employees } from '@/data/employees'
import { CURRENT_EMPLOYEE_ID } from '@/constants/navigation'
import { Header } from '@/components/layout/Header'
import { ApplyLeaveForm } from '@/components/leave/ApplyLeaveForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const currentEmployee = employees.find((e) => e.id === CURRENT_EMPLOYEE_ID)!

export function ApplyLeavePage() {
  return (
    <>
      <Header
        employee={currentEmployee}
        title="Apply for Leave"
        description="Submit a new leave request for manager approval."
      />
      <main className="flex flex-1 justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-lg md:max-w-md lg:max-w-lg">
          <CardHeader>
            <CardTitle>Apply for Leave</CardTitle>
            <CardDescription>
              Fill in the details below to request time off.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ApplyLeaveForm />
          </CardContent>
        </Card>
      </main>
    </>
  )
}