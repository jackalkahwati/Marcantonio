import { NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@sendinblue/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact administrator.' },
        { status: 500 }
      );
    }

    if (process.env.BREVO_API_KEY === 'your_brevo_api_key_here') {
      console.error('BREVO_API_KEY is not properly configured - still using placeholder value');
      return NextResponse.json(
        { error: 'Email service not properly configured. Please contact administrator.' },
        { status: 500 }
      );
    }

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.subject = `Marcantonio Global: New Inquiry from ${name}`;
    sendSmtpEmail.htmlContent = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;
    sendSmtpEmail.sender = { name: "Website Contact Form", email: "noreply@marcantonioglobal.com" };
    sendSmtpEmail.to = [{ email: "nino@marcantonioglobal.com", name: "Nino Marcantonio" }];
    sendSmtpEmail.replyTo = { email: email, name: name };

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('Unauthorized')) {
        return NextResponse.json(
          { error: 'Email service authentication failed. Please contact administrator.' },
          { status: 500 }
        );
      }
      if (error.message.includes('Invalid sender email')) {
        return NextResponse.json(
          { error: 'Email service configuration error. Please contact administrator.' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
