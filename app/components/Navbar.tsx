'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
    { label: 'About Me!', href: '#about' },
    { label: 'My Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'My Project', href: '#projects' },
    { label: 'Contact Me!', href: '#contact' },
]

const SOCIAL_LINKS = [
    { icon: 'github-icon.png', alt: 'GitHub', href: '#' },
    { icon: 'linkedin-icon.webp', alt: 'LinkedIn', href: '#' },
    { icon: 'ig-icon.jpg', alt: 'Instagram', href: '#' },
    { icon: 'gmail-icon.png', alt: 'Gmail', href: '#' },
]

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            const sections = ['about', 'skills', 'experience', 'projects', 'contact']
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 200) {
                        setActiveSection(`#${id}`)
                        return
                    }
                }
            }
            setActiveSection('')
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileOpen(false)
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-1.5 px-3' : 'py-3 px-4'}`}
            >
                <div
                    className={`
                        bg-[var(--foreground)] border-3 border-[var(--shadow-dark)]
                        shadow-[6px_6px_0px_0px_var(--card-pink)]
                        transition-all duration-300 flex items-center justify-between
                        px-4 py-2
                        ${scrolled
                            ? 'shadow-[4px_4px_0px_0px_var(--card-pink)] backdrop-blur-md bg-[var(--foreground)]/95'
                            : ''
                        }
                    `}
                >
                    {/* Logo — retro box style */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        className="
                            font-bold text-base md:text-lg text-[var(--text-dark)]
                            bg-[var(--card-yellow)] border-2 border-[var(--shadow-dark)]
                            shadow-[3px_3px_0px_0px_var(--shadow-dark)]
                            px-3 py-0.5 cursor-pointer
                            hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)]
                            hover:translate-x-0.5 hover:translate-y-0.5
                            active:shadow-[0px_0px_0px_0px_var(--shadow-dark)]
                            active:translate-x-[3px] active:translate-y-[3px]
                            transition-all duration-100
                            whitespace-nowrap
                        "
                    >
                        ⭐ Rizal Fikri
                    </a>

                    {/* Desktop Nav Items */}
                    <div className="hidden lg:block">
                        <ul className="flex gap-2">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className={`
                                            block px-3 py-1 text-sm font-bold uppercase tracking-wide
                                            border-2 border-[var(--shadow-dark)]
                                            transition-all duration-100
                                            ${activeSection === item.href
                                                ? 'bg-[var(--card-pink)] text-white shadow-[2px_2px_0px_0px_var(--shadow-dark)] translate-x-[1px] translate-y-[1px]'
                                                : 'bg-[var(--card-blue)] text-[var(--text-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--card-pink)] hover:text-white'
                                            }
                                            active:shadow-[0px_0px_0px_0px_var(--shadow-dark)]
                                            active:translate-x-[3px] active:translate-y-[3px]
                                        `}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop Social Icons */}
                    <div className="hidden lg:block">
                        <ul className="flex gap-2">
                            {SOCIAL_LINKS.map((link) => (
                                <li key={link.alt}>
                                    <a
                                        href={link.href}
                                        className="
                                            block w-8 h-8 p-1.5
                                            bg-[var(--card-pink)] border-2 border-[var(--shadow-dark)]
                                            shadow-[3px_3px_0px_0px_var(--shadow-dark)]
                                            hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)]
                                            hover:translate-x-0.5 hover:translate-y-0.5
                                            hover:bg-[var(--card-blue)]
                                            active:shadow-[0px_0px_0px_0px_var(--shadow-dark)]
                                            active:translate-x-[3px] active:translate-y-[3px]
                                            transition-all duration-100
                                        "
                                    >
                                        <img src={link.icon} alt={link.alt} className="w-full h-full object-contain" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="
                            lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1
                            bg-[var(--card-blue)] border-2 border-[var(--shadow-dark)]
                            shadow-[3px_3px_0px_0px_var(--shadow-dark)]
                            hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)]
                            hover:translate-x-0.5 hover:translate-y-0.5
                            transition-all duration-100 cursor-pointer
                        "
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block w-4 h-[2px] bg-[var(--shadow-dark)]"
                        />
                        <motion.span
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-4 h-[2px] bg-[var(--shadow-dark)]"
                        />
                        <motion.span
                            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block w-4 h-[2px] bg-[var(--shadow-dark)]"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu — dialog box style */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[4.5rem] left-3 right-3 z-40 lg:hidden"
                    >
                        <div className="dialog-box p-5 pt-10">
                            <span className="absolute top-0 left-3 text-white text-xs font-bold z-10 leading-[28px]">
                                📋 MENU.exe
                            </span>

                            <ul className="flex flex-col gap-2 mb-4">
                                {NAV_ITEMS.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleNavClick(e, item.href)}
                                            className={`
                                                block text-center px-3 py-2 font-bold text-sm uppercase tracking-wide
                                                border-2 border-[var(--shadow-dark)]
                                                transition-all duration-100
                                                ${activeSection === item.href
                                                    ? 'bg-[var(--card-pink)] text-white shadow-[2px_2px_0px_0px_var(--shadow-dark)]'
                                                    : 'bg-[var(--card-blue)] text-[var(--text-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] hover:bg-[var(--card-pink)] hover:text-white hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)] hover:translate-x-0.5 hover:translate-y-0.5'
                                                }
                                            `}
                                        >
                                            ▸ {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="pixel-divider mb-3" />

                            <ul className="flex gap-2 justify-center">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.alt}>
                                        <a
                                            href={link.href}
                                            className="
                                                block w-9 h-9 p-1.5
                                                bg-[var(--card-pink)] border-2 border-[var(--shadow-dark)]
                                                shadow-[3px_3px_0px_0px_var(--shadow-dark)]
                                                hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)]
                                                hover:translate-x-0.5 hover:translate-y-0.5
                                                hover:bg-[var(--card-blue)]
                                                transition-all duration-100
                                            "
                                        >
                                            <img src={link.icon} alt={link.alt} className="w-full h-full object-contain" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}