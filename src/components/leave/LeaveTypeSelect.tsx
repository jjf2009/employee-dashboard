import { LEAVE_TYPES } from '@/lib/validation'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface LeaveTypeSelectProps {
  value?: string
  onChange: (value: string) => void
  error?: string
  disabled?: boolean
}

export function LeaveTypeSelect({
  value,
  onChange,
  error,
  disabled,
}: LeaveTypeSelectProps) {
  return (
    <div className="space-y-2">
      <Label>Leave Type</Label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className={cn(error && 'border-destructive')}>
          <SelectValue placeholder="Select leave type" />
        </SelectTrigger>
        <SelectContent>
          {LEAVE_TYPES.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}