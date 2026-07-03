export interface LeaveHistory {
  date: string
  type: string
  duration: string
  status: 'Approved' | 'Pending' | 'Rejected'
}

export const leaveHistory: LeaveHistory[] = [
  {
    date: '2026-06-10',
    type: 'Annual Leave',
    duration: '3 days',
    status: 'Approved',
  },
  {
    date: '2026-05-15',
    type: 'Sick Leave',
    duration: '1 day',
    status: 'Approved',
  },
  {
    date: '2026-07-14',
    type: 'Personal Leave',
    duration: '1 day',
    status: 'Pending',
  },
  {
    date: '2026-04-01',
    type: 'Annual Leave',
    duration: '3 days',
    status: 'Approved',
  },
  {
    date: '2026-03-22',
    type: 'Sick Leave',
    duration: '2 days',
    status: 'Rejected',
  },
  {
    date: '2026-08-18',
    type: 'Annual Leave',
    duration: '5 days',
    status: 'Pending',
  },
]