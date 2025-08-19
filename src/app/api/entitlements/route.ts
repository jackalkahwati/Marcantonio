import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

const COOKIE_NAME = 'entitlement_plan'
const VALID = new Set(['free', 'silver', 'gold'])

export async function GET() {
  const store = cookies()
  const plan = store.get(COOKIE_NAME)?.value || 'free'
  return NextResponse.json({ plan: VALID.has(plan) ? plan : 'free' })
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({})) as { plan?: string }
    const nextPlan = (body.plan || 'free').toLowerCase()
    if (!VALID.has(nextPlan)) {
      return NextResponse.json({ ok: false, error: 'invalid plan' }, { status: 400 })
    }
    const res = NextResponse.json({ ok: true, plan: nextPlan })
    res.cookies.set(COOKIE_NAME, nextPlan, { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 30 })
    return res
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}


