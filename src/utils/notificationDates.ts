import type { Notification } from '@/types/notification'

const TODAY = '2026-07-02'

function getYesterday(): string {
  const date = new Date(TODAY)
  date.setDate(date.getDate() - 1)
  return date.toISOString().slice(0, 10)
}

export type NotificationDateGroup = 'Today' | 'Yesterday' | 'Earlier'

export function getNotificationGroup(date: string): NotificationDateGroup {
  if (date === TODAY) return 'Today'
  if (date === getYesterday()) return 'Yesterday'
  return 'Earlier'
}

const groupOrder: NotificationDateGroup[] = ['Today', 'Yesterday', 'Earlier']

export interface GroupedNotifications {
  heading: NotificationDateGroup
  items: Notification[]
}

export function groupNotificationsByDate(
  items: Notification[],
): GroupedNotifications[] {
  const sorted = [...items].sort((a, b) => {
    const dateCompare = b.date.localeCompare(a.date)
    if (dateCompare !== 0) return dateCompare
    return b.time.localeCompare(a.time)
  })

  const buckets = new Map<NotificationDateGroup, Notification[]>()

  for (const item of sorted) {
    const group = getNotificationGroup(item.date)
    const existing = buckets.get(group) ?? []
    existing.push(item)
    buckets.set(group, existing)
  }

  return groupOrder
    .filter((heading) => buckets.has(heading))
    .map((heading) => ({
      heading,
      items: buckets.get(heading) ?? [],
    }))
}