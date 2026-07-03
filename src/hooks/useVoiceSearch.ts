import { useCallback, useEffect, useRef, useState } from 'react'

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string
  message: string
}

interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start: () => void
  stop: () => void
  abort: () => void
  onstart: (() => void) | null
  onend: (() => void) | null
  onresult: ((event: SpeechRecognitionEvent) => void) | null
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance

function getSpeechRecognition(): SpeechRecognitionConstructor | null {
  const win = window as Window & {
    SpeechRecognition?: SpeechRecognitionConstructor
    webkitSpeechRecognition?: SpeechRecognitionConstructor
  }

  return win.SpeechRecognition ?? win.webkitSpeechRecognition ?? null
}

function getErrorMessage(error: string): string {
  switch (error) {
    case 'not-allowed':
    case 'service-not-allowed':
      return 'Microphone permission denied.'
    case 'no-speech':
      return 'No speech detected. Try again.'
    case 'audio-capture':
      return 'No microphone found.'
    case 'network':
      return 'Network error. Check your connection.'
    default:
      return 'Voice search failed. Try again.'
  }
}

interface UseVoiceSearchOptions {
  onResult: (transcript: string) => void
  lang?: string
}

export function useVoiceSearch({ onResult, lang = 'en-US' }: UseVoiceSearchOptions) {
  const [isListening, setIsListening] = useState(false)
  const [isSupported] = useState(() => getSpeechRecognition() !== null)
  const [error, setError] = useState<string | null>(null)
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null)

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop()
    setIsListening(false)
  }, [])

  const startListening = useCallback(() => {
    const SpeechRecognitionAPI = getSpeechRecognition()

    if (!SpeechRecognitionAPI) {
      setError('Voice search is not supported in this browser.')
      return
    }

    setError(null)

    if (isListening) {
      console.log(true)
      stopListening()
      return
    }

    const recognition = new SpeechRecognitionAPI()
    recognition.continuous = false
    recognition.interimResults = true
    recognition.lang = lang

    recognition.onstart = () => setIsListening(true)

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0]?.transcript ?? '')
        .join('')
        .trim()
        console.log(transcript)

      if (transcript) {
        onResult(transcript)
      }
    }

    recognition.onerror = (event) => {
      setError(getErrorMessage(event.error))
      setIsListening(false)
    }

    recognition.onend = () => setIsListening(false)

    recognitionRef.current = recognition

    try {
      recognition.start()
    } catch {
      setError('Voice search is already active.')
      setIsListening(false)
    }
  }, [isListening, lang, onResult, stopListening])

  useEffect(() => {
    return () => {
      recognitionRef.current?.abort()
    }
  }, [])

  return {
    isListening,
    isSupported,
    error,
    startListening,
    stopListening,
  }
}