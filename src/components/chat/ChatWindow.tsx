import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ChatMessage, type Message } from '@/components/chat/ChatMessage'
import { ChatInput } from '@/components/chat/ChatInput'
import { LoadingMessage } from '@/components/chat/LoadingMessage'

interface ChatWindowProps {
  isOpen: boolean
  onClose: () => void
  messages: Message[]
  input: string
  onInputChange: (value: string) => void
  onSend: () => void
  isLoading: boolean
}

export function ChatWindow({
  isOpen,
  onClose,
  messages,
  input,
  onInputChange,
  onSend,
  isLoading,
}: ChatWindowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isLoading])

  if (!isOpen) return null

  return (
    <div className="fixed right-4 bottom-20 z-50 flex h-[min(520px,calc(100vh-6rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold">Announcement Assistant</h3>
          <p className="text-xs text-muted-foreground">
            Ask about company announcements
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close chat">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Try asking: &quot;Summarize today&apos;s announcements&quot; or
            &quot;Any leave policy updates?&quot;
          </p>
        )}
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && <LoadingMessage />}
      </div>

      <ChatInput
        value={input}
        onChange={onInputChange}
        onSend={onSend}
        disabled={isLoading}
      />
    </div>
  )
}