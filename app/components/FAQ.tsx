'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQS } from '../constants/faq'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleItem = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx)
    }

    return (
        <section id="faq" className="relative py-20 px-4 md:px-8 overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="section-header">Frequently Asked Questions</h2>
                <p className="text-[var(--text-dark)] mt-6 text-sm opacity-70 uppercase tracking-widest">
                    ▸ FAQ.DAT ▸ Quick answers &amp; factual overview ▸ Knowledge Base
                </p>
            </motion.div>

            {/* FAQ List */}
            <div className="max-w-3xl mx-auto space-y-4">
                {FAQS.map((faq, index) => {
                    const isOpen = openIndex === index

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="dialog-box p-0 overflow-hidden"
                        >
                            {/* Question Header Button */}
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--background)]/50 transition-colors"
                                aria-expanded={isOpen}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-[0.65rem] font-bold px-2 py-0.5 bg-[var(--card-pink)] text-white border border-[var(--shadow-dark)] uppercase">
                                        {faq.category}
                                    </span>
                                    <span className="text-base md:text-lg font-bold text-[var(--text-dark)]">
                                        {faq.question}
                                    </span>
                                </div>
                                <span className="text-lg font-bold text-[var(--card-pink)] shrink-0 w-6 h-6 flex items-center justify-center border-2 border-[var(--shadow-dark)] bg-[var(--card-yellow)] shadow-[2px_2px_0px_0px_var(--shadow-dark)]">
                                    {isOpen ? '−' : '+'}
                                </span>
                            </button>

                            {/* Answer Accordion */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden border-t-2 border-dashed border-[var(--shadow-dark)]/20 bg-[var(--background)]/30"
                                    >
                                        <div className="p-4 md:p-5 pt-3 text-sm md:text-base text-[var(--text-dark)] leading-relaxed opacity-90">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )
                })}
            </div>

            {/* Decorative retro pixels */}
            <div className="absolute top-12 left-10 w-3 h-3 bg-[var(--card-pink)] opacity-30" />
            <div className="absolute bottom-16 right-10 w-4 h-4 bg-[var(--card-blue)] opacity-25" />
        </section>
    )
}
