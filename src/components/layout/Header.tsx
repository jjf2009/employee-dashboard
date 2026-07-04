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
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 pl-12 lg:pl-0">
          <h1 className="text-xl font-semibold tracking-tight break-words sm:text-2xl">
            {title}
          </h1>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="hidden shrink-0 items-center gap-2 sm:gap-3 lg:flex">
          <ThemeToggle />

          <Link
            to="/notifications"
            aria-label="Notifications"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'icon' }),
              'hidden lg:inline-flex',
            )}
          >
            <Bell className="h-4 w-4" />
          </Link>

          <Link
            to="/profile"
            className={cn(
              'hidden min-h-10 items-center gap-3 rounded-lg border border-border px-3 py-2 transition-colors hover:bg-accent lg:flex',
            )}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {employee.avatar}
            </div>
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-medium">{employee.name}</p>
              <p className="truncate text-xs text-muted-foreground">{employee.role}</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}