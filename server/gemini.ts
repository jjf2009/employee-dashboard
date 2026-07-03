import { announcements, type Announcement } from '../src/data/announcements.ts'

function buildAnnouncementsContext(): string {
  return announcements
    .map(
      (item) =>
        `- [${item.date} ${item.time}] ${item.title} (${item.category}) by ${item.author}: ${item.description}`,
    )
    .join('\n')
}

function filterRelevantAnnouncements(
  message: string,
  items: Announcement[],
): Announcement[] {
  const query = message.toLowerCase()

  const keywords: Record<string, string[]> = {
    leave: ['leave', 'vacation', 'pto'],
    wfh: ['wfh', 'work from home', 'remote'],
    holiday: ['holiday', 'closure', 'closed'],
    hr: ['hr', 'benefits', 'enrollment'],
    today: ['today'],
    yesterday: ['yesterday'],
    week: ['week', 'this week'],
  }

  const matchedKeys = Object.entries(keywords)
    .filter(([, terms]) => terms.some((term) => query.includes(term)))
    .map(([key]) => key)

  if (matchedKeys.length === 0) {
    return items
  }

  return items.filter((item) => {
    const text =
      `${item.title} ${item.description} ${item.category} ${item.author} ${item.date}`.toLowerCase()

    if (matchedKeys.includes('leave') && text.includes('leave')) return true
    if (matchedKeys.includes('wfh') && (text.includes('wfh') || text.includes('remote')))
      return true
    if (matchedKeys.includes('holiday') && text.includes('holiday')) return true
    if (matchedKeys.includes('hr') && (item.author === 'HR' || item.category === 'HR Update'))
      return true
    if (matchedKeys.includes('today') && item.date === '2026-07-02') return true
    if (matchedKeys.includes('yesterday') && item.date === '2026-07-01') return true
    if (matchedKeys.includes('week')) {
      const itemDate = new Date(item.date)
      const weekAgo = new Date('2026-07-02')
      weekAgo.setDate(weekAgo.getDate() - 7)
      return itemDate >= weekAgo
    }

    return false
  })
}

function fallbackAnswer(message: string): string {
  const relevant = filterRelevantAnnouncements(message, announcements)

  if (relevant.length === 0) {
    return 'I could not find announcements matching your question. Try asking about leave policy, WFH, holidays, or recent updates.'
  }

  const summary = relevant
    .slice(0, 4)
    .map(
      (item) =>
        `• **${item.title}** (${item.category}, ${item.date}): ${item.description}`,
    )
    .join('\n\n')

  return `Here is what I found in recent announcements:\n\n${summary}`
}

async function callGeminiApi(message: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    return fallbackAnswer(message)
  }

  const context = buildAnnouncementsContext()
  const prompt = `You are an internal HR assistant for PulseHR. Answer ONLY using the company announcements below. If the answer is not in the announcements, say you do not have that information. Keep answers concise and helpful.

Company Announcements:
${context}

Employee question: ${message}`

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    },
  )

  if (!response.ok) {
    return fallbackAnswer(message)
  }

  const data = (await response.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>
  }

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

  if (!text) {
    return fallbackAnswer(message)
  }

  return text
}

export async function askGemini(message: string): Promise<string> {
  return callGeminiApi(message.trim())
}