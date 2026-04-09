import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const apiKey = process.env.API_NINJA_API_KEY;
        
        if (!apiKey) {
            return NextResponse.json({ error: "API key not configured" }, { status: 500 });
        }

        const response = await fetch('https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom', {
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        
        if (Array.isArray(data) && data.length > 0) {
            return NextResponse.json(data[0]);
        } else {
            throw new Error("Invalid response format");
        }
    } catch (error) {
        console.error("Quotes API Error:", error);
        return NextResponse.json({ error: "Failed to fetch quote" }, { status: 500 });
    }
}
