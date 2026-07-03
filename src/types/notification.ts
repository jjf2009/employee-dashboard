export type NotificationType =
  | 'Leave'
  | 'Announcement'
  | 'Holiday'
  | 'HR'
  | 'Reminder'

export interface Notification {
  id: string
  title: string
  description: string
  type: NotificationType
  date: string
  time: string
  isRead: boolean
}