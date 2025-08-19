import { NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@sendinblue/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      console.log('Contact API: Missing required fields');
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    if (!process.env.BREVO_API_KEY) {
      return NextResponse.json({ error: 'Email service unavailable' }, { status: 503 });
    }

    // Simplify the email sending to isolate the issue
    try {
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
      sendSmtpEmail.sender = { name: "Marcantonio Global Contact Form", email: "jack@lattis.io" };
      sendSmtpEmail.to = [{ email: "nino@marcantonioglobal.com", name: "Nino Marcantonio" }];
      sendSmtpEmail.replyTo = { email: email, name: name };
      
      const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

      return NextResponse.json({ success: true, message: 'Email sent successfully' });
      
    } catch (emailError: any) {
      // Extract high-level error information
      let errorMessage = 'Unknown error';
      let isIPRestriction = false;
      
      if (emailError?.response?.body?.message) {
        errorMessage = emailError.response.body.message;
        // Check if this is an IP restriction error
        if (errorMessage.includes('unrecognised IP address') || errorMessage.includes('authorised_ips')) {
          isIPRestriction = true;
        }
      } else if (emailError?.message) {
        errorMessage = emailError.message;
        if (errorMessage.includes('unrecognised IP address') || errorMessage.includes('authorised_ips')) {
          isIPRestriction = true;
        }
      } else if (emailError?.response?.statusText) {
        errorMessage = `HTTP ${emailError.response.status}: ${emailError.response.statusText}`;
      }
      
      // If it's an IP restriction error, provide clearer guidance
      if (isIPRestriction) {
        errorMessage = 'Email service configuration error: Server IP address needs authorization.';
      }
      return NextResponse.json({ error: 'Email service error: ' + errorMessage }, { status: 500 });
    }

  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
