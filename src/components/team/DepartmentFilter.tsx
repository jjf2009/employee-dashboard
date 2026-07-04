import { cn } from '@/lib/utils'

interface DepartmentFilterProps {
  departments: string[]
  selected: string
  onChange: (department: string) => void
}

export function DepartmentFilter({
  departments,
  selected,
  onChange,
}: DepartmentFilterProps) {
  const options = ['All', ...departments]

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((department) => (
        <button
          key={department}
          type="button"
          onClick={() => onChange(department)}
          className={cn(
            'min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
            selected === department
              ? 'border-primary bg-primary text-primary-foreground'
              : 'border-border bg-card text-muted-foreground hover:bg-accent',
          )}
        >
          {department}
        </button>
      ))}
    </div>
  )
}