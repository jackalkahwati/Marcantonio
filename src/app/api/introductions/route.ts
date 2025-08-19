import { NextResponse } from 'next/server'
import * as SibApiV3Sdk from '@sendinblue/client'

// Priority introductions request

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { company, domain, target, notes, email } = body || {}

    if (!company || !target || !email) {
      return NextResponse.json({ error: 'company, target, and email are required' }, { status: 400 })
    }
    if (!process.env.BREVO_API_KEY) {
      return NextResponse.json({ error: 'Service unavailable' }, { status: 503 })
    }

    const api = new SibApiV3Sdk.TransactionalEmailsApi()
    api.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY)

    const send = new SibApiV3Sdk.SendSmtpEmail()
    send.subject = `Priority Introduction Request: ${company}`
    send.htmlContent = `
      <h3>Priority Introductions Request</h3>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Domain/Capability:</strong> ${domain || 'N/A'}</p>
      <p><strong>Targets:</strong> ${target}</p>
      <p><strong>Notes:</strong><br/>${(notes || '').replace(/\n/g, '<br>')}</p>
      <p><strong>Requester Email:</strong> ${email}</p>
    `
    send.sender = { name: 'Chatbot Introductions', email: 'noreply@marcantonioglobal.com' }
    send.to = [{ email: 'nino@marcantonioglobal.com', name: 'Nino Marcantonio' }]
    send.replyTo = { email, name: company }

    await api.sendTransacEmail(send)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}


