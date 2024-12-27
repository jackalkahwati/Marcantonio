import { NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@sendinblue/client';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

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

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.subject = `New Contact Form Submission from ${name}`;
    sendSmtpEmail.htmlContent = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;
    sendSmtpEmail.sender = { name: "Website Contact Form", email: "noreply@marcantonioglobal.com" };
    sendSmtpEmail.to = [{ email: "nino@marcantonioglobal.com", name: "Nino Marcantonio" }];
    sendSmtpEmail.replyTo = { email: email, name: name };

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
