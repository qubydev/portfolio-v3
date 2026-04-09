import React from 'react'

export default function Projects() {
    const projects = [
        {
            title: "Onavix Studio",
            link: "https://onavix.com",
            image: "https://siddz.com/images/projects/preview_1.webp",
            description: "A web development agency specializing in creating visually appealing, conversion-focused websites for clients.",
            tech: [
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertDark: true },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
            ]
        },
        {
            title: "UnchainedGPT",
            link: "https://unchainedgpt.com",
            github: "https://github.com",
            image: "https://siddz.com/images/projects/preview_2.webp",
            description: "An AI platform with 500+ users bringing together 80+ open-source AI models through a single, unified interface.",
            tech: [
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertDark: true },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "Hono.js", icon: "https://cdn.simpleicons.org/hono" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
                { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg", invertDark: true }
            ]
        }
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
                        <div className="flex flex-col flex-1 px-4 sm:px-6 py-4 sm:py-5 overflow-visible">
                            <div className="flex justify-between items-start mb-3 sm:mb-3.5">
                                <h3 className="text-base sm:text-lg font-medium text-foreground transition-colors">{project.title}</h3>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <div className="relative inline-flex group/link">
                                            <a target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors ease-out" href={project.github}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                                </svg>
                                            </a>
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none transition-all duration-150 ease-out z-50 opacity-0 translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 shadow-md">
                                                View Source
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-foreground"></div>
                                            </div>
                                        </div>
                                    )}
                                    {project.link && (
                                        <div className="relative inline-flex group/link">
                                            <a target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors ease-out" href={project.link}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                    <path d="M2 12h20"></path>
                                                </svg>
                                            </a>
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none transition-all duration-150 ease-out z-50 opacity-0 translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 shadow-md">
                                                Visit Website
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-foreground"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className="text-foreground/70 text-sm leading-relaxed mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-3 mt-auto items-center">
                                {project.tech.map((t, tIdx) => (
                                    <div key={tIdx} className="relative inline-flex group/tech">
                                        <img src={t.icon} alt={t.name} className={`w-6 h-6 object-contain hover:scale-110 transition-transform duration-150 ease-out cursor-pointer ${t.invertDark ? 'dark:invert' : ''}`} />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none transition-all duration-150 ease-out z-50 opacity-0 translate-y-1 group-hover/tech:opacity-100 group-hover/tech:translate-y-0 shadow-md">
                                            {t.name}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-foreground"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
