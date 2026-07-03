import type { AnnouncementCategory } from '@/data/announcements'
import { cn } from '@/lib/utils'

interface AnnouncementBadgeProps {
  category: AnnouncementCategory
}

const categoryStyles: Record<AnnouncementCategory, string> = {
  General: 'bg-secondary text-secondary-foreground',
  'Leave Policy': 'bg-primary/15 text-primary',
  'Work From Home': 'bg-accent text-accent-foreground',
  Holiday: 'bg-warning/15 text-warning',
  'Company Event': 'bg-success/15 text-success',
  'HR Update': 'bg-destructive/15 text-destructive',
}

export function AnnouncementBadge({ category }: AnnouncementBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        categoryStyles[category],
      )}
    >
      {category}
    </span>
  )
}