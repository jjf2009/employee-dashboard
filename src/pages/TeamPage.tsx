import { useMemo, useState } from 'react'
import { Users } from 'lucide-react'
import { employees } from '@/data/employees'
import { CURRENT_EMPLOYEE_ID } from '@/constants/navigation'
import { Header } from '@/components/layout/Header'
import { SearchBar } from '@/components/team/SearchBar'
import { DepartmentFilter } from '@/components/team/DepartmentFilter'
import { EmployeeCard } from '@/components/team/EmployeeCard'
import { EmptyState } from '@/components/ui/empty-state'

const currentEmployee = employees.find((e) => e.id === CURRENT_EMPLOYEE_ID)!

const departments = [...new Set(employees.map((e) => e.department))].sort()

function filterEmployees(search: string, department: string) {
  const query = search.toLowerCase().trim()

  return employees.filter((employee) => {
    const matchesDepartment =
      department === 'All' || employee.department === department

    if (!matchesDepartment) return false
    if (!query) return true

    return (
      employee.name.toLowerCase().includes(query) ||
      employee.role.toLowerCase().includes(query) ||
      employee.department.toLowerCase().includes(query) ||
      employee.email.toLowerCase().includes(query)
    )
  })
}

export function TeamPage() {
  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState('All')

  const filteredEmployees = useMemo(
    () => filterEmployees(search, department),
    [search, department],
  )

  return (
    <>
      <Header
        employee={currentEmployee}
        title="Team Directory"
        description="Find and connect with your colleagues."
      />
      <main className="flex-1 space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchBar value={search} onChange={setSearch} />
          <p className="text-sm text-muted-foreground">
            {filteredEmployees.length} of {employees.length} employees
          </p>
        </div>

        <DepartmentFilter
          departments={departments}
          selected={department}
          onChange={setDepartment}
        />

        {filteredEmployees.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredEmployees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Users}
            title="No employees found"
            description="Try adjusting your search or department filter."
          />
        )}
      </main>
    </>
  )
}