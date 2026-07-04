import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { applyLeaveSchema } from '@/lib/validation'
import type { ApplyLeaveFormValues } from '@/types/leave'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { DateField } from '@/components/leave/DateField'
import { LeaveTypeSelect } from '@/components/leave/LeaveTypeSelect'
import { SuccessState } from '@/components/leave/SuccessState'
import { cn } from '@/lib/utils'

const MOCK_SUBMIT_DELAY_MS = 1500
const SUCCESS_DISPLAY_MS = 2500

export function ApplyLeaveForm() {
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplyLeaveFormValues>({
    resolver: zodResolver(applyLeaveSchema),
    defaultValues: {
      reason: '',
    },
  })

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, MOCK_SUBMIT_DELAY_MS))
    setIsSuccess(true)

    setTimeout(() => {
      setIsSuccess(false)
      reset()
    }, SUCCESS_DISPLAY_MS)
  }

  if (isSuccess) {
    return <SuccessState />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="startDate"
        control={control}
        render={({ field }) => (
          <DateField
            label="Start Date"
            value={field.value}
            onChange={field.onChange}
            error={errors.startDate?.message}
            disabled={isSubmitting}
          />
        )}
      />

      <Controller
        name="endDate"
        control={control}
        render={({ field }) => (
          <DateField
            label="End Date"
            value={field.value}
            onChange={field.onChange}
            error={errors.endDate?.message}
            disabled={isSubmitting}
          />
        )}
      />

      <Controller
        name="leaveType"
        control={control}
        render={({ field }) => (
          <LeaveTypeSelect
            value={field.value}
            onChange={field.onChange}
            error={errors.leaveType?.message}
            disabled={isSubmitting}
          />
        )}
      />

      <Controller
        name="reason"
        control={control}
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="reason">Reason</Label>
            <Textarea
              id="reason"
              placeholder="Briefly explain the reason for your leave request."
              disabled={isSubmitting}
              className={cn(errors.reason && 'border-destructive')}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
            />
            <div className="flex items-center justify-between gap-2">
              {errors.reason ? (
                <p className="text-sm text-destructive">{errors.reason.message}</p>
              ) : (
                <span />
              )}
              <p className="text-xs text-muted-foreground">
                {field.value.length}/500
              </p>
            </div>
          </div>
        )}
      />

      <Button type="submit" className="min-h-11 w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Leave Request'
        )}
      </Button>
    </form>
  )
}