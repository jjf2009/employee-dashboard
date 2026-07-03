import type { EmployeeProfile } from '@/types/profile'
import { CURRENT_EMPLOYEE_ID } from '@/constants/navigation'

export const employeeProfile: EmployeeProfile = {
  id: CURRENT_EMPLOYEE_ID,
  name: 'Sarah Chen',
  role: 'Product Designer',
  department: 'Design',
  email: 'sarah.chen@pulsehr.com',
  phone: '+1 (555) 201-4401',
  manager: 'Marcus Johnson',
  joiningDate: '2022-03-14',
  officeLocation: 'San Francisco, CA',
  attendance: 94,
  remainingLeave: 14,
  completedProjects: 12,
  avatar: 'SC',
}