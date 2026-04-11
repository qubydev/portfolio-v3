import { NextResponse } from 'next/server';

const CACHE_TTL = 3600;

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const username = searchParams.get('username');
        if (!username) {
            return NextResponse.json({ error: 'username is required' }, { status: 400 });
        }
        const token = process.env.GITHUB_TOKEN;
        if (!token) {
            return NextResponse.json({ error: 'GitHub token not configured' }, { status: 500 });
        }
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query {
                    user(login: "${username}") {
                        contributionsCollection {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                    contributionDays {
                                        contributionCount
                                        contributionLevel
                                        date
                                    }
                                }
                            }
                        }
                    }
                }`
            }),
            next: {
                revalidate: CACHE_TTL,
                tags: [`github-contributions-${username}`]
            }
        });
        if (!response.ok) {
            throw new Error(`GitHub API responded with status: ${response.status}`);
        }
        const data = await response.json();
        const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;
        if (!calendar) {
            throw new Error('Invalid response from GitHub API');
        }
        return NextResponse.json(calendar, {
            headers: {
                'Cache-Control': `public, max-age=${CACHE_TTL}, stale-while-revalidate=${CACHE_TTL * 24}`
            }
        });
    } catch (error) {
        console.error('GitHub contributions API error:', error);
        return NextResponse.json({ error: 'Failed to fetch contributions' }, { status: 500 });
    }
}