'use client'

import React from 'react'

export default function Contact() {
    return (
        <section className="mt-20">
            <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Let's Work Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="font-geist px-6 sm:px-6 py-5 sm:py-5 rounded-xl bg-card/70 border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200 flex flex-col">
                    <div className="mb-4 sm:mb-5">
                        <h3 className="text-lg font-medium text-foreground mb-1.5">Get in Touch</h3>
                        <p className="text-sm text-muted-foreground leading-[1.6]">Choose your preferred method to connect and let's discuss your project.</p>
                    </div>
                    <div className="space-y-3">
                        <a href="https://cal.com/siddharth-meena/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-lg bg-background/50 border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200 ease-out group">
                            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm text-foreground/80 mb-0.5">Schedule a free call</p>
                                <p className="text-[10px] sm:text-xs text-muted-foreground/60">30-minute strategy session</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors shrink-0"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
                        </a>
                        <a href="mailto:siddharth@onavix.com" className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-lg bg-background/50 border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200 ease-out group">
                            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm text-foreground/80 mb-0.5 truncate">siddharth@onavix.com</p>
                                <p className="text-[10px] sm:text-xs text-muted-foreground/60">Quick inquiries &amp; questions</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors shrink-0"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
                        </a>
                        <a href="https://x.com/buildwithsid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-lg bg-background/50 border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200 ease-out group">
                            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm text-foreground/80 mb-0.5">Connect on X</p>
                                <p className="text-[10px] sm:text-xs text-muted-foreground/60">Follow for updates &amp; insights</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors shrink-0"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
                        </a>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border/50">
                        <p className="text-[10px] text-muted-foreground/60">Response within 24 hours • Available for hire</p>
                    </div>
                </div>
                <div className="font-geist px-6 sm:px-6 py-5 sm:py-5 rounded-xl bg-card/70 border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200 flex flex-col">
                    <div className="mb-4">
                        <h3 className="text-base sm:text-lg font-medium text-foreground mb-1.5">Send a Message</h3>
                        <p className="text-sm text-muted-foreground leading-[1.6]">Prefer to write? Fill out the form and I'll get back to you within 24 hours.</p>
                    </div>
                    <form className="space-y-3 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Full Name" className="w-full bg-background/50 border border-border/50 rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none hover:border-border/80 focus:border-border transition-all ease-in-out" required name="name" />
                        <input type="email" placeholder="Email Address" className="w-full bg-background/50 border border-border/50 rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none hover:border-border/80 focus:border-border transition-all ease-in-out" required name="email" />
                        <textarea rows="4" name="message" placeholder="Your Message" className="w-full bg-background/50 border border-border/50 rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none hover:border-border/80 focus:border-border transition-all ease-in-out resize-none flex-1" required></textarea>
                        <button type="submit" className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-background border border-border/50 hover:bg-accent/80 hover:border-border/80 text-foreground text-sm font-medium rounded-lg transition-all ease-out duration-200 group disabled:opacity-50 disabled:cursor-not-allowed">
                            <span>Send Message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="group-hover:translate-x-0.5 transition-transform ease-out" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
