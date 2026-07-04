import { annualAttendanceOverview, julyAttendanceCalendar } from '@/data/attendance'
import { leaveBalances, leaveRequests } from '@/data/leaveRequests'
import { employees } from '@/data/employees'
import { CURRENT_EMPLOYEE_ID } from '@/constants/navigation'
import { Header } from '@/components/layout/Header'
import { AttendanceChart } from '@/components/dashboard/AttendanceChart'
import { AttendanceCalendar } from '@/components/dashboard/AttendanceCalendar'
import { LeaveBalance } from '@/components/dashboard/LeaveBalance'
import { LeaveTable } from '@/components/dashboard/LeaveTable'

const currentEmployee = employees.find((e) => e.id === CURRENT_EMPLOYEE_ID)!
const currentBalance = leaveBalances.find((b) => b.employeeId === CURRENT_EMPLOYEE_ID)!
const myLeaveRequests = leaveRequests.filter(
  (request) => request.employeeId === CURRENT_EMPLOYEE_ID,
)
const TODAY = '2026-07-02'

export function DashboardPage() {
  return (
    <>
      <Header
        employee={currentEmployee}
        title="Dashboard"
        description="Your attendance and leave overview."
      />
      <main className="flex-1 space-y-8 p-4 sm:space-y-10 sm:p-6 lg:p-8">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">Attendance</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <AttendanceChart data={annualAttendanceOverview} />
            <AttendanceCalendar
              year={2026}
              month={7}
              days={julyAttendanceCalendar}
              today={TODAY}
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">Leave Summary</h2>
          <LeaveBalance balance={currentBalance} />
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">Leave History</h2>
          <LeaveTable requests={myLeaveRequests} />
        </section>
      </main>
    </>
  )
}