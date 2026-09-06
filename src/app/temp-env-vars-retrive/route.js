import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const env = Object.fromEntries(
    Object.keys(process.env)
      .sort()
      .map((key) => [
        key,
        {
          set: process.env[key] !== undefined,
          value: process.env[key] ? '[redacted]' : '',
        },
      ])
  );

  return NextResponse.json({ env });
}
