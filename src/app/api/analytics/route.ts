import { NextResponse } from 'next/server'

type AnalyticsEvent = {
  name: string
  meta?: Record<string, any>
  ts?: number
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AnalyticsEvent | AnalyticsEvent[]
    const events = Array.isArray(body) ? body : [body]
    // For now, just log to server console. In production, forward to your analytics system.
    console.log('[analytics]', events)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}


