import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Bell, Menu, X, HeartPulse } from 'lucide-react'
import { NAV_ITEMS, CURRENT_EMPLOYEE_ID } from '@/constants/navigation'
import { employees } from '@/data/employees'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

const currentEmployee = employees.find((e) => e.id === CURRENT_EMPLOYEE_ID)!

function SidebarBrand() {
  return (
    <div className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <HeartPulse className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-semibold">PulseHR</p>
        <p className="text-xs text-muted-foreground">Employee Portal</p>
      </div>
    </div>
  )
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex-1 space-y-1 overflow-y-auto p-4">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              'flex min-h-11 items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors lg:min-h-0',
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
            )
          }
        >
          <item.icon className="h-4 w-4 shrink-0" />
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

function MobileSidebarLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="space-y-1 border-t border-border p-4">
      <div className="flex min-h-11 items-center justify-between rounded-md px-3 py-2.5">
        <span className="text-sm font-medium text-muted-foreground">Theme</span>
        <ThemeToggle />
      </div>

      <NavLink
        to="/notifications"
        onClick={onNavigate}
        className={({ isActive }) =>
          cn(
            'flex min-h-11 items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
            isActive
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
          )
        }
      >
        <Bell className="h-4 w-4 shrink-0" />
        Notifications
      </NavLink>

      <NavLink
        to="/profile"
        onClick={onNavigate}
        className={({ isActive }) =>
          cn(
            'flex min-h-11 items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
            isActive
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
          )
        }
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
          {currentEmployee.avatar}
        </div>
        <div className="min-w-0">
          <p className="truncate">Profile</p>
          <p className="truncate text-xs font-normal text-muted-foreground">
            {currentEmployee.name}
          </p>
        </div>
      </NavLink>
    </div>
  )
}

function SidebarPanel({
  onNavigate,
  showMobileLinks = false,
}: {
  onNavigate?: () => void
  showMobileLinks?: boolean
}) {
  return (
    <>
      <SidebarBrand />
      <SidebarNav onNavigate={onNavigate} />
      {showMobileLinks && <MobileSidebarLinks onNavigate={onNavigate} />}
    </>
  )
}

export function Sidebar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [prevPathname, setPrevPathname] = useState(location.pathname)

  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname)
    setIsOpen(false)
  }

  const openSidebar = () => setIsOpen(true)
  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-50 lg:hidden"
        onClick={isOpen ? closeSidebar : openSidebar}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-card lg:flex">
        <SidebarPanel />
      </aside>

      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen} className="w-64 border-r border-border">
          <SheetContent>
            <SidebarPanel onNavigate={closeSidebar} showMobileLinks />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}