import type { Announcement } from '@/data/announcements'

const TODAY = '2026-07-02'

function getYesterday(): string {
  const date = new Date(TODAY)
  date.setDate(date.getDate() - 1)
  return date.toISOString().slice(0, 10)
}

export function getDateHeading(date: string): string {
  if (date === TODAY) return 'Today'

  const yesterday = getYesterday()
  if (date === yesterday) return 'Yesterday'

  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}

export interface AnnouncementGroup {
  heading: string
  date: string
  items: Announcement[]
}

export function groupAnnouncementsByDate(
  items: Announcement[],
): AnnouncementGroup[] {
  const sorted = [...items].sort((a, b) => {
    const dateCompare = b.date.localeCompare(a.date)
    if (dateCompare !== 0) return dateCompare
    return b.time.localeCompare(a.time)
  })

  const groups = new Map<string, AnnouncementGroup>()

  for (const item of sorted) {
    const heading = getDateHeading(item.date)
    const existing = groups.get(item.date)

    if (existing) {
      existing.items.push(item)
      continue
    }

    groups.set(item.date, { heading, date: item.date, items: [item] })
  }

  return Array.from(groups.values())
}