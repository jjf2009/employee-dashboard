import type { ReactNode } from 'react'

interface DateGroupProps {
  heading: string
  children: ReactNode
}

export function DateGroup({ heading, children }: DateGroupProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        {heading}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}