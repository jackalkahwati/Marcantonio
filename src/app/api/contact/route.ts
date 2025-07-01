import { NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@sendinblue/client';

export async function POST(request: Request) {
  // Force deployment trigger - testing production environment
  console.log('Contact API: Received POST request');
  
  try {
    const body = await request.json();
    console.log('Contact API: Request body:', body);
    
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      console.log('Contact API: Missing required fields');
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    // Enhanced debugging - Check if API key is configured
    const hasApiKey = !!process.env.BREVO_API_KEY;
    const apiKeyLength = process.env.BREVO_API_KEY?.length || 0;
    const apiKeyPrefix = process.env.BREVO_API_KEY?.substring(0, 15) || 'missing';
    
    console.log('Contact API: Environment check:', {
      hasApiKey,
      apiKeyLength,
      apiKeyPrefix,
      nodeEnv: process.env.NODE_ENV
    });

    if (!process.env.BREVO_API_KEY) {
      console.error('Contact API: BREVO_API_KEY environment variable is not set');
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please contact administrator.',
          debug: { hasApiKey, apiKeyLength, apiKeyPrefix, nodeEnv: process.env.NODE_ENV }
        },
        { status: 500 }
      );
    }

    if (process.env.BREVO_API_KEY === 'your_brevo_api_key_here') {
      console.error('Contact API: BREVO_API_KEY is not properly configured - still using placeholder value');
      return NextResponse.json(
        { 
          error: 'Email service not properly configured. Please contact administrator.',
          debug: { hasApiKey, apiKeyLength, apiKeyPrefix, nodeEnv: process.env.NODE_ENV }
        },
        { status: 500 }
      );
    }

    console.log('Contact API: API key configured, attempting to send email');

    // Simplify the email sending to isolate the issue
    try {
      const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
      console.log('Contact API: API instance created');
      
      apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);
      console.log('Contact API: API key set');

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
      sendSmtpEmail.sender = { name: "Marcantonio Global", email: "no-reply@brevo.com" };
      sendSmtpEmail.to = [{ email: "nino@marcantonioglobal.com", name: "Nino Marcantonio" }];
      sendSmtpEmail.replyTo = { email: email, name: name };
      
      console.log('Contact API: Email object prepared, sending...');
      
      const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log('Contact API: Email sent successfully, response:', data);

      return NextResponse.json({ success: true, message: 'Email sent successfully' });
      
    } catch (emailError) {
      console.error('Contact API: Brevo email error:', emailError);
      console.error('Contact API: Email error details:', {
        message: emailError instanceof Error ? emailError.message : 'Unknown error',
        stack: emailError instanceof Error ? emailError.stack : undefined,
        error: emailError
      });
      
      // Return more detailed error information for debugging
      const errorDetails = {
        message: emailError instanceof Error ? emailError.message : 'Unknown error',
        errorType: typeof emailError,
        hasApiKey,
        apiKeyLength,
        apiKeyPrefix,
        nodeEnv: process.env.NODE_ENV
      };
      
      return NextResponse.json(
        { 
          error: 'Email service error: ' + (emailError instanceof Error ? emailError.message : 'Unknown error'),
          debug: errorDetails
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact API: General error occurred:', error);
    console.error('Contact API: Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error: error
    });
    
    return NextResponse.json(
      { error: 'Server error: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}
