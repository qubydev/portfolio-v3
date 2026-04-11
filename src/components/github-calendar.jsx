'use client'

import React, { useState, useEffect } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const levelColors = {
    NONE: "bg-primary/5",
    FIRST_QUARTILE: "bg-primary/30",
    SECOND_QUARTILE: "bg-primary/50",
    THIRD_QUARTILE: "bg-primary/70",
    FOURTH_QUARTILE: "bg-primary",
}

const MIN_CELL = 10
const CELL_GAP = 3

export default function GithubCalendar({ username }) {
    const [calendarData, setCalendarData] = useState(null)

    useEffect(() => {
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
    const firstMonth = new Date(weeks[0].contributionDays[0].date).toLocaleString('default', { month: 'short' })
    const minGridWidth = weeks.length * (MIN_CELL + CELL_GAP)

    const months = []
    let lastMonth = firstMonth
    let lastMonthWeeks = 0

    weeks.forEach((week) => {
        const firstDay = week.contributionDays[0].date
        const month = new Date(firstDay).toLocaleString('default', { month: 'short' })

        if (month !== lastMonth) {
            months.push({ label: lastMonth, weeks: lastMonthWeeks })
            lastMonth = month
            lastMonthWeeks = 0
        }

        lastMonthWeeks += 1
    });

    if (lastMonthWeeks > 0) {
        months.push({ label: lastMonth, weeks: lastMonthWeeks })
    }

    let initialGapWeeks = 0
    let endingGapWeeks = 0

    if (months.length > 12) {
        const first = months[0]
        const last = months[months.length - 1]

        if (first.weeks < last.weeks) {
            months.shift()
            initialGapWeeks = first.weeks
        } else {
            months.pop()
            endingGapWeeks = last.weeks
        }
    }

    return (
        <div className="flex w-full flex-col gap-3 font-sans">
            <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div style={{ minWidth: `${minGridWidth}px` }}>
                    <div className="flex w-full">
                        {initialGapWeeks > 0 && (
                            <span style={{ width: `${(initialGapWeeks / weeks.length) * 100}%` }} />
                        )}
                        {months.map((m, i) => (
                            <span
                                key={i}
                                className="text-[11px] text-muted-foreground overflow-hidden"
                                style={{ width: `${(m.weeks / weeks.length) * 100}%` }}
                            >
                                {m.label}
                            </span>
                        ))}
                        {endingGapWeeks > 0 && (
                            <span style={{ width: `${(endingGapWeeks / weeks.length) * 100}%` }} />
                        )}
                    </div>

                    <div className="flex w-full gap-[3px] mt-1">
                        {weeks.map((week, weekIndex) => (
                            <div key={weekIndex} className="flex flex-1 flex-col gap-[3px]">
                                {week.contributionDays.map((day, dayIndex) => (
                                    <Tooltip key={dayIndex}>
                                        <TooltipTrigger asChild>
                                            <div className={`aspect-square w-full rounded-[2px] ${levelColors[day.contributionLevel]}`} />
                                        </TooltipTrigger>
                                        <TooltipContent side="top" sideOffset={4} className="px-2 py-1.5 text-xs">
                                            <strong className="font-medium">{day.contributionCount}</strong> contributions on {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                <span>
                    <strong className="font-semibold text-foreground">{total}</strong> contributions last year
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