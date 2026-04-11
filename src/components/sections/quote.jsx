'use client'

import React, { useState, useEffect } from 'react'
import { IoMdQuote } from "react-icons/io";

export default function Quote() {
    const [quote, setQuote] = useState({
        text: "A journey of a thousand miles begins with a single step, but the right direction matters most.",
        author: "Lao Tzu"
    });

    useEffect(() => {
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
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-md">
                <IoMdQuote className="text-muted-foreground size-4 mt-0.5 shrink-0" />
                <div>
                    <p className="text-sm text-foreground/80 leading-relaxed">{quote.text}</p>
                    <p className="text-xs text-muted-foreground/60 mt-1.5">· {quote.author}</p>
                </div>
            </div>
        </section>
    )
}
