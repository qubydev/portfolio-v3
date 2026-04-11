import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Globe } from 'lucide-react'
import { FiGithub } from "react-icons/fi"
import { SHOWCASE_DATA } from '@/lib/showcase'

export default function Projects() {
    const projects = SHOWCASE_DATA.find(d => d.category === 'projects')?.items.slice(0, 4) || []

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
