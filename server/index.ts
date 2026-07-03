import express from 'express'
import { askGemini } from './gemini.ts'

const app = express()
const PORT = Number(process.env.PORT) || 3001

app.use(express.json())

app.post('/api/chat', async (req, res) => {
  const message = req.body?.message

  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'Message is required.' })
    return
  }

  try {
    const reply = await askGemini(message)
    res.json({ reply })
  } catch {
    res.status(500).json({ error: 'Failed to generate a response.' })
  }
})

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})