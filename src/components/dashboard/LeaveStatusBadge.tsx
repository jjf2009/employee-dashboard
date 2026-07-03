import type { LeaveStatus } from '@/types'
import { Badge } from '@/components/ui/badge'

interface LeaveStatusBadgeProps {
  status: LeaveStatus
}

const statusConfig: Record<
  LeaveStatus,
  { label: string; variant: 'success' | 'warning' | 'destructive' }
> = {
  approved: { label: 'Approved', variant: 'success' },
  pending: { label: 'Pending', variant: 'warning' },
  rejected: { label: 'Rejected', variant: 'destructive' },
}

export function LeaveStatusBadge({ status }: LeaveStatusBadgeProps) {
  const config = statusConfig[status]
  return <Badge variant={config.variant}>{config.label}</Badge>
}