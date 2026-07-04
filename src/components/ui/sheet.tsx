import {
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useCallback,
} from 'react'
import { cn } from '@/lib/utils'

interface SheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
  side?: 'left' | 'right'
  className?: string
}

export function Sheet({
  open,
  onOpenChange,
  children,
  side = 'left',
  className,
}: SheetProps) {
  const close = useCallback(() => onOpenChange(false), [onOpenChange])

  useEffect(() => {
    if (!open) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open, close])

  if (!open) return null

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-40 bg-black/40"
        onClick={close}
        aria-label="Close panel"
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          'fixed inset-y-0 z-50 flex flex-col bg-card shadow-lg transition-transform duration-200',
          side === 'left' ? 'left-0' : 'right-0',
          className,
        )}
      >
        {children}
      </div>
    </>
  )
}

export function SheetContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-1 flex-col', className)} {...props} />
}