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
    <form onSubmit={handleSubmit} className="flex gap-2 border-t border-border p-3 sm:p-4">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask about announcements..."
        disabled={disabled}
        aria-label="Chat message"
        className="min-h-11"
      />
      <Button
        type="submit"
        size="icon"
        className="h-11 w-11 shrink-0"
        disabled={disabled || !value.trim()}
      >
        <Send className="h-4 w-4" />
        <span className="sr-only">Send message</span>
      </Button>
    </form>
  )
}