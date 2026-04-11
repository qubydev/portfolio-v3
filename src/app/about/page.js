import React from 'react'
import ColoredBadge from '@/components/colored-badge'
import { Code2, MapPin, Mail, Clock, Globe, User2 } from 'lucide-react'
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Button } from '@/components/ui/button'

export default function About() {
    return (
        <main className='px-6 pb-12 pt-36 w-full max-w-3xl mx-auto'>
            <div className='text-2xl sm:text-3xl font-bold tracking-tight'>
                <h1>I solve problems,</h1>
                <h1 className='text-foreground/50'>they call it coding.</h1>
            </div>

            <div className='mt-6 flex flex-col gap-6 text-muted-foreground'>
                <p>
                    I'm Malay Patra, a developer who build solution to the problems I face in my day to day life. I almost never start learning a new technology watcing a tutorial, instead I just find a problem to solve and learn things on the fly. Yes <span className='text-foreground'>"I read docs"</span>.
                </p>

                <p>
                    I'm <ColoredBadge text="Curious" className="bg-cyan-400/10 text-cyan-400" />, <ColoredBadge text="Focused" className="text-blue-400 bg-blue-400/10" />, <ColoredBadge text="Obsessed" className="text-purple-400 bg-purple-400/10" /> and a <ColoredBadge text="Solver" className="text-emerald-400 bg-emerald-400/10" />.
                </p>

                <h2 className='text-2xl font-bold mt-8 text-foreground'>Let's connect</h2>
                <p>
                    Whether you have a problem that needs solving, or you just want to say "Hi" to me, I would love to hear from you.
                </p>

                <div className='flex items-center gap-2 text-foreground'>
                    <a href="/#contact">
                        <Button variant="outline">
                            <Mail className='size-4 mr-1' /> Email
                        </Button>
                    </a>
                    <a href="https://linkedin.com/in/qubydev" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                            <FaLinkedin className='size-4 mr-1' /> LinkedIn
                        </Button>
                    </a>
                    <a href="https://twitter.com/qubydev" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                            <SiX className='size-4 mr-1' /> Twitter
                        </Button>
                    </a>
                </div>
            </div>
        </main>
    )
}
