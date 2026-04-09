import React from 'react'
import Link from 'next/link'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

const socialLinks = [
    {
        label: "X (Twitter)",
        href: "https://x.com/buildwithsid",
        icon: <FaXTwitter className="w-4 h-4" />
    },
    {
        label: "Email",
        href: "mailto:siddharth@onavix.com",
        icon: <MdOutlineEmail className="w-4 h-4" />
    },
    {
        label: "GitHub",
        href: "https://github.com/SiddDevZ",
        icon: <FaGithub className="w-4 h-4" />
    }
]

const navLinks = [
    { label: "About", href: "/about" },
    { label: "Showcase", href: "/showcase" },
]

export default function Footer() {
    return (
        <footer className="mt-16 sm:mt-20 border-t border-border/40 w-full max-w-3xl mx-auto">
            <div className="px-4 py-5 sm:py-7">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                        <p className="text-xs text-muted-foreground/60">
                            © {new Date().getFullYear()} Siddharth<span className="md:hidden"> Meena</span>.
                        </p>
                        <div className="hidden md:block w-px h-4 bg-border/50"></div>
                        <div className="flex items-center gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <div key={social.label} className="relative inline-flex group/social">
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground/70 hover:text-foreground transition-colors duration-200"
                                >
                                    {social.icon}
                                </a>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none transition-all duration-100 ease-out z-50 opacity-0 translate-y-1 group-hover/social:opacity-100 group-hover/social:translate-y-0 shadow-md">
                                    {social.label}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-foreground" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
