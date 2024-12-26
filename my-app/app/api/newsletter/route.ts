import { NextResponse } from 'next/server'
import * as SibApiV3Sdk from '@getbrevo/brevo'
import { headers } from 'next/headers'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const ADMIN_EMAIL = 'nino@marcantonioglobal.com'

// Simple in-memory rate limiting
const RATE_LIMIT_DURATION = 3600000 // 1 hour in milliseconds
const MAX_REQUESTS = 5 // Maximum requests per IP per hour
const ipRequests = new Map<string, { count: number; timestamp: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const requestData = ipRequests.get(ip)

  if (!requestData) {
    ipRequests.set(ip, { count: 1, timestamp: now })
    return false
  }

  if (now - requestData.timestamp > RATE_LIMIT_DURATION) {
    ipRequests.set(ip, { count: 1, timestamp: now })
    return false
  }

  if (requestData.count >= MAX_REQUESTS) {
    return true
  }

  requestData.count++
  return false
}

export async function POST(request: Request) {
  // Get client IP
  const headersList = headers()
  const forwardedFor = headersList.get('x-forwarded-for')
  const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'

  // Check rate limit
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  if (!BREVO_API_KEY) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()
    const { email } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Initialize Brevo API client
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
    apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, BREVO_API_KEY)

    // Send confirmation email to subscriber
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
    sendSmtpEmail.subject = 'Welcome to Marcantonio Global Newsletter'
    sendSmtpEmail.htmlContent = `
      <h1 style="color: #1a2e44; font-size: 24px; margin-bottom: 20px;">Thank you for subscribing!</h1>
      <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">You've successfully subscribed to the Marcantonio Global Defense Tech Newsletter.</p>
      <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">You'll receive our next newsletter with the latest insights in defense technology and innovation.</p>
    `
    sendSmtpEmail.sender = { name: 'Marcantonio Global', email: ADMIN_EMAIL }
    sendSmtpEmail.to = [{ email }]

    await apiInstance.sendTransacEmail(sendSmtpEmail)

    // Send notification to admin
    const adminNotification = new SibApiV3Sdk.SendSmtpEmail()
    adminNotification.subject = 'New Newsletter Subscription'
    adminNotification.htmlContent = `
      <h1 style="color: #1a2e44; font-size: 24px; margin-bottom: 20px;">New Newsletter Subscriber</h1>
      <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">Email: ${email}</p>
      <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">Date: ${new Date().toLocaleString()}</p>
    `
    adminNotification.sender = { name: 'Marcantonio Global', email: ADMIN_EMAIL }
    adminNotification.to = [{ email: ADMIN_EMAIL }]

    await apiInstance.sendTransacEmail(adminNotification)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    )
  }
} 