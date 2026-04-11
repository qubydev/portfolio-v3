import React from 'react'

export default function ColoredBadge({ text = '', className = 'bg-primary/10 text-primary' }) {
    return (
        <span
            className={`inline-flex items-center px-2 py-1 rounded border border-dashed text-sm ${className}`}
        >
            {text}
        </span>
    )
}
