import React from 'react'
import GithubCalendar from '../github-calendar'

const techStack = [
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertDark: true },
    { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertDark: true },
    { name: "Hono.js", src: "https://cdn.simpleicons.org/hono" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invertDark: true },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Nginx", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
    { name: "Bun", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" },
    { name: "Cursor AI", src: "https://cdn.simpleicons.org/cursor", invertDark: true },
    { name: "React Router", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" },
    { name: "React Navigation", src: "https://reactnavigation.org/img/spiro.svg", invertDark: true },
    { name: "Shadcn UI", src: "https://cdn.simpleicons.org/shadcnui", invertDark: true },
    { name: "Socket.IO", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg", invertDark: true }
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
                        <div key={tech.name} className="group relative inline-flex justify-center">
                            <img
                                src={tech.src}
                                alt={tech.name}
                                className={`h-6 w-6 cursor-pointer object-contain transition-transform duration-200 hover:scale-110 sm:h-8 sm:w-8 ${tech.invertDark ? 'dark:invert' : ''
                                    }`}
                            />
                            <div className="pointer-events-none absolute bottom-full z-50 mb-3 translate-y-1 whitespace-nowrap rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                                {tech.name}
                                <div className="absolute left-1/2 top-full -mt-px -translate-x-1/2 border-4 border-transparent border-t-zinc-800" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}