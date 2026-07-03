export interface LeaveSummary {
  type: string
  total: number
  used: number
  remaining: number
}

export const leaveSummaries: LeaveSummary[] = [
  { type: 'Annual Leave', total: 24, used: 10, remaining: 14 },
  { type: 'Sick Leave', total: 12, used: 4, remaining: 8 },
  { type: 'Personal Leave', total: 6, used: 2, remaining: 4 },
]