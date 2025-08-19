'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

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
  windows: Array<{
    id: string;
    label: string;
    count: number;
    windowEnds: string;
    note?: string;
    tags?: string[];
    timeline?: Array<{ label: string; offsetDays: number }>
  }>
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
  const Milestones = useMemo(() => dynamic(() => import('./Milestones'), { ssr: false }), [])
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
  const [partners, setPartners] = useState<Array<{ name: string; website?: string; tags?: string[]; notes?: string }>>([])
  const [plan, setPlan] = useState<'free' | 'silver' | 'gold'>('free')
  const [enhanced, setEnhanced] = useState(false)
  const [llm, setLlm] = useState<any>(null)

  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  useEffect(() => {
    if (!enhanced || llm) return
    ;(async () => {
      try {
        const webllm = await import('@mlc-ai/web-llm')
        const engine = await (webllm as any).CreateMLCEngine({ model: 'Qwen2.5-1.5B-Instruct-q4f16_1-MLC' })
        setLlm(engine)
      } catch {}
    })()
  }, [enhanced, llm])

  useEffect(() => {
    // Load configs
    Promise.all([
      fetch('/chatbot/config/services.json').then(r => r.json()),
      fetch('/chatbot/config/readiness-weights.json').then(r => r.json()),
      fetch('/chatbot/config/opportunities.json').then(r => r.json()),
      fetch('/search-index.json').then(r => r.ok ? r.json() : { pages: [] }),
      fetch('/chatbot/config/partners.json').then(r => r.ok ? r.json() : []),
      fetch('/api/entitlements', { cache: 'no-store' }).then(r => r.ok ? r.json() : { plan: 'free' }),
    ]).then(([s, w, o, si, p, ent]) => {
      setServices(s)
      setWeights(w)
      setOpps(o)
      setSearchIndex(si)
      setPartners(p)
      if (ent?.plan === 'silver' || ent?.plan === 'gold') setPlan(ent.plan)
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
  const [asked, setAsked] = useState<Set<string>>(new Set())
  const [answers, setAnswers] = useState<{ [k: string]: string }>({})
  const fallbackQuestions = [
    'What problem are you solving and for whom in defense or space?',
    'What outcome would make this engagement a win in the next 90 days?',
    'What can you demonstrate today (capabilities, TRL, key evidence)?',
    'Which missions or programs are the best fit?',
    'What compliance/security have you met or planned (ATO path, ITAR/EAR, CMMC)?',
    'What past performance or pilots best map to defense use?',
    'Do you have partners/advisors that strengthen your bid?'
  ]

  function updateAnswers(userText: string) {
    const t = userText.toLowerCase()
    const next = { ...answers }
    if (/(trl\s*\d|trl\s*[1-9])/.test(t)) next.trl = t
    if (/ota|contract\b|award\b/.test(t)) next.outcome = 'ota'
    if (/sda|space\s*force|victus/.test(t)) next.mission = 'sda'
    if (/mda|missile defense/.test(t)) next.mission = 'mda'
    if (/cmmc|itar|ear|ato|il5|il6/.test(t)) next.compliance = t
    if (/advisor|prime|lockheed|boeing|bae|partner/.test(t)) next.partners = t
    if (/sbir|sttr|baa/.test(t)) next.opps = t
    setAnswers(next)
  }

  function pickNextQuestion(): { key: string; text: string } | null {
    if (enhanced && llm) {
      const history = messages.map(m => `${m.role === 'assistant' ? 'Assistant' : 'User'}: ${m.content}`).join('\n')
      const prompt = `You are a defense-focused intake assistant. Ask the SINGLE best next question in one sentence. Keep it concise and relevant.\n${history}\nNext question:`
      // fire-and-forget; we will fall back to rules if it fails
      try {
        llm.chatCompletion([{ role: 'system', content: 'Defense UX. Concise. No sensitive data.' }, { role: 'user', content: prompt }]).then((out: any) => {
          const q = String(out?.choices?.[0]?.message?.content || '').trim()
          if (q && !asked.has(q) && asked.size < 7) {
            const nextAsked = new Set(asked); nextAsked.add(q); setAsked(nextAsked)
            setMessages(prev => [...prev, { role: 'assistant', content: q }])
          }
        })
        return null
      } catch {}
    }
    if (answers.outcome === 'ota' && !asked.has('ota_sponsor')) return { key: 'ota_sponsor', text: 'For an OTA, do you have a government sponsor or customer identified?' }
    if (answers.mission === 'sda' && !asked.has('sda_fit')) return { key: 'sda_fit', text: 'Which SDA lines of effort fit best (e.g., tracking, transport, custody)?' }
    if (answers.mission === 'mda' && !asked.has('mda_fit')) return { key: 'mda_fit', text: 'For MDA, which program or mission thread are you targeting?' }
    if (answers.trl && !asked.has('trl_follow')) return { key: 'trl_follow', text: /trl\s*(7|8|9)/.test(answers.trl) ? 'What operational environments have you validated in (relevant vs operational)?' : 'What are the top technical risks you are de‑risking next quarter?' }
    if (answers.compliance && !asked.has('compliance_follow')) return { key: 'compliance_follow', text: 'What is your ATO path and hosting posture (IL5/IL6, enclave, sponsor)?' }
    if (answers.partners && !asked.has('partners_follow')) return { key: 'partners_follow', text: 'Name any primes/advisors you can leverage, and any gaps we should help fill.' }
    for (const q of fallbackQuestions) {
      if (!asked.has(q)) return { key: q, text: q }
    }
    return null
  }

  function scoreReadiness(): number {
    const keys = ['outcome','trl','mission','compliance','partners','opps']
    let count = keys.reduce((acc, k) => acc + (answers[k] ? 1 : 0), 0)
    const ratio = count / keys.length
    let score = 40 + Math.round(ratio * 50) // 40–90
    // Penalties for unknown/none/? and no OTA sponsor
    const userText = buildUserContext().toLowerCase()
    const unknownHits = (userText.match(/\b(unknown|none|\?)\b/g) || []).length
    score -= Math.min(unknownHits * 5, 15)
    if (answers.outcome === 'ota' && !/\byes\b/.test(answers.sponsor || '')) score -= 10
    if (/trl\s*(1|2|3|4|5|6)\b/.test(userText)) score -= 5
    return Math.max(20, Math.min(95, score))
  }

  function buildAssessment(): string {
    const score = scoreReadiness()
    const level = !weights ? 'Moderate' : score >= weights.thresholds.high ? 'High' : score >= weights.thresholds.medium ? 'Moderate' : 'Early'
    const oppLines = (opps?.windows || []).map(w => `- ${w.label}: ${w.count} (ends ${w.windowEnds})`)
    const partnerHints = partners.slice(0, 2).map(p => p.name)
    const lines: string[] = []
    lines.push('Rapid Capability Assessment')
    lines.push(`- Readiness Score: ${score} (${level})`)
    if (oppLines.length) {
      lines.push('- Upcoming Windows:')
      lines.push(...oppLines.map(l => `  ${l}`))
    }
    if (plan !== 'free') {
      lines.push('- Milestones:')
      lines.push('  1) Advisor lined up')
      lines.push('  2) Prime/teaming identified')
      lines.push('  3) Compliance docs prepped (CMMC/ATO)')
      lines.push('  4) Draft technical volume')
    }
    lines.push('- Next Steps:')
    lines.push('  • Strengthen advisor credibility')
    lines.push('  • Identify a prime/partner aligned to mission')
    lines.push('  • Align with target stakeholders and deadlines')
    if (partnerHints.length) {
      lines.push(`- Potential Partners: ${partnerHints.join(', ')}`)
    }
    lines.push(`- ${SAFE_DISCLAIMER}`)
    return lines.join('\n')
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

  // Disable snippet generation to avoid code-like fragments in chat output
  function buildCitationSnippets(): string[] { return [] }

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
      // Dynamic question flow
      updateAnswers(userMsg.content)
      const nextQ = pickNextQuestion()
      if (nextQ && asked.size < 7) {
        const nextAsked = new Set(asked)
        nextAsked.add(nextQ.key)
        setAsked(nextAsked)
        setMessages(prev => [...prev, { role: 'assistant', content: nextQ.text }])
      } else {
        const assessment = buildAssessment()
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: assessment }
        ])
        setAssessmentReady(true)
        // Optionally, reset cycle for follow-up
        setQIndex(0); setAsked(new Set()); setAnswers({})
        if (plan === 'free') {
          // Prompt upgrade right after assessment for free plan
          setShowUpgrade(true)
          setMessages(prev => [
            ...prev,
            { role: 'assistant', content: 'Unlock Silver/Gold for tailored opportunities, live signals, milestone tracker, and proposal templates. See /pricing or contact us.' }
          ])
        } else {
          // Show a simple tailored opportunities list
          const userText = buildUserContext().toLowerCase()
          const tags = [] as string[]
          if (userText.includes('victus') || userText.includes('sda')) tags.push('sda', 'victus-haze', 'space')
          if (userText.includes('cmmc') || userText.includes('il5') || userText.includes('il6')) tags.push('ota', 'sponsor')
          const tailored = ((opps?.windows || []) as any[]).filter(w => !Array.isArray(w.tags) || w.tags.some((t: string) => tags.includes(t)))
          if (tailored.length) {
            const lines = tailored.map(w => `- ${w.label}: ends ${w.windowEnds}`)
            setMessages(prev => [
              ...prev,
              { role: 'assistant', content: 'Tailored opportunities:' },
              { role: 'assistant', content: lines.join('\n') }
            ])
          }
          // Live external signals (no-keys): news and awards
          try {
            const r = await fetch(`/api/signals?tags=${encodeURIComponent(tags.join(','))}`, { cache: 'no-store' })
            const d = await r.json()
            if (Array.isArray(d?.items) && d.items.length) {
              const top = d.items.slice(0, 5).map((it: any) => `- [${it.source}] ${it.title}`)
              setMessages(prev => [
                ...prev,
                { role: 'assistant', content: 'Live signals:' },
                { role: 'assistant', content: top.join('\n') }
              ])
            }
          } catch {}
          // Add milestone tracker hint
          setMessages(prev => [
            ...prev,
            { role: 'assistant', content: 'Milestone tracker: mark progress on advisors, teaming, compliance, and draft volumes to increase readiness.' }
          ])
          // Proposal template download
          setMessages(prev => [
            ...prev,
            { role: 'assistant', content: 'Download a proposal outline template: /chatbot/templates/proposal-outline.md' }
          ])
          // Priority introduction CTA
          setMessages(prev => [
            ...prev,
            { role: 'assistant', content: 'Request a priority introduction: send company, target, and email to /api/introductions (POST JSON) or contact us via /about/contact.' }
          ])
          // Visual milestone tracker will render inline below
        }
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
        className="fixed bottom-6 right-4 sm:right-6 z-50 rounded-full bg-blue-600 text-white shadow-lg px-4 py-3 hover:bg-blue-700"
        style={{ right: 'calc(env(safe-area-inset-right, 0px) + 1rem)' }}
      >
        {open ? 'Close' : 'Chat'}
      </button>

      {open && (
        <div
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[min(90vw,24rem)] sm:w-[24rem] rounded-xl border border-gray-200 bg-white shadow-xl flex flex-col overflow-hidden max-h-[80vh]"
          style={{ right: 'calc(env(safe-area-inset-right, 0px) + 1rem)' }}
        >
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
            {plan !== 'free' && (
              <div className="my-3">
                <Milestones items={[
                  { label: 'Advisor identified', done: true },
                  { label: 'Prime/teaming partner engaged' },
                  { label: 'Compliance docs prepared (CMMC/ATO)' },
                  { label: 'Draft technical volume' }
                ]} />
              </div>
            )}
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
          <div className="px-3 py-3 border-t flex items-center gap-2 flex-wrap pb-[env(safe-area-inset-bottom,0px)]">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your answer…"
              className="flex-1 min-w-0 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="shrink-0 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
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
                className="shrink-0 px-3 py-2 rounded-lg border text-sm"
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


