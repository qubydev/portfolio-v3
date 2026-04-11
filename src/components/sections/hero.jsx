import React from 'react'
import { Code2, MapPin, Mail, Clock, Globe, User2 } from 'lucide-react'
import { FileText } from 'lucide-react'
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import RelativeTime from '../relative-time'
import TechBadge from '../tech-badge'
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
    return (
        <section>
            <div className="md:mb-8 mb-6 flex flex-row items-start gap-3.5 md:gap-4">
                <img
                    alt="Malay Patra"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border border-border shrink-0"
                    src="/quby.jpg"
                />
                <div className="flex flex-col md:gap-1 gap-0.5 flex-1">
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-col sm:flex-row">
                        <h1 className="text-2xl font-inter sm:text-3xl md:text-4xl font-semibold tracking-normal">Malay Patra</h1>
                        <div className="hidden md:flex items-center gap-1.5 px-2 py-1 rounded-full bg-muted border border-border">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-xs font-inter text-muted-foreground">Available for work</span>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-lg">
                        Full-Stack Developer
                    </p>
                </div>
            </div>

            <div className="mb-5 md:mb-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-1.5">
                        <div className="flex items-center gap-2 md:gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem]">
                                <Code2 className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <span className="text-xs text-muted-foreground md:text-sm">Full-Stack Developer</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem]">
                                <MapPin className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <span className="text-xs text-muted-foreground md:text-sm">Kolkata, West Bengal, India</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem]">
                                <Mail className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <a href="mailto:malay88patra@gmail.com" target="_blank" className="text-xs text-muted-foreground transition-all ease-in-out hover:underline md:text-sm">malay88patra@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden space-y-1.5 md:block">
                        <div className="flex items-center gap-2 md:gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem]">
                                <Clock className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <RelativeTime />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem]">
                                <Globe className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <a href="https://qubydev.vercel.app" target="_blank" className="text-xs text-muted-foreground transition-all ease-in-out hover:underline md:text-sm">qubydev.vercel.app</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem]">
                                <User2 className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <span className="text-xs text-muted-foreground md:text-sm">he/him</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-5 md:mb-8">
                <p className="text-sm leading-loose text-muted-foreground sm:text-[15px] sm:leading-[2.3]">
                    I build interactive web apps using{" "}
                    <TechBadge
                        href="https://www.typescriptlang.org/"
                        icon="/icons/typescript.svg"
                        className="bg-blue-500/10 text-blue-400"
                    >
                        TypeScript
                    </TechBadge>
                    ,{" "}
                    <TechBadge
                        href="https://react.dev/"
                        icon="/icons/react.svg"
                        className="bg-cyan-500/10 text-cyan-400"
                    >
                        React
                    </TechBadge>
                    ,{" "}
                    <TechBadge
                        href="https://nextjs.org/"
                        icon="/icons/nextjs.svg"
                        className="bg-primary/10 text-foreground"
                        darkInvert
                    >
                        Next.js
                    </TechBadge>
                    , and{" "}
                    <TechBadge
                        href="https://tailwindcss.com/"
                        icon="/icons/tailwindcss.svg"
                        className="bg-sky-500/10 text-sky-400"
                    >
                        Tailwind CSS
                    </TechBadge>
                    . I also integrate agentic AI into my applications using{" "}
                    <TechBadge
                        href="https://langchain.com/"
                        icon="/icons/langchain.svg"
                        className="bg-primary/10 text-foreground"
                        darkInvert
                    >
                        LangChain
                    </TechBadge>
                    {" and "}
                    <TechBadge
                        href="https://langchain.com/langgraph"
                        icon="/icons/langgraph.svg"
                        className="bg-[#4ba9f0]/10 text-[#4ba9f0]"
                    >
                        LangGraph
                    </TechBadge>
                    {" . "}
                    <Link href={"/about"} className="link flex items-center">
                        Read more <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </p>
            </div>


            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
                <div className="flex flex-wrap items-center gap-2">
                    <Button size="sm" asChild className="h-9 gap-2">
                        <a href="https://drive.google.com/file/d/1ndeSxjR6InKTRdrs69jDwf1PTqHN_JSt/view" target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4" strokeWidth={1.5} />
                            <span className="text-[13px] font-light">Resume</span>
                        </a>
                    </Button>

                    <Button variant="outline" size="sm" asChild className="h-9 gap-2">
                        <a href="#contact">
                            <Mail className="h-4 w-4" strokeWidth={1.5} />
                            <span className="text-[13px] font-light">Contact</span>
                        </a>
                    </Button>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <div className="mx-1 hidden h-5 w-px bg-border sm:block" />

                    <Button variant="outline" size="icon" asChild className="h-9 w-9">
                        <a href="https://www.linkedin.com/in/qubydev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="h-4 w-4" />
                        </a>
                    </Button>

                    <Button variant="outline" size="icon" asChild className="h-9 w-9">
                        <a href="https://x.com/qubydev" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                            <SiX className="h-4 w-4" />
                        </a>
                    </Button>

                    <Button variant="outline" size="icon" asChild className="h-9 w-9">
                        <a href="https://github.com/qubydev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <SiGithub className="h-4 w-4" />
                        </a>
                    </Button>

                    <Button variant="outline" size="icon" asChild className="h-9 w-9">
                        <a href="mailto:malay88patra@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                            <Mail className="h-4 w-4" strokeWidth={1.5} />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
