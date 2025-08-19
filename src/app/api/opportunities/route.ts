import { NextResponse } from 'next/server'

// Real-time opportunities: serve static config and optionally merge with SAM.gov when API key is set

export async function GET() {
  try {
    const baseRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/chatbot/config/opportunities.json`, { cache: 'no-store' })
    const base = baseRes.ok ? await baseRes.json() : { windows: [] }

    const samKey = process.env.SAM_API_KEY
    if (!samKey) {
      return NextResponse.json({ ok: true, data: base })
    }

    // Placeholder sample merge: in production, query SAM.gov for matching NAICS/keywords
    const live = [] as any[]
    const merged = { ...base, live }
    return NextResponse.json({ ok: true, data: merged })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Failed to retrieve opportunities' }, { status: 500 })
  }
}


