import { Building2, Crown, Settings, Users, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Announcement } from '@/data/announcements'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnnouncementBadge } from '@/components/announcement/AnnouncementBadge'

interface AnnouncementCardProps {
  announcement: Announcement
}

const authorIcons: Record<string, LucideIcon> = {
  HR: Users,
  CEO: Crown,
  Engineering: Settings,
  Finance: Wallet,
  Operations: Building2,
}

function AuthorAvatar({ author }: { author: string }) {
  const Icon = authorIcons[author] ?? Users

  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
      <Icon className="h-4 w-4 text-muted-foreground" />
    </div>
  )
}

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  return (
    <Card>
      <CardHeader className="gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <AnnouncementBadge category={announcement.category} />
          <span className="text-xs text-muted-foreground">{announcement.time}</span>
        </div>
        <CardTitle className="text-base break-words sm:text-lg">{announcement.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {announcement.description}
        </p>
        <div className="flex items-center gap-2 text-sm">
          <AuthorAvatar author={announcement.author} />
          <span className="font-medium">{announcement.author}</span>
        </div>
      </CardContent>
    </Card>
  )
}