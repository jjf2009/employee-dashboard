import { Mic, MicOff, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useVoiceSearch } from '@/hooks/useVoiceSearch'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search employees...',
  className,
}: SearchBarProps) {
  const { isListening, isSupported, error, startListening } = useVoiceSearch({
    onResult: onChange,
  })

  return (
    <div className={cn('w-full space-y-1.5', className)}>
      <div className="flex gap-2">
        <div className="relative min-w-0 flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="min-h-11 pl-9"
            aria-label="Search employees"
          />
        </div>

        <Button
          type="button"
          variant={isListening ? 'default' : 'outline'}
          size="icon"
          className={cn('h-11 w-11 shrink-0', isListening && 'animate-pulse')}
          onClick={startListening}
          aria-label={isListening ? 'Stop voice search' : 'Start voice search'}
          title={
            isSupported
              ? isListening
                ? 'Listening... click to stop'
                : 'Search by voice'
              : 'Voice search not supported in this browser'
          }
        >
          {isListening ? (
            <MicOff className="h-4 w-4" />
          ) : (
            <Mic className="h-4 w-4" />
          )}
        </Button>
      </div>

      {(isListening || error) && (
        <p
          className={cn(
            'text-xs',
            error ? 'text-destructive' : 'text-muted-foreground',
          )}
          role="status"
          aria-live="polite"
        >
          {error ?? 'Listening... speak a name, role, or department.'}
        </p>
      )}
    </div>
  )
}