import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'

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
                            <img src={project.image} alt={`${project.title} - Project by Siddharth Meena`} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col flex-1 px-4 sm:px-6 py-4 sm:py-5">
                            <div className="flex justify-between items-start mb-3 sm:mb-3.5">
                                <h3 className="text-base sm:text-lg font-medium text-foreground transition-colors">{project.title}</h3>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors ease-out" href={project.github}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                            </svg>
                                        </a>
                                    )}
                                    {project.link && (
                                        <a target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors ease-out" href={project.link}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                <path d="M2 12h20"></path>
                                            </svg>
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
