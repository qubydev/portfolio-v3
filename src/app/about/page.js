import React from 'react'
import ColoredBadge from '@/components/colored-badge'
import { Code2, MapPin, Mail, Clock, Globe, User2 } from 'lucide-react'
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Button } from '@/components/ui/button'

const Hl = ({ children }) => <span className='text-foreground font-medium'>{children}</span>

export default function About() {
    return (
        <main className='px-6 pb-12 pt-36 w-full max-w-3xl mx-auto'>
            <div className='text-2xl sm:text-3xl font-bold tracking-tight'>
                <h1>I solve problems,</h1>
                <h1 className='text-foreground/50'>they call it coding.</h1>
            </div>

            <div className='mt-6 flex flex-col gap-6 text-muted-foreground'>
                <p>
                    I'm <Hl>Malay Patra</Hl>, a developer who builds solutions to the problems I face in my day-to-day life. I almost never start learning a new technology watching a tutorial. Instead, I just find a problem to solve and learn things on the fly. Yes, <Hl>"I read docs"</Hl>.
                </p>

                <p>
                    I'm <ColoredBadge text="Curious" className="bg-cyan-400/10 text-cyan-400" />, <ColoredBadge text="Focused" className="text-blue-400 bg-blue-400/10" />, <ColoredBadge text="Obsessed" className="text-purple-400 bg-purple-400/10" /> and a <ColoredBadge text="Solver" className="text-emerald-400 bg-emerald-400/10" />.
                </p>

                <h2 className='text-2xl font-bold mt-8 text-foreground'>How it started</h2>
                <p>
                    It started in <Hl>2020</Hl>, when I got my first <Hl>Android</Hl> phone in my hand. I was very curious about <Hl>hacking</Hl> (of course I saw that in movies) although I had no idea what it actually was. I am from a small village in <Hl>West Bengal, India</Hl>; hacking or programming both make zero sense to my parents and friends.
                </p>

                <p>The first interesting thing I tried was <Hl>SMS bombing</Hl>, which I did using the <a href="https://termux.dev/" target="_blank" rel="noopener noreferrer" className="link">Termux app</a> downloaded from <a href="https://f-droid.org/" target="_blank" rel="noopener noreferrer" className="link">F-Droid</a>. I tried to see what's inside and I found out that it's some colorful text which is run using <Hl>Python</Hl>. I was very curious about it and I started digging deeper.
                </p>

                <p>And this is exactly how I got into <Hl>programming</Hl>!</p>

                <p>Today, I am a <Hl>Full-Stack developer</Hl>, solving problems I face in my day-to-day life. I have worked with a couple of <Hl>startups</Hl> and founded my own SaaS, <a href="https://adotion.pro" target="_blank" rel="noopener noreferrer" className='link'>Adotion</a>. I have also shipped many <Hl>automation systems</Hl> to clients across the globe during my <Hl>freelancing</Hl> days.</p>

                <p>I <Hl>do not</Hl> personally like to sit and <Hl>watch a course or tutorial</Hl> video for the sake of learning something new; I believe just getting up and trying to <Hl>build something</Hl> teaches me way more than that. Even while you're reading this page, I am most probably debugging something or building a new feature.</p>

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
