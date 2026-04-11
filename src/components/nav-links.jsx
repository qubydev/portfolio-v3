"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`relative text-sm transition-colors 
            after:content-[''] after:absolute after:w-0 after:-bottom-0.5 after:left-0 after:h-px after:bg-current after:transition-all hover:after:w-full 
            ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
        >
            {children}
        </Link>
    );
};

export default function NavLinks({ links = [] }) {
    return (
        <>
            {links.map(({ href, label }) => (
                <NavLink key={href} href={href}>{label}</NavLink>
            ))}
        </>
    );
}