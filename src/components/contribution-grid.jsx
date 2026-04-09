"use client"

import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const levelColors = {
    NONE: "bg-muted/50",
    FIRST_QUARTILE: "bg-green-500/30",
    SECOND_QUARTILE: "bg-green-500/50",
    THIRD_QUARTILE: "bg-green-500/70",
    FOURTH_QUARTILE: "bg-green-500",
}

export default function ContributionGrid({ weeks = [] }) {
    if (!weeks || weeks.length === 0) return null;

    return (
        <div className="flex w-full justify-between gap-[3px] overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex shrink-0 flex-col gap-[3px]">
                    {week.contributionDays.map((day, dayIndex) => (
                        <Tooltip key={dayIndex}>
                            <TooltipTrigger asChild>
                                <div className={`h-[10px] w-[10px] rounded-[2px] ${levelColors[day.contributionLevel]}`} />
                            </TooltipTrigger>
                            <TooltipContent side="top" sideOffset={4} className="px-2 py-1.5 text-xs">
                                <strong className="font-medium">{day.contributionCount}</strong> contributions on {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            ))}
        </div>
    )
}