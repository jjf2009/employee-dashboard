import { useState } from 'react'
import { announcements } from '@/data/announcements'
import { employees } from '@/data/employees'
import { CURRENT_EMPLOYEE_ID } from '@/constants/navigation'
import { Header } from '@/components/layout/Header'
import { AnnouncementTimeline } from '@/components/announcement/AnnouncementTimeline'
import { FloatingChatButton } from '@/components/chat/FloatingChatButton'
import { ChatWindow } from '@/components/chat/ChatWindow'
import type { Message } from '@/components/chat/ChatMessage'
import { askAnnouncementAssistant } from '@/services/gemini'

const currentEmployee = employees.find((e) => e.id === CURRENT_EMPLOYEE_ID)!

function createMessage(role: Message['role'], content: string): Message {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    content,
  }
}

export function AnnouncementsPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const toggleChat = () => setIsChatOpen((open) => !open)

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage = createMessage('user', trimmed)
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const reply = await askAnnouncementAssistant(trimmed)
      setMessages((prev) => [...prev, createMessage('assistant', reply)])
    } catch (error) {
      const errorText =
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      setMessages((prev) => [...prev, createMessage('assistant', errorText)])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header
        employee={currentEmployee}
        title="Announcements"
        description="Stay up to date with company news and updates."
      />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <AnnouncementTimeline announcements={announcements} />
      </main>

      <FloatingChatButton onClick={toggleChat} isOpen={isChatOpen} />
      <ChatWindow
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        messages={messages}
        input={input}
        onInputChange={setInput}
        onSend={handleSend}
        isLoading={isLoading}
      />
    </>
  )
}