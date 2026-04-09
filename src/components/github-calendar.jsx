import React from 'react'
import ContributionGrid from './contribution-grid'

async function getGithubContributions(username) {
    const headers = {
        'Authorization': `bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
    }

    const body = JSON.stringify({
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
    })

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers,
        body,
        next: { revalidate: 3600 }
    })

    const data = await response.json()
    return data.data.user.contributionsCollection.contributionCalendar
}

const levelColors = {
    NONE: "bg-muted/50",
    FIRST_QUARTILE: "bg-green-500/30",
    SECOND_QUARTILE: "bg-green-500/50",
    THIRD_QUARTILE: "bg-green-500/70",
    FOURTH_QUARTILE: "bg-green-500",
}

export default async function GithubCalendar({ username }) {
    const calendarData = await getGithubContributions(username)
    const weeks = calendarData?.weeks || []
    const total = calendarData?.totalContributions || 0

    const months = []
    weeks.forEach((week, i) => {
        const firstDay = week.contributionDays[0].date
        const month = new Date(firstDay).toLocaleString('default', { month: 'short' })

        if (!months.some(m => m.label === month)) {
            months.push({ label: month, index: i })
        }
    })

    return (
        <div className="flex w-full flex-col gap-3 font-sans">
            <div className="relative flex h-4 w-full">
                {months.map((m, i) => (
                    <span
                        key={i}
                        className="absolute text-[11px] text-muted-foreground"
                        style={{ left: `${(m.index / weeks.length) * 100}%` }}
                    >
                        {m.label}
                    </span>
                ))}
            </div>

            <ContributionGrid weeks={weeks} />

            <div className="mt-1 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                <span>
                    <strong className="font-semibold text-foreground">{total}</strong> contributions in the last year
                </span>
                <div className="flex items-center gap-1.5">
                    <span>Less</span>
                    <div className="flex gap-[3px]">
                        {Object.values(levelColors).map((color, i) => (
                            <div key={i} className={`h-[10px] w-[10px] rounded-[2px] ${color}`} />
                        ))}
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    )
}