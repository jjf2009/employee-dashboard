import {
  Bell,
  Calendar,
  CalendarCheck,
  Megaphone,
  Users,
  XCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Notification, NotificationType } from '@/types/notification'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface NotificationCardProps {
  notification: Notification
}

const typeConfig: Record<
  NotificationType,
  { icon: LucideIcon; label: string }
> = {
  Leave: { icon: CalendarCheck, label: 'Leave' },
  Announcement: { icon: Megaphone, label: 'Announcement' },
  Holiday: { icon: Calendar, label: 'Holiday' },
  HR: { icon: Users, label: 'HR' },
  Reminder: { icon: Bell, label: 'Reminder' },
}

function NotificationIcon({ notification }: { notification: Notification }) {
  const Icon = notification.title.includes('Rejected')
    ? XCircle
    : typeConfig[notification.type].icon

  return (
    <Icon
      className={cn(
        'h-5 w-5',
        notification.isRead ? 'text-muted-foreground' : 'text-primary',
      )}
    />
  )
}

export function NotificationCard({ notification }: NotificationCardProps) {
  return (
    <Card
      className={cn(
        'transition-colors',
        !notification.isRead && 'border-primary/30 bg-accent/50',
      )}
    >
      <CardContent className="flex gap-4 p-4">
        <div
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
            notification.isRead ? 'bg-muted' : 'bg-primary/15',
          )}
        >
          <NotificationIcon notification={notification} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3
              className={cn(
                'text-sm',
                notification.isRead ? 'font-medium' : 'font-semibold',
              )}
            >
              {notification.title}
            </h3>
            {!notification.isRead && (
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"
                aria-label="Unread"
              />
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {notification.description}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {notification.time}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}