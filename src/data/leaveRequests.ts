import type { LeaveBalance, LeaveRequest } from '@/types'
import { CURRENT_EMPLOYEE_ID } from '@/constants/navigation'

export const leaveBalances: LeaveBalance[] = [
  {
    employeeId: CURRENT_EMPLOYEE_ID,
    annual: { total: 20, used: 8, remaining: 12 },
    sick: { total: 10, used: 2, remaining: 8 },
    personal: { total: 5, used: 1, remaining: 4 },
  },
]

export const leaveRequests: LeaveRequest[] = [
  {
    id: 'leave-001',
    employeeId: CURRENT_EMPLOYEE_ID,
    type: 'annual',
    startDate: '2026-06-10',
    endDate: '2026-06-12',
    days: 3,
    status: 'approved',
    reason: 'Family vacation',
    submittedAt: '2026-05-20',
  },
  {
    id: 'leave-002',
    employeeId: CURRENT_EMPLOYEE_ID,
    type: 'sick',
    startDate: '2026-05-15',
    endDate: '2026-05-15',
    days: 1,
    status: 'approved',
    reason: 'Medical appointment',
    submittedAt: '2026-05-14',
  },
  {
    id: 'leave-003',
    employeeId: CURRENT_EMPLOYEE_ID,
    type: 'personal',
    startDate: '2026-07-14',
    endDate: '2026-07-14',
    days: 1,
    status: 'pending',
    reason: 'Personal errand',
    submittedAt: '2026-07-01',
  },
  {
    id: 'leave-004',
    employeeId: CURRENT_EMPLOYEE_ID,
    type: 'annual',
    startDate: '2026-04-01',
    endDate: '2026-04-03',
    days: 3,
    status: 'approved',
    reason: 'Spring break',
    submittedAt: '2026-03-10',
  },
  {
    id: 'leave-005',
    employeeId: CURRENT_EMPLOYEE_ID,
    type: 'annual',
    startDate: '2026-08-18',
    endDate: '2026-08-22',
    days: 5,
    status: 'pending',
    reason: 'Summer holiday',
    submittedAt: '2026-06-28',
  },
]