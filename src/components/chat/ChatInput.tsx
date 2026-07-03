import { type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  disabled?: boolean
}

export function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (value.trim() && !disabled) {
      onSend()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 border-t border-border p-3">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask about announcements..."
        disabled={disabled}
        aria-label="Chat message"
      />
      <Button type="submit" size="icon" disabled={disabled || !value.trim()}>
        <Send className="h-4 w-4" />
        <span className="sr-only">Send message</span>
      </Button>
    </form>
  )
}