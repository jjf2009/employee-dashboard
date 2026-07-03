import { Link } from 'react-router-dom'
import { Bell } from 'lucide-react'
import type { Employee } from '@/types'
import { buttonVariants } from '@/components/ui/button-variants'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { cn } from '@/lib/utils'

interface HeaderProps {
  employee: Employee
  title: string
  description?: string
}

export function Header({ employee, title, description }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card px-4 py-4 transition-colors duration-200 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="pl-12 lg:pl-0">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            to="/notifications"
            aria-label="Notifications"
            className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
          >
            <Bell className="h-4 w-4" />
          </Link>

          <Link
            to="/profile"
            className={cn(
              'flex items-center gap-3 rounded-lg border border-border px-3 py-2 transition-colors hover:bg-accent',
            )}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {employee.avatar}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium">{employee.name}</p>
              <p className="text-xs text-muted-foreground">{employee.role}</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}