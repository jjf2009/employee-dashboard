import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FloatingChatButtonProps {
  onClick: () => void
  isOpen: boolean
}

export function FloatingChatButton({ onClick, isOpen }: FloatingChatButtonProps) {
  return (
    <Button
      type="button"
      size="icon"
      className={cn(
        'fixed right-4 bottom-4 z-50 h-14 w-14 rounded-full shadow-lg',
        isOpen && 'bg-secondary text-secondary-foreground',
      )}
      onClick={onClick}
      aria-label={isOpen ? 'Close announcement assistant' : 'Open announcement assistant'}
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}