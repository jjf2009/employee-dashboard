import type { Notification } from '@/types/notification'
import { groupNotificationsByDate } from '@/utils/notificationDates'
import { DateGroup } from '@/components/notifications/DateGroup'
import { NotificationCard } from '@/components/notifications/NotificationCard'

interface NotificationListProps {
  notifications: Notification[]
}

export function NotificationList({ notifications }: NotificationListProps) {
  const groups = groupNotificationsByDate(notifications)

  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <DateGroup key={group.heading} heading={group.heading}>
          {group.items.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </DateGroup>
      ))}
    </div>
  )
}