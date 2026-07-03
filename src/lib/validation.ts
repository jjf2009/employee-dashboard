import { z } from 'zod'

export const LEAVE_TYPES = [
  'Annual Leave',
  'Sick Leave',
  'Personal Leave',
] as const

export const applyLeaveSchema = z
  .object({
    startDate: z.date({ message: 'Start date is required' }),
    endDate: z.date({ message: 'End date is required' }),
    leaveType: z.enum(LEAVE_TYPES, { message: 'Leave type is required' }),
    reason: z
      .string()
      .trim()
      .min(1, 'Reason is required')
      .max(500, 'Reason must be 500 characters or less'),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: 'End date cannot be before start date',
    path: ['endDate'],
  })