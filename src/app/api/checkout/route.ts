import { NextResponse } from 'next/server'

// Placeholder endpoint to simulate checkout success; in production, create Stripe Checkout session
// and verify via webhook to set entitlements. For now, directly accept plan and set cookie via /api/entitlements.

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({})) as { plan?: 'silver' | 'gold' }
    if (!body.plan) return NextResponse.json({ error: 'plan required' }, { status: 400 })
    // Simulate success by calling our entitlements POST
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/entitlements`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan: body.plan })
    })
    if (!res.ok) return NextResponse.json({ error: 'failed to set entitlements' }, { status: 500 })
    return NextResponse.json({ ok: true, plan: body.plan })
  } catch {
    return NextResponse.json({ error: 'server error' }, { status: 500 })
  }
}


