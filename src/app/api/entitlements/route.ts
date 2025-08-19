import { NextResponse } from 'next/server'

// Placeholder entitlements endpoint. In production, verify Stripe session and set a cookie/JWT.

export async function GET() {
  const res = NextResponse.json({ plan: 'free' })
  return res
}


