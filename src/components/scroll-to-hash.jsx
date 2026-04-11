'use client'
import { useEffect } from 'react'

export default function ScrollToHash() {
    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            setTimeout(() => {
                const el = document.getElementById(hash.slice(1))
                if (el) el.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        }

        const handleClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]')
            if (!anchor) return
            const hash = anchor.getAttribute('href').slice(1)
            const el = document.getElementById(hash)
            if (el) {
                e.preventDefault()
                el.scrollIntoView({ behavior: 'smooth' })
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    return null
}