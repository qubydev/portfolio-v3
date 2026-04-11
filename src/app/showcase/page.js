"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SHOWCASE_DATA } from '@/lib/showcase';

function FolderIcon({ className }) {
    return (
        <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M487 423.762v-310.15c0-17.252-12.536-31.238-28-31.238H192C168 82.374 157.5 45 139 45H42c-15 0-28 7.252-28 25.102v353.66C14 441.014 26.536 455 42 455h417c15.464 0 28-13.986 28-31.238"
                fill="#3396d1"
            />
            <rect x={27} y={105} width={447} height={339} rx={28} fill="#fff" />
            <rect x={13} y={127} width={473} height={328} rx={28} fill="url(#a)" />
            <defs>
                <linearGradient
                    id="a"
                    x1={249.5}
                    y1={127}
                    x2={249.5}
                    y2={440.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#b8e4ff" />
                    <stop offset={1} stopColor="#3396d1" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default function Showcase() {
    const [selectedFolder, setSelectedFolder] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter' && selectedFolder) {
                router.push(`/showcase/${selectedFolder}`);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedFolder, router]);

    return (
        <main
            className='px-6 pb-12 pt-36 w-full max-w-3xl mx-auto h-[calc(100vh-5rem)]'
            onClick={() => setSelectedFolder(null)}
        >
            <div className="mb-8">
                <h1 className='text-3xl font-bold capitalize'>Showcase</h1>
                <p className='text-sm text-muted-foreground mt-1 mb-2'>
                    Explore my creations gallery.
                </p>
            </div>
            <div className='flex flex-wrap content-start text-foreground gap-4'>
                {SHOWCASE_DATA.map(folder => {
                    const isSelected = selectedFolder === folder.category;

                    return (
                        <div
                            key={folder.category}
                            tabIndex={0}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (isSelected) {
                                    router.push(`/showcase/${folder.category}`);
                                } else {
                                    setSelectedFolder(folder.category);
                                }
                            }}
                            onDoubleClick={(e) => {
                                e.stopPropagation();
                                router.push(`/showcase/${folder.category}`);
                            }}
                            className={`flex flex-col items-center gap-2 p-3 rounded-md cursor-pointer select-none transition-colors w-28 border outline-none ${isSelected
                                ? 'bg-accent border-border'
                                : 'border-transparent hover:bg-accent/50 focus:bg-accent/50'
                                }`}
                        >
                            <FolderIcon className='size-16 pointer-events-none' />
                            <span
                                className={`text-xs text-center w-full truncate px-1 ${isSelected ? 'text-accent-foreground font-medium' : 'text-muted-foreground'
                                    }`}
                            >
                                {folder.category}
                            </span>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}