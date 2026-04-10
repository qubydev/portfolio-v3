'use client'

import React, { useState } from 'react'
import { Calendar, Mail, ArrowUpRight, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { FiLinkedin } from "react-icons/fi";

export default function Contact() {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        
        const form = e.target;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'Something went wrong');
            }

            setStatus('success');
            form.reset();
            
            // Return to idle after a few seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            
            // Return to idle after a few seconds
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className="mt-20" id="contact">
            <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Let's Work Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="font-geist px-6 sm:px-6 py-5 sm:py-5 rounded-xl bg-card/70 border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200 flex flex-col">
                    <div className="mb-4 sm:mb-5">
                        <h3 className="text-lg font-medium text-foreground mb-1.5">Get in Touch</h3>
                        <p className="text-sm text-muted-foreground leading-[1.6]">Choose your preferred method to connect and let's discuss your project.</p>
                    </div>
                    <div className="space-y-3">
                        <a href="https://cal.com/qubydev/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-lg bg-background/50 border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200 ease-out group">
                            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                                <Calendar className='size-4.5' />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm text-foreground/80 mb-0.5">Schedule a free call</p>
                                <p className="text-[10px] sm:text-xs text-muted-foreground/60">30-minute strategy session</p>
                            </div>
                            <ArrowUpRight className='size-3.5 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors' />
                        </a>

                        <a href="mailto:malay88patra@gmail.com" className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-lg bg-background/50 border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200 ease-out group">
                            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                                <Mail className='size-4.5' />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm text-foreground/80 mb-0.5 truncate">malay88patra@gmail.com</p>
                                <p className="text-[10px] sm:text-xs text-muted-foreground/60">Quick inquiries &amp; questions</p>
                            </div>
                            <ArrowUpRight className='size-3.5 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors' />
                        </a>

                        <a href="https://www.linkedin.com/in/qubydev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-lg bg-background/50 border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200 ease-out group">
                            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                                <FiLinkedin className='size-4.5' />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm text-foreground/80 mb-0.5">Connect on LinkedIn</p>
                                <p className="text-[10px] sm:text-xs text-muted-foreground/60">Follow for updates &amp; insights</p>
                            </div>
                            <ArrowUpRight className='size-3.5 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors' />
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
                    <form className="space-y-3 flex-1 flex flex-col" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full Name" disabled={status === 'loading' || status === 'success'} className="w-full bg-background/50 border border-border/50 rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none hover:border-border/80 focus:border-border transition-all ease-in-out disabled:opacity-50" required name="name" />
                        <input type="email" placeholder="Email Address" disabled={status === 'loading' || status === 'success'} className="w-full bg-background/50 border border-border/50 rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none hover:border-border/80 focus:border-border transition-all ease-in-out disabled:opacity-50" required name="email" />
                        <textarea rows="4" name="message" placeholder="Your Message" disabled={status === 'loading' || status === 'success'} className="w-full bg-background/50 border border-border/50 rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none hover:border-border/80 focus:border-border transition-all ease-in-out resize-none flex-1 disabled:opacity-50" required></textarea>
                        <button type="submit" disabled={status === 'loading' || status === 'success'} className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-background border border-border/50 hover:bg-accent/80 hover:border-border/80 text-foreground text-sm font-medium rounded-lg transition-all ease-out duration-200 group disabled:opacity-50 disabled:cursor-not-allowed">
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    <span>Sending...</span>
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span className="text-green-500">Message Sent!</span>
                                </>
                            ) : status === 'error' ? (
                                <>
                                    <XCircle className="h-4 w-4 text-red-500" />
                                    <span className="text-red-500">Failed to Send (Retry)</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="group-hover:translate-x-0.5 transition-transform ease-out" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
