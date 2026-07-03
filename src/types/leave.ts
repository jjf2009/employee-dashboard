import type { applyLeaveSchema } from '@/lib/validation'
import type { z } from 'zod'

export type ApplyLeaveFormValues = z.infer<typeof applyLeaveSchema>

export type LeaveTypeOption = ApplyLeaveFormValues['leaveType']