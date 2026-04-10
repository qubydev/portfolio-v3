'use client'

import React, { useState, useEffect, useRef } from 'react'
import ContributionGrid from './contribution-grid'

const levelColors = {
    NONE: "bg-primary/5",
    FIRST_QUARTILE: "bg-primary/30",
    SECOND_QUARTILE: "bg-primary/50",
    THIRD_QUARTILE: "bg-primary/70",
    FOURTH_QUARTILE: "bg-primary",
}

export default function GithubCalendar({ username }) {
    const [calendarData, setCalendarData] = useState(null)
    const hasFetched = useRef(false)

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        fetch(`/api/github-contributions?username=${username}`)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch contributions');
                return res.json();
            })
            .then(data => {
                if (data && data.weeks) {
                    setCalendarData(data);
                }
            })
            .catch(err => console.error('GitHub calendar error:', err));
    }, [username]);

    if (!calendarData) {
        return (
            <div className="flex w-full flex-col gap-3 font-sans animate-pulse">
                <div className="h-4 w-full" />
                <div className="h-[72px] w-full rounded bg-muted/30" />
                <div className="h-4 w-full" />
            </div>
        )
    }

    const weeks = calendarData.weeks || []
    const total = calendarData.totalContributions || 0

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

            <ContributionGrid weeks={weeks} levelColors={levelColors} />

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