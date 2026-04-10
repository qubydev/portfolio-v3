'use client'

import React, { useState, useEffect } from 'react'
import { IoMdQuote } from "react-icons/io";

export default function Quote() {
    const [quote, setQuote] = useState({
        text: "A journey of a thousand miles begins with a single step, but the right direction matters most.",
        author: "Lao Tzu"
    });

    const hasFetched = React.useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        fetch('/api/quote')
            .then(res => {
                if (!res.ok) throw new Error('API unavailable');
                return res.json();
            })
            .then(data => {
                if (data && data.quote) {
                    setQuote({
                        text: data.quote,
                        author: data.author
                    });
                }
            })
            .catch(err => {
                console.error("Error fetching quote:", err)
            });
    }, []);

    return (
        <section className="mt-20">
            <div className="font-geist relative p-4 sm:p-6 rounded-xl bg-card/10 backdrop-blur-lg border border-border/40 transition-all duration-200 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '330px 330px'
                    }}
                />
                <div className="absolute -top-20 -left-20 w-72 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-muted/40 rounded-full blur-3xl"></div>

                <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                        <div className="flex items-start gap-3">
                            <IoMdQuote className='text-muted-foreground size-6' />
                            <div>
                                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-2">{quote.text}</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                                    <p className="text-xs sm:text-sm text-muted-foreground/70">{quote.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
