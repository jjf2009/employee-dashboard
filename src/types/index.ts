export interface Employee {
  id: string
  name: string
  email: string
  role: string
  department: string
  avatar: string
  phone: string
  location: string
}

export type AttendanceStatus = 'present' | 'late' | 'absent' | 'remote'

export interface Attendance {
  employeeId: string
  date: string
  checkIn: string
  checkOut: string | null
  status: AttendanceStatus
  hoursWorked: number
}

export interface LeaveTypeBalance {
  total: number
  used: number
  remaining: number
}

export interface LeaveBalance {
  employeeId: string
  annual: LeaveTypeBalance
  sick: LeaveTypeBalance
  personal: LeaveTypeBalance
}

export type LeaveType = 'annual' | 'sick' | 'personal'
export type LeaveStatus = 'pending' | 'approved' | 'rejected'

export interface LeaveRequest {
  id: string
  employeeId: string
  type: LeaveType
  startDate: string
  endDate: string
  days: number
  status: LeaveStatus
  reason: string
  submittedAt: string
}

