import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW = 60 * 60;
const MAX_REQUESTS = 3;

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    if (ip !== 'unknown') {
      const key = `ratelimit:${ip}`;
      
      const count = await redis.incr(key);
      
      if (count === 1) {
        await redis.expire(key, RATE_LIMIT_WINDOW);
      }

      if (count > MAX_REQUESTS) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
    }

    const { name, email, message, honeypot } = await request.json();

    if (honeypot) {
      return NextResponse.json({ data: 'Message sent successfully' });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <contact@contact.adotion.pro>',
      to: ['malay88patra@gmail.com'],
      subject: `New message from ${name}`,
      reply_to: email,
      html: `
        <h3>You received a new message from your portfolio contact form!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
