export type AnnouncementCategory =
  | 'General'
  | 'Leave Policy'
  | 'Work From Home'
  | 'Holiday'
  | 'Company Event'
  | 'HR Update'

export interface Announcement {
  id: string
  title: string
  description: string
  category: AnnouncementCategory
  author: string
  date: string
  time: string
}

export const announcements: Announcement[] = [
  {
    id: 'ann-001',
    title: 'Updated Leave Policy for Q3',
    description:
      'Annual leave requests now require 5 business days notice. Emergency leave can still be submitted with manager approval. Review the full policy on the intranet.',
    category: 'Leave Policy',
    author: 'HR',
    date: '2026-07-02',
    time: '09:30 AM',
  },
  {
    id: 'ann-002',
    title: 'Team Lunch — This Friday',
    description:
      'Join us for a company-sponsored lunch at 12:30 PM in the main cafeteria. RSVP through the events portal by Thursday.',
    category: 'Company Event',
    author: 'Operations',
    date: '2026-07-02',
    time: '11:00 AM',
  },
  {
    id: 'ann-003',
    title: 'WFH Guidelines Reminder',
    description:
      'Remote work is available up to 3 days per week. Please update your weekly schedule in PulseHR and ensure your manager has visibility.',
    category: 'Work From Home',
    author: 'HR',
    date: '2026-07-01',
    time: '04:15 PM',
  },
  {
    id: 'ann-004',
    title: 'Q3 All-Hands Meeting',
    description:
      'Our quarterly all-hands is scheduled for July 15 at 2:00 PM. Leadership will share company goals, product updates, and team recognitions.',
    category: 'General',
    author: 'CEO',
    date: '2026-07-01',
    time: '10:00 AM',
  },
  {
    id: 'ann-005',
    title: 'Office Closure — Independence Day',
    description:
      'The office will be closed on July 4. Emergency contacts and on-call schedules are listed on the intranet.',
    category: 'Holiday',
    author: 'Finance',
    date: '2026-06-25',
    time: '02:00 PM',
  },
  {
    id: 'ann-006',
    title: 'Benefits Enrollment Window Opens',
    description:
      'Open enrollment for health and wellness benefits begins July 10. HR will host info sessions throughout the week.',
    category: 'HR Update',
    author: 'HR',
    date: '2026-06-20',
    time: '09:00 AM',
  },
  {
    id: 'ann-007',
    title: 'Engineering Town Hall Recap',
    description:
      'Key takeaways from last week: platform migration timeline, on-call rotation changes, and new code review guidelines are now published.',
    category: 'General',
    author: 'Engineering',
    date: '2026-06-15',
    time: '03:30 PM',
  },
]