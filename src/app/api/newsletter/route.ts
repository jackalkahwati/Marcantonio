import { NextResponse } from 'next/server'
import * as SibApiV3Sdk from '@sendinblue/client'

const apiInstance = new SibApiV3Sdk.ContactsApi()
apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY!)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const createContact = new SibApiV3Sdk.CreateContact()
    createContact.email = email
    createContact.listIds = [2] // Default list ID in Brevo
    createContact.updateEnabled = true

    const data = await apiInstance.createContact(createContact)

    // Also send a notification email to admin
    const emailApi = new SibApiV3Sdk.TransactionalEmailsApi()
    emailApi.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!)

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
    sendSmtpEmail.subject = 'New Newsletter Subscription'
    sendSmtpEmail.htmlContent = `
      <h3>New Newsletter Subscription</h3>
      <p>A new user has subscribed to the newsletter:</p>
      <p><strong>Email:</strong> ${email}</p>
    `
    sendSmtpEmail.sender = { name: "Website Newsletter", email: "noreply@marcantonioglobal.com" }
    sendSmtpEmail.to = [{ email: "nino@marcantonioglobal.com", name: "Nino Marcantonio" }]

    await emailApi.sendTransacEmail(sendSmtpEmail)

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    
    // Check if it's a duplicate contact error
    if (error.response?.body?.message?.includes('Contact already exist')) {
      return NextResponse.json(
        { error: 'You are already subscribed to our newsletter' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}
