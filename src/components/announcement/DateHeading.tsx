interface DateHeadingProps {
  label: string
}

export function DateHeading({ label }: DateHeadingProps) {
  return (
    <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
      {label}
    </h2>
  )
}