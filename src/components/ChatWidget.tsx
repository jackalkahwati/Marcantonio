'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'

type Message = { role: 'assistant' | 'user'; content: string }

type ServicesConfig = {
  tiers: Array<{ id: string; name: string; price?: number; features: string[]; limits?: { messages?: number } }>
}

type ReadinessWeights = {
  weights: Record<string, number>
  thresholds: { high: number; medium: number }
}

type Opportunities = {
  lastUpdated: string
  windows: Array<{ id: string; label: string; count: number; windowEnds: string; note?: string }>
}

const SAFE_DISCLAIMER = 'Do not share sensitive or classified information.'
const SENSITIVE_TERMS = [
  'classified', 'secret', 'sci', 'ts/sci', 'noform', 'no forns', 'sap', 'special access program',
  'export controlled', 'itar violation', 'ear violation', 'leak', 'unclassified controlled', 'ucmi',
  'unauthorized disclosure', 'spill'
]
const HIGH_INTENT_TERMS = [
  'budget', 'funding', 'pilot', 'poc', 'proof of concept', 'sbir', 'sttr', 'baa', 'ota', 'program of record',
  'contract', 'award', 'rfi', 'rfp', 'deadline', 'timeline', 'schedule'
]

type SearchPage = { route: string; text: string }
type SearchIndex = { pages: SearchPage[] }

export default function ChatWidget() {
  const [open, setOpen] = useState(true)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I’m the Marcantonio assistant. I’ll ask a few questions to create a Rapid Capability Assessment.' },
    { role: 'assistant', content: 'What problem are you solving and for whom in defense or space?' }
  ])

  const [services, setServices] = useState<ServicesConfig | null>(null)
  const [weights, setWeights] = useState<ReadinessWeights | null>(null)
  const [opps, setOpps] = useState<Opportunities | null>(null)
  const [usedMessages, setUsedMessages] = useState(0)
  const [searchIndex, setSearchIndex] = useState<SearchIndex | null>(null)
  const [assessmentReady, setAssessmentReady] = useState(false)
  const [showUpgrade, setShowUpgrade] = useState(false)

  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  useEffect(() => {
    // Load configs
    Promise.all([
      fetch('/chatbot/config/services.json').then(r => r.json()),
      fetch('/chatbot/config/readiness-weights.json').then(r => r.json()),
      fetch('/chatbot/config/opportunities.json').then(r => r.json()),
      fetch('/search-index.json').then(r => r.ok ? r.json() : { pages: [] }),
    ]).then(([s, w, o, si]) => {
      setServices(s)
      setWeights(w)
      setOpps(o)
      setSearchIndex(si)
    }).catch(() => {})
  }, [])

  const freeLimit = useMemo(() => {
    const free = services?.tiers.find(t => t.id === 'free')
    return free?.limits?.messages ?? 10
  }, [services])

  const questions = useMemo(
    () => [
      'What problem are you solving and for whom in defense or space?',
      'What outcome would make this engagement a win in the next 90 days?',
      'What can you demonstrate today (capabilities, TRL, key evidence)?',
      'Which missions or programs are the best fit?',
      'What compliance/security have you met or planned (ATO path, ITAR/EAR, CMMC)?',
      'What past performance or pilots best map to defense use?',
      'Do you have partners/advisors that strengthen your bid?'
    ],
    []
  )

  const [qIndex, setQIndex] = useState(0)

  function scoreReadiness(): number {
    if (!weights) return 50
    // Very simple heuristic: distribute user answers count over weights to produce a coarse score
    const answered = messages.filter(m => m.role === 'user').length
    const base = Math.min(answered / questions.length, 1)
    const weightSum = Object.values(weights.weights).reduce((a, b) => a + b, 0)
    const weighted = base * (weightSum > 0 ? 100 : 100)
    return Math.round(40 + weighted * 0.6) // 40–100
  }

  function buildAssessment(): string {
    const score = scoreReadiness()
    const level = !weights ? 'Moderate' : score >= weights.thresholds.high ? 'High' : score >= weights.thresholds.medium ? 'Moderate' : 'Early'
    const oppSummary = opps?.windows?.map(w => `${w.label}: ${w.count} (ends ${w.windowEnds})`).join(' | ')
    const citations = buildCitations()
    return [
      `Readiness Score: ${score} (${level})`,
      oppSummary ? `Upcoming windows: ${oppSummary}` : undefined,
      'Next steps: strengthen advisor credibility, identify a prime/partner, and align with target stakeholders.',
      citations.length ? `Sources:\n- ${citations.join('\n- ')}` : undefined,
      SAFE_DISCLAIMER
    ].filter(Boolean).join('\n')
  }

  function tokenize(text: string): string[] {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean)
  }

  function buildUserContext(): string {
    const userTexts = messages.filter(m => m.role === 'user').map(m => m.content).join(' ')
    return userTexts
  }

  function buildCitations(): string[] {
    if (!searchIndex || !searchIndex.pages?.length) return []
    const context = buildUserContext()
    if (!context) return []
    const tokens = new Set(tokenize(context))
    const scored = searchIndex.pages.map(p => {
      const ptokens = tokenize(p.text)
      let score = 0
      for (const t of ptokens) {
        if (tokens.has(t)) score += 1
      }
      return { route: p.route, score }
    }).filter(s => s.score > 0)
    scored.sort((a, b) => b.score - a.score)
    const top = scored.slice(0, 3).map(s => `${s.route}`)
    return top
  }

  function buildCitationSnippets(): string[] {
    if (!searchIndex || !searchIndex.pages?.length) return []
    const context = buildUserContext().toLowerCase()
    if (!context) return []
    const tokens = tokenize(context)
    const pages = searchIndex.pages
    const snippets: string[] = []
    for (const p of pages) {
      const lower = p.text.toLowerCase()
      let idx = -1
      for (const t of tokens) {
        idx = lower.indexOf(t)
        if (idx >= 0) break
      }
      if (idx >= 0) {
        const start = Math.max(0, idx - 140)
        const end = Math.min(p.text.length, idx + 140)
        const snippet = p.text.substring(start, end).replace(/\s+/g, ' ').trim()
        snippets.push(`${p.route} — “${snippet}”`)
      }
      if (snippets.length >= 2) break
    }
    return snippets
  }

  async function handleSend() {
    if (!input.trim()) return
    const userMsg: Message = { role: 'user', content: input.trim() }
    // Sensitive topic guard
    const lower = userMsg.content.toLowerCase()
    if (SENSITIVE_TERMS.some(k => lower.includes(k))) {
      setMessages(prev => [
        ...prev,
        userMsg,
        { role: 'assistant', content: 'I can’t assist with sensitive or classified topics. Please contact us through secure channels.' },
        { role: 'assistant', content: SAFE_DISCLAIMER }
      ])
      setInput('')
      return
    }

    setMessages(prev => [...prev, userMsg])
    setInput('')
    setUsedMessages(n => n + 1)

    // High-intent detection → prompt contact
    if (HIGH_INTENT_TERMS.some(k => lower.includes(k))) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'This looks high-priority. We can connect you with our team for tailored support.' },
        { role: 'assistant', content: 'You can reach out via /about/contact to accelerate next steps.' }
      ])
    }

    // Gate free usage
    const limit = freeLimit
    if (usedMessages + 1 >= limit) {
      const upsell = services?.tiers?.filter(t => t.id !== 'free').map(t => `${t.name}${t.price ? ` ($${t.price}/mo)` : ''}`).join(', ')
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'You have reached the free plan limit. Upgrade to unlock detailed assessments and tailored opportunity lists.' },
        { role: 'assistant', content: `Available plans: ${upsell}. View details at /pricing or contact us to customize.` },
        { role: 'assistant', content: SAFE_DISCLAIMER }
      ])
      setShowUpgrade(true)
      return
    }

    setLoading(true)
    try {
      // Simple deterministic bot: ask next question, or produce assessment after core questions
      const nextQIndex = qIndex + 1
      if (nextQIndex < questions.length) {
        const nextQ = questions[nextQIndex]
        setMessages(prev => [...prev, { role: 'assistant', content: nextQ }])
        setQIndex(nextQIndex)
      } else {
        const assessment = buildAssessment()
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: 'Thanks — here is your Rapid Capability Assessment summary:' },
          { role: 'assistant', content: assessment },
          ...buildCitationSnippets().map(s => ({ role: 'assistant' as const, content: s }))
        ])
        setAssessmentReady(true)
        // Optionally, reset cycle for follow-up
        setQIndex(0)
      }
    } finally {
      setLoading(false)
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <button
        aria-label="Open chat"
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 text-white shadow-lg px-4 py-3 hover:bg-blue-700"
      >
        {open ? 'Close' : 'Chat'}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 rounded-xl border border-gray-200 bg-white shadow-xl flex flex-col overflow-hidden max-h-[80vh]">
          <div className="px-4 py-3 border-b font-semibold">Marcantonio Assistant</div>
          <div className="flex-1 overflow-y-scroll px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm ${m.role === 'assistant' ? 'text-gray-800' : 'text-gray-900'}`}>
                <div className={`inline-block px-3 py-2 rounded-lg ${m.role === 'assistant' ? 'bg-gray-100' : 'bg-blue-600 text-white'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-sm text-gray-500">Thinking…</div>}
            <div ref={endRef} />
          </div>
          {showUpgrade && (
            <div className="px-3 py-2 border-t bg-yellow-50 text-sm flex items-center justify-between gap-2">
              <span>Upgrade for full access</span>
              <div className="flex gap-2">
                <Link href="/pricing" className="px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Pricing</Link>
                <Link href="/about/contact" className="px-3 py-1 rounded-lg border">Contact</Link>
              </div>
            </div>
          )}
          <div className="px-3 py-3 border-t flex items-center gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your answer…"
              className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              Send
            </button>
            {assessmentReady && (
              <button
                onClick={async () => {
                  try {
                    const { jsPDF } = await import('jspdf')
                    const doc = new jsPDF()
                    const lines = messages.map(m => `${m.role === 'assistant' ? 'Assistant' : 'You'}: ${m.content}`)
                    const text = lines.join('\n\n')
                    const chunked = doc.splitTextToSize(text, 180)
                    doc.text(chunked, 10, 10)
                    doc.save('RapidCapabilityAssessment.pdf')
                  } catch {
                    // noop
                  }
                }}
                className="px-3 py-2 rounded-lg border text-sm"
                title="Download assessment PDF"
              >
                PDF
              </button>
            )}
          </div>
          <div className="px-4 py-2 text-[11px] text-gray-500 border-t">
            {SAFE_DISCLAIMER}
          </div>
        </div>
      )}
    </>
  )
}


