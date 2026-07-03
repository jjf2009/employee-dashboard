export async function askAnnouncementAssistant(message: string): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  })

  if (!response.ok) {
    const error = (await response.json().catch(() => null)) as { error?: string } | null
    throw new Error(error?.error ?? 'Failed to get a response from the assistant.')
  }

  const data = (await response.json()) as { reply: string }
  return data.reply
}