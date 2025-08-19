import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const sk = process.env.STRIPE_SECRET_KEY
  if (!secret || !sk) return new NextResponse('not configured', { status: 503 })

  const buf = Buffer.from(await request.arrayBuffer())
  const sig = request.headers.get('stripe-signature') || ''
  const stripe = new Stripe(sk)

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(buf, sig, secret)
  } catch (err) {
    return new NextResponse('invalid', { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const priceId = session.line_items?.data?.[0]?.price?.id || (session as any).metadata?.price_id
    let plan: 'silver' | 'gold' | 'free' = 'free'
    if (priceId && priceId === process.env.STRIPE_PRICE_SILVER) plan = 'silver'
    if (priceId && priceId === process.env.STRIPE_PRICE_GOLD) plan = 'gold'
    // Webhooks cannot set cookies directly in the browser; typically update DB.
    // We return the plan so client-side success page can fetch it if needed.
    return NextResponse.json({ ok: true, plan })
  }

  return NextResponse.json({ ok: true })
}


