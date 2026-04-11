"use client";

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { SHOWCASE_DATA } from '@/lib/showcase';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from '@/components/ui/tooltip';
import { Globe, ChevronLeft } from 'lucide-react';
import { FiGithub } from "react-icons/fi";
import Link from 'next/link';

export default function CategoryPage({ params }) {
    const resolvedParams = use(params);
    const category = resolvedParams.category;
    
    const data = SHOWCASE_DATA.find((d) => d.category.toLowerCase() === category?.toLowerCase());

    if (!data) {
        notFound();
    }

    const items = data.items;

    return (
        <main className='px-6 pb-12 pt-36 w-full max-w-3xl mx-auto'>
            <div className="mb-8">
                <Link 
                    href="/showcase" 
                    className="group flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
                    Back to Showcase
                </Link>
            </div>

            <div className="mb-8 flex items-center gap-2">
                <div>
                    <h1 className='text-3xl font-bold capitalize'>{data.category}</h1>
                    <p className='text-sm text-muted-foreground mt-1'>
                        Showing all items in {data.category}.
                    </p>
                </div>
            </div>

            {items.length === 0 ? (
                <div className="p-8 text-center bg-accent/50 rounded-xl border border-border border-dashed text-muted-foreground">
                    No items found in this category yet.
                </div>
            ) : data.category.toLowerCase() === "logos" ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {items.map((logo, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-6 gap-4 text-center font-geist rounded-xl bg-card/70 border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200">
                            <img src={logo.logoUrl} alt={logo.name} className={`w-12 h-12 object-contain ${logo.invertDark ? 'dark:invert' : ''}`} />
                            <div>
                                <h3 className="font-medium text-sm text-foreground">{logo.name}</h3>
                                <p className="text-xs text-muted-foreground mt-1 tracking-tight leading-snug max-w-[150px]">{logo.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <TooltipProvider>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {items.map((project, idx) => (
                            <div key={idx} className="flex flex-col group font-geist rounded-xl bg-card/70 border border-border/50 hover:border-border hover:bg-accent/50 ease-out transition-all duration-200">
                                <div className="relative w-full h-40 sm:h-50 overflow-hidden rounded-t-xl bg-muted/50 shrink-0">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
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
                                    {project.tech && project.tech.length > 0 && (
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
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </TooltipProvider>
            )}
        </main>
    );
}
