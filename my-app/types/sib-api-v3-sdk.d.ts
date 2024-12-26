declare module 'sib-api-v3-sdk' {
  export interface ApiResponse {
    messageId: string;
    response: {
      statusCode: number;
      body: unknown;
    };
  }

  export class TransactionalEmailsApi {
    setApiKey(key: string, value: string): void;
    sendTransacEmail(email: SendSmtpEmail): Promise<ApiResponse>;
  }

  export class SendSmtpEmail {
    to?: Array<{ email: string; name: string }>;
    replyTo?: { email: string; name: string };
    subject?: string;
    htmlContent?: string;
  }

  export namespace TransactionalEmailsApiApiKeys {
    const apiKey: string;
  }
} 