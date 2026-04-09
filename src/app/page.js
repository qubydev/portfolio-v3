import React from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/sections/hero'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'
import Quote from '@/components/sections/quote'
import Activity from '@/components/sections/activity'

export default function Page() {
  return (
    <div>
      <Navbar />

      <main className='px-6 pb-12 pt-36 w-full max-w-3xl mx-auto'>
        <Hero />
        <Activity />
        <Experience />
        <Projects />
        <Contact />
        <Quote />
      </main>
    </div>
  )
}
