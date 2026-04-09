import React from 'react'

export default function Experience() {
    const experiences = [
        {
            title: "Founder & Developer",
            company: "Onavix Studio",
            location: "Remote, Part-time",
            date: "Feb 2024 - Present",
            logo: "https://siddz.com/images/company-logos/onavix.jpg",
            description: "Founded and led a freelance web development studio, delivering custom-built websites and applications with a focus on responsive design and performance.",
            bullets: [
                "Delivered 30+ high-performance web solutions using Next.js, React, and Node.js",
                "Improved client conversion rates and engagement through optimized user experiences"
            ]
        },
        {
            title: "Founding Engineer",
            company: "Stealth Startup",
            location: "Denmark, Full-Time",
            date: "Mar 2025 - Nov 2025",
            logo: "https://siddz.com/images/company-logos/stealth.jpg",
            description: "Built a video streaming platform with real-time chat functionality, handling 1,000+ daily active users with optimized infrastructure and seamless real-time communication.",
            bullets: [
                "Architected scalable video streaming platform serving 1,000+ daily users with optimized CDN delivery",
                "Implemented real-time chat application with Socket.IO, enabling instant messaging across the platform"
            ]
        }
    ]

    return (
        <section className="mt-20">
            <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Experience</h2>
            <div className="flex flex-col gap-4">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="group py-5 px-6 rounded-xl bg-card/70 border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-transparent border border-border flex items-center justify-center overflow-hidden">
                                {exp.logo ? (
                                    <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                                ) : (
                                    <div className="w-full h-full bg-muted"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start sm:items-center gap-2 flex-col sm:flex-row flex-wrap">
                                    <h3 className="text-sm sm:text-base font-medium text-foreground">{exp.title}</h3>
                                </div>
                                <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm flex-wrap">
                                    <span className="font-medium text-foreground/70">{exp.company}</span>
                                    <span className="text-muted-foreground/50">•</span>
                                    <span className="text-muted-foreground/60">{exp.location}</span>
                                </div>
                            </div>
                            <span className="text-[10px] sm:text-xs text-muted-foreground/60 whitespace-nowrap shrink-0">{exp.date}</span>
                        </div>
                        {exp.description && (
                            <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-3">
                                {exp.description}
                            </p>
                        )}
                        {exp.bullets && exp.bullets.length > 0 && (
                            <ul className="space-y-1.5">
                                {exp.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                                        <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-muted-foreground/50 shrink-0"></span>
                                        <span className="leading-relaxed">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
