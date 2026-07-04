import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn } from '@/lib/utils'

export function Popover(props: PopoverPrimitive.PopoverProps) {
  return <PopoverPrimitive.Root {...props} />
}

export function PopoverTrigger(props: PopoverPrimitive.PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger {...props} />
}

export const PopoverContent = forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'start', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-auto max-w-[calc(100vw-2rem)] rounded-md border border-border bg-popover p-0 text-popover-foreground shadow-md outline-none',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = 'PopoverContent'