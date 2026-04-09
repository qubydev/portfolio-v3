"use client";

import React from 'react'
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './theme-toggle';

export default function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className='h-16 fixed left-0 top-0 w-full'>
            <nav className='w-full max-w-3xl mx-auto px-6 flex items-center h-full'>
                <Link className="text-sm font-medium tracking-tight" href="/">
                    <span className="text-muted-foreground">~/</span>
                    <span>qubydev</span>
                </Link>

                <div className="flex items-center gap-2 ml-auto">
                    <div className="flex items-center gap-3 md:gap-6 pr-1 md:pr-3">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/showcase">Showcase</NavLink>
                    </div>

                    <ThemeToggle
                        toggled={!isDarkMode}
                        onToggle={toggleTheme}
                    />
                </div>
            </nav>
        </div>
    )
}

const NavLink = ({ href, children }) => {
    return (
        <Link className="relative text-xs md:text-sm transition-colors after:content-[''] after:absolute after:w-0 after:-bottom-0.5 after:left-0 after:h-px after:bg-current after:transition-all md:hover:after:w-full text-muted-foreground hover:text-primary" href={href}>
            {children}
        </Link>
    )
}
