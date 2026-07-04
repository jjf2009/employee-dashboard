import type { Announcement } from '@/data/announcements'
import { groupAnnouncementsByDate } from '@/utils/announcementDates'
import { AnnouncementCard } from '@/components/announcement/AnnouncementCard'
import { DateHeading } from '@/components/announcement/DateHeading'

interface AnnouncementTimelineProps {
  announcements: Announcement[]
}

export function AnnouncementTimeline({ announcements }: AnnouncementTimelineProps) {
  const groups = groupAnnouncementsByDate(announcements)

  return (
    <div className="space-y-6 md:space-y-8">
      {groups.map((group) => (
        <section key={group.date} className="space-y-3 md:space-y-4">
          <DateHeading label={group.heading} />
          <div className="space-y-4">
            {group.items.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}