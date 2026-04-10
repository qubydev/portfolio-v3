import React from 'react'
import GithubCalendar from '../github-calendar'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'

const techStack = [
    { name: "TypeScript", src: "/icons/typescript.svg" },
    { name: "JavaScript", src: "/icons/javascript.svg" },
    { name: "Python", src: "/icons/python.svg" },
    { name: "Node.js", src: "/icons/nodejs.svg" },
    { name: "React", src: "/icons/react.svg" },
    { name: "Next.js", src: "/icons/nextjs.svg", invertDark: true },
    { name: "Tailwind CSS", src: "/icons/tailwindcss.svg" },
    { name: "Express.js", src: "/icons/express.svg", invertDark: true },
    { name: "Git", src: "/icons/git.svg" },
    { name: "GitHub", src: "/icons/github.svg", invertDark: true },
    { name: "MongoDB", src: "/icons/mongodb.svg" },
    { name: "Figma", src: "/icons/figma.svg" },
    { name: "Postman", src: "/icons/postman.svg" },
    { name: "Shadcn UI", src: "/icons/shadcnui.svg", invertDark: true },
    { name: "PostgreSQL", src: "/icons/postgresql.svg" },
    { name: "C++", src: "/icons/cplusplus.svg" },
    { name: "LangChain", src: "/icons/langchain.svg", invertDark: true },
    { name: "LangGraph", src: "/icons/langgraph.svg" },
]

export default function Activity() {
    return (
        <section>
            <div className='mt-12'>
                <GithubCalendar username="qubydev" />
            </div>

            <div className="mt-10">
                <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Tech Stack</h2>
                <div className="flex flex-wrap items-center gap-3 opacity-95 sm:gap-4">
                    {techStack.map((tech) => (
                        <Tooltip key={tech.name}>
                            <TooltipTrigger asChild>
                                <img
                                    src={tech.src}
                                    alt={tech.name}
                                    className={`h-6 w-6 cursor-pointer object-contain transition-transform duration-200 hover:scale-110 sm:h-8 sm:w-8 ${tech.invertDark ? 'dark:invert' : ''}`}
                                />
                            </TooltipTrigger>
                            <TooltipContent side="top" sideOffset={6}>
                                {tech.name}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </section>
    )
}