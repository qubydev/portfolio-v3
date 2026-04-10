import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Globe } from 'lucide-react'
import { FiGithub } from "react-icons/fi"

export default function Projects() {
    const projects = [
        {
            title: "Adotion",
            link: "https://www.adotion.pro",
            image: "/projects/adotion.png",
            description: "Save any meta ad in one click directly into your notion database with permanent video link.",
            tech: [
                { name: "Plasmo", icon: "/icons/plasmo.svg", invertDark: true },
                { name: "Next.js", icon: "/icons/nextjs.svg", invertDark: true },
                { name: "React", icon: "/icons/react.svg" },
                { name: "Supabase", icon: "/icons/supabase.svg" },
            ]
        },
        {
            title: "Infia",
            link: "https://infia.vercel.app",
            github: "https://github.com/qubydev/infia",
            image: "/projects/infia.png",
            description: "Infia does it for you! Click and connect with a large number of available applications.",
            tech: [
                { name: "LangGraph", icon: "/icons/langgraph.svg" },
                { name: "Next.js", icon: "/icons/nextjs.svg", invertDark: true },
                { name: "React", icon: "/icons/react.svg" },
                { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
                { name: "MongoDB", icon: "/icons/mongodb.svg" },
            ]
        },
        {
            title: "Logo Cat",
            link: "https://logocat.vercel.app",
            github: "https://github.com/qubydev/logocat",
            image: "/projects/logocat.png",
            description: "Fetch logo of any given site link using smart extraction technique.",
            tech: [
                { name: "LangChain", icon: "/icons/langchain.svg", invertDark: true },
                { name: "Next.js", icon: "/icons/nextjs.svg", invertDark: true },
                { name: "React", icon: "/icons/react.svg" },
                { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
                { name: "Figma", icon: "/icons/figma.svg" },
            ]
        },
        {
            title: "Fullstack Sheet",
            link: "https://www.fullstacksheet.tech",
            github: "https://github.com/qubydev/full-stack-sheet",
            image: "/projects/fullstacksheet.png",
            description: "A high quality free roadmap for learning full-stack development.",
            tech: [
                { name: "Next.js", icon: "/icons/nextjs.svg", invertDark: true },
                { name: "React", icon: "/icons/react.svg" },
                { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
                { name: "better-auth", icon: "/icons/better-auth.svg", invertDark: true },
                { name: "shadcn/ui", icon: "/icons/shadcnui.svg", invertDark: true },
            ]
        },
    ]

    return (
        <section className="mt-20">
            <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project, idx) => (
                    <div key={idx} className="flex flex-col group font-geist rounded-xl bg-card/70 border border-border/50 hover:border-border hover:bg-accent/50 ease-out transition-all duration-200">
                        <div className="relative w-full h-40 sm:h-50 overflow-hidden rounded-t-xl bg-muted/50 shrink-0">
                            <img src={project.image} alt={`${project.title} - Project thumbnail`} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col flex-1 px-4 sm:px-6 py-4 sm:py-5">
                            <div className="flex justify-between items-start mb-3 sm:mb-3.5">
                                <h3 className="text-base sm:text-lg font-medium text-foreground transition-colors">{project.title}</h3>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors ease-out" href={project.github}>
                                            <FiGithub className='size-5' />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors ease-out" href={project.link}>
                                            <Globe className='size-5' />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className="text-foreground/70 text-sm leading-relaxed mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-3 mt-auto items-center">
                                {project.tech.map((t, tIdx) => (
                                    <Tooltip key={tIdx}>
                                        <TooltipTrigger asChild>
                                            <img src={t.icon} alt={t.name} className={`w-6 h-6 object-contain hover:scale-110 transition-transform duration-150 ease-out cursor-pointer ${t.invertDark ? 'dark:invert' : ''}`} />
                                        </TooltipTrigger>
                                        <TooltipContent side="top" sideOffset={6}>
                                            {t.name}
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
