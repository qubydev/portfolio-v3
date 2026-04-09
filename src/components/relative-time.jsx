"use client"

import React, { useEffect, useState } from 'react'

export default function RelativeTime({ className, ...props }) {
    const [times, setTimes] = useState({ ist: '', relative: '' })

    useEffect(() => {
        const updateTime = () => {
            const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
            const istNames = ['Asia/Kolkata', 'Asia/Calcutta']
            const istTimeZone = 'Asia/Kolkata'

            const istTime = new Intl.DateTimeFormat('en-US', {
                timeZone: istTimeZone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }).format(new Date())

            const isIST = istNames.includes(clientTimeZone)
            const relativeText = isIST
                ? '// same time'
                : `// IST ${istTime}`

            setTimes({ ist: istTime, relative: relativeText })
        }

        updateTime()
        const interval = setInterval(updateTime, 30000)

        return () => clearInterval(interval)
    }, [])

    if (!times.ist) return null

    return (
        <div className={`flex items-center gap-1.5 md:gap-2 ${className}`} {...props}>
            <span className="text-sm text-foreground">
                {times.ist}
            </span>
            <span className="text-xs text-muted-foreground/50">
                {times.relative}
            </span>
        </div>
    )
}