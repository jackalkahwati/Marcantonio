import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Create a Stripe Checkout session if keys and price IDs are available; otherwise fallback to faux checkout

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({})) as { plan?: 'silver' | 'gold' }
    if (!body.plan) return NextResponse.json({ error: 'plan required' }, { status: 400 })

    const sk = process.env.STRIPE_SECRET_KEY
    const priceId = body.plan === 'silver' ? process.env.STRIPE_PRICE_SILVER : process.env.STRIPE_PRICE_GOLD
    const successUrl = (process.env.NEXT_PUBLIC_SITE_URL || '') + `/checkout/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = (process.env.NEXT_PUBLIC_SITE_URL || '') + '/pricing?canceled=1'

    if (sk && priceId) {
      const stripe = new Stripe(sk)
      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: successUrl,
        cancel_url: cancelUrl,
      })
      return NextResponse.json({ url: session.url })
    }

    // Fallback: simulate success by setting entitlements
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/entitlements`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan: body.plan })
    })
    if (!res.ok) return NextResponse.json({ error: 'failed to set entitlements' }, { status: 500 })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'server error' }, { status: 500 })
  }
}


