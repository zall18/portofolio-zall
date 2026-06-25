'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const SOCIAL_LINKS = [
    { icon: 'github-icon.png', alt: 'GitHub', href: '#', label: 'GitHub' },
    { icon: 'linkedin-icon.webp', alt: 'LinkedIn', href: '#', label: 'LinkedIn' },
    { icon: 'ig-icon.jpg', alt: 'Instagram', href: '#', label: 'Instagram' },
    { icon: 'gmail-icon.png', alt: 'Gmail', href: '#', label: 'Email' },
]

export default function ContactMe() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Backend integration placeholder — user will add their own
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <section id="contact" className="relative py-20 px-4 md:px-8 overflow-hidden retro-grid">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="section-header">
                    Want to Team Up?
                </h2>
                <p className="text-[var(--text-dark)] mt-6 text-sm opacity-70 uppercase tracking-widest">
                    ▸ Insert Coin to Continue ▸ Let&apos;s build something together
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="dialog-box p-6 pt-10">
                        <span className="absolute top-0 left-3 text-white text-xs font-bold z-10 leading-[28px]">
                            ✉️ NEW_MESSAGE.exe
                        </span>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-[var(--text-dark)] uppercase tracking-wider mb-2">
                                    ▸ Player Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="retro-input w-full"
                                    placeholder="Enter your name..."
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-[var(--text-dark)] uppercase tracking-wider mb-2">
                                    ▸ Email Address
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="retro-input w-full"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-[var(--text-dark)] uppercase tracking-wider mb-2">
                                    ▸ Your Message
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="retro-input w-full min-h-[120px] resize-none"
                                    placeholder="Type your message here..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="retro-btn w-full text-center"
                            >
                                {submitted ? '✓ Message Sent!' : '▸ Send Message'}
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Info Panel */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6"
                >
                    {/* Stats Card */}
                    <div className="dialog-box p-6 pt-10">
                        <span className="absolute top-0 left-3 text-white text-xs font-bold z-10 leading-[28px]">
                            📊 STATS.dat
                        </span>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-[var(--text-dark)]">STATUS</span>
                                <span className="text-xs px-2 py-0.5 bg-[var(--card-green)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold">
                                    AVAILABLE
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-[var(--text-dark)]">LOCATION</span>
                                <span className="text-xs text-[var(--text-dark)] opacity-70">Indonesia 🇮🇩</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-[var(--text-dark)]">RESPONSE</span>
                                <span className="text-xs text-[var(--text-dark)] opacity-70">Within 24h ⚡</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-[var(--text-dark)]">COFFEE LVL</span>
                                <span className="text-xs text-[var(--text-dark)]">
                                    <span className="text-[var(--card-pink)]">██████</span>
                                    <span className="opacity-30">████</span>
                                    &nbsp;60%
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="dialog-box p-6 pt-10">
                        <span className="absolute top-0 left-3 text-white text-xs font-bold z-10 leading-[28px]">
                            🔗 LINKS.txt
                        </span>
                        <p className="text-xs font-bold text-[var(--text-dark)] uppercase tracking-wider mb-4">
                            ▸ Find me on
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.alt}
                                    href={link.href}
                                    className="flex items-center gap-3 p-3 bg-[var(--card-blue)]/20 border-2 border-[var(--shadow-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 group"
                                >
                                    <div className="w-6 h-6 flex-shrink-0">
                                        <img src={link.icon} alt={link.alt} className="w-full h-full object-contain" />
                                    </div>
                                    <span className="text-xs font-bold text-[var(--text-dark)] group-hover:text-[var(--card-pink)] transition-colors">
                                        {link.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Fun Quote */}
                    <div className="bg-[var(--card-pink)] border-3 border-[var(--shadow-dark)] shadow-[4px_4px_0px_0px_var(--shadow-dark)] p-4 text-center">
                        <p className="text-white text-sm font-bold">
                            &quot;It&apos;s dangerous to go alone! Take this... 🗡️&quot;
                        </p>
                        <p className="text-white/60 text-xs mt-1">— Every great adventure needs a partner</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
