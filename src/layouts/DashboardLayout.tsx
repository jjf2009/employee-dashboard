import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen overflow-x-hidden bg-background">
      <Sidebar />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  )
}