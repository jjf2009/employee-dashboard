import type { Notification } from '@/types/notification'

export const notifications: Notification[] = [
  {
    id: 'notif-001',
    title: 'Leave Request Approved',
    description:
      'Your annual leave request for July 14 has been approved by Marcus Johnson.',
    type: 'Leave',
    date: '2026-07-02',
    time: '10:15 AM',
    isRead: false,
  },
  {
    id: 'notif-002',
    title: 'Company Announcement',
    description:
      'Q3 all-hands meeting scheduled for July 15. Check announcements for details.',
    type: 'Announcement',
    date: '2026-07-02',
    time: '09:00 AM',
    isRead: false,
  },
  {
    id: 'notif-003',
    title: 'HR Update',
    description:
      'Benefits enrollment window opens July 10. Review your options in the HR portal.',
    type: 'HR',
    date: '2026-07-01',
    time: '04:30 PM',
    isRead: true,
  },
  {
    id: 'notif-004',
    title: 'Policy Update',
    description:
      'Updated remote work policy is now available. You may work from home up to 3 days per week.',
    type: 'HR',
    date: '2026-07-01',
    time: '11:20 AM',
    isRead: false,
  },
  {
    id: 'notif-005',
    title: 'Holiday Reminder',
    description: 'The office will be closed on July 4 for Independence Day.',
    type: 'Holiday',
    date: '2026-06-28',
    time: '02:00 PM',
    isRead: true,
  },
  {
    id: 'notif-006',
    title: 'Leave Request Rejected',
    description:
      'Your leave request for August 18–22 was declined due to team coverage requirements.',
    type: 'Leave',
    date: '2026-06-25',
    time: '09:45 AM',
    isRead: true,
  },
  {
    id: 'notif-007',
    title: 'Team Event Reminder',
    description: 'Company lunch this Friday at 12:30 PM. RSVP through the events portal.',
    type: 'Reminder',
    date: '2026-06-20',
    time: '03:00 PM',
    isRead: true,
  },
]