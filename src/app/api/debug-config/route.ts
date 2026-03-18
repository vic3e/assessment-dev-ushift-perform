import { NextResponse } from "next/server";

export async function GET() {
  const requiredEnvVars = {
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    FROM_EMAIL: process.env.FROM_EMAIL,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  };

  const envStatus = Object.entries(requiredEnvVars).map(([key, value]) => ({
    variable: key,
    isSet: !!value,
    // For sensitive keys, just show first/last few characters
    value: key === 'MAILGUN_API_KEY' 
      ? value ? `${value.slice(0, 8)}...${value.slice(-4)}` : null
      : value,
  }));

  const missingVars = envStatus.filter(env => !env.isSet).map(env => env.variable);

  return NextResponse.json({
    status: missingVars.length === 0 ? 'OK' : 'MISSING_VARIABLES',
    missingVariables: missingVars,
    environmentVariables: envStatus,
    warnings: [
      'Ensure MAILGUN_DOMAIN is verified in your Mailgun dashboard',
      'Ensure FROM_EMAIL uses your verified Mailgun domain',
      'Check that ADMIN_EMAIL is a valid email address',
    ]
  }, { 
    status: missingVars.length === 0 ? 200 : 500 
  });
}