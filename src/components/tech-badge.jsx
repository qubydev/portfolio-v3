import React from 'react'

const TechBadge = ({ href, icon, children, className }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 rounded border border-dashed border-border px-1.5 py-0.5 text-[11px] transition-all hover:opacity-80 sm:text-sm ${className}`}
    >
        <img src={icon} alt={children} className="h-3.5 w-3.5 object-contain" />
        {children}
    </a>
)

export default TechBadge;
