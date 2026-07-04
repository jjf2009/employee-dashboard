import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, HeartPulse } from 'lucide-react'
import { NAV_ITEMS } from '@/constants/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'

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

function SidebarPanel({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <SidebarBrand />
      <SidebarNav onNavigate={onNavigate} />
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
            <SidebarPanel onNavigate={closeSidebar} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}