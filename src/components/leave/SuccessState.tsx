import { CheckCircle2 } from 'lucide-react'

export function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center success-fade-in">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/15">
        <CheckCircle2 className="h-10 w-10 text-success success-check-pop" />
      </div>
      <h3 className="text-lg font-semibold">Leave request submitted successfully</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Your manager will review your request shortly.
      </p>
    </div>
  )
}