import { NextResponse } from 'next/server'

// Minimal real-time opportunities endpoint (placeholder/scraper-free)
// Reads static config and returns it; ready to be extended with external sources (e.g., SAM.gov API).

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/chatbot/config/opportunities.json`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to load config')
    const data = await res.json()
    return NextResponse.json({ ok: true, data })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Failed to retrieve opportunities' }, { status: 500 })
  }
}


