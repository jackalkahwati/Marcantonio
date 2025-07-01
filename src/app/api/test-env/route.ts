import { NextResponse } from 'next/server';

export async function GET() {
  const hasApiKey = !!process.env.BREVO_API_KEY;
  const apiKeyLength = process.env.BREVO_API_KEY?.length || 0;
  const apiKeyPrefix = process.env.BREVO_API_KEY?.substring(0, 15) || 'missing';
  
  return NextResponse.json({
    hasApiKey,
    apiKeyLength,
    apiKeyPrefix,
    nodeEnv: process.env.NODE_ENV
  });
} 