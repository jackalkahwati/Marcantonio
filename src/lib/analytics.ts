'use client'

export type AnalyticsPayload = {
  name: string
  meta?: Record<string, any>
}

export async function track(event: AnalyticsPayload) {
  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...event, ts: Date.now() }),
      keepalive: true,
    })
  } catch {
    // swallow
  }
}


