import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '../lib/blog'

export const metadata: Metadata = {
    title: 'Engineering Blog | Muhamad Rizal Fikri',
    description: 'Technical articles, architectural guides, and competitive programming notes on Flutter, Kotlin, Node.js, Express, and IoT by Muhamad Rizal Fikri.',
    alternates: {
        canonical: 'https://www.rizll.tech/blog',
    },
    openGraph: {
        title: 'Engineering Blog | Muhamad Rizal Fikri',
        description: 'Technical articles, architectural guides, and engineering notes by Muhamad Rizal Fikri.',
        url: 'https://www.rizll.tech/blog',
        type: 'website',
        locale: 'id_ID',
        images: [
            {
                url: 'https://www.rizll.tech/api/og',
                width: 1200,
                height: 630,
                alt: 'Muhamad Rizal Fikri Engineering Blog',
            },
        ],
    },
}

export default function BlogIndexPage() {
    const posts = getAllPosts()

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://www.rizll.tech/#organization',
                name: 'Muhamad Rizal Fikri',
                url: 'https://www.rizll.tech',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Bandung',
                    addressRegion: 'West Java',
                    addressCountry: 'ID',
                },
                sameAs: [
                    'https://github.com/zall18',
                    'https://www.linkedin.com/in/muhamad-rizal-fikri-a77b13250',
                    'https://www.instagram.com/rizlll_/',
                ],
                knowsAbout: [
                    'Mobile Application Development', 'Flutter', 'Kotlin',
                    'Backend Development', 'Node.js', 'Laravel', 'Next.js',
                    'REST API', 'IoT', 'ESP32',
                ],
            },
            {
                '@type': 'Person',
                '@id': 'https://www.rizll.tech/#person',
                name: 'Muhamad Rizal Fikri',
                url: 'https://www.rizll.tech',
                jobTitle: 'Backend & Mobile Developer',
                sameAs: [
                    'https://github.com/zall18',
                    'https://www.linkedin.com/in/muhamad-rizal-fikri-a77b13250',
                    'https://www.instagram.com/rizlll_/',
                ],
            },
            {
                '@type': 'WebSite',
                '@id': 'https://www.rizll.tech/#website',
                name: 'Muhamad Rizal Fikri | Web & Mobile Developer Portfolio',
                url: 'https://www.rizll.tech',
                inLanguage: 'id',
                publisher: { '@id': 'https://www.rizll.tech/#organization' },
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://www.rizll.tech',
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Blog',
                        item: 'https://www.rizll.tech/blog',
                    },
                ],
            },
            {
                '@type': 'Blog',
                '@id': 'https://www.rizll.tech/blog/#blog',
                name: 'Muhamad Rizal Fikri Engineering Blog',
                description: 'Articles, technical tutorials, and engineering notes on Flutter, Kotlin, Node.js, and IoT.',
                url: 'https://www.rizll.tech/blog',
                author: {
                    '@id': 'https://www.rizll.tech/#person',
                },
                blogPost: posts.map((post) => ({
                    '@type': 'BlogPosting',
                    headline: post.title,
                    description: post.description,
                    datePublished: post.date,
                    url: `https://www.rizll.tech/blog/${post.slug}`,
                    author: {
                        '@id': 'https://www.rizll.tech/#person',
                    },
                })),
            },
        ],
    }

    return (
        <main className="min-h-screen bg-[var(--background)] py-12 px-4 md:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header Navigation */}
            <nav className="max-w-4xl mx-auto mb-12 flex items-center justify-between" aria-label="Blog navigation">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase px-4 py-2 bg-[var(--card-yellow)] text-[var(--shadow-dark)] border-2 border-[var(--shadow-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                    ← Return to Portfolio
                </Link>
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--card-pink)] bg-[var(--shadow-dark)]/5 px-3 py-1 border border-[var(--shadow-dark)]">
                    💾 POSTS_DIR: {posts.length} FILES
                </div>
            </nav>

            {/* Section Header */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="inline-block text-xs font-bold tracking-widest text-[var(--card-pink)] uppercase bg-[var(--card-yellow)] px-3 py-1 border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] mb-4">
                    ★ TECHNICAL WRITING &amp; LOGS ★
                </span>
                <h1 className="section-header">Engineering Blog</h1>
                <p className="text-[var(--text-dark)] mt-6 text-sm md:text-base max-w-2xl mx-auto opacity-75 leading-relaxed">
                    In-depth articles, production architectural blueprints, and competition insights written by Muhamad Rizal Fikri.
                </p>
            </div>

            {/* Question-format intro for AI citability */}
            <section className="max-w-4xl mx-auto mb-12">
                <h2 className="text-lg font-bold text-[var(--text-dark)] mb-2">
                    What topics does this Engineering Blog cover?
                </h2>
                <p className="text-sm text-[var(--text-dark)] opacity-80 leading-relaxed">
                    This blog covers technical deep-dives on Flutter clean architecture, Kotlin Android development,
                    Node.js and Express.js backend systems, IoT integrations with ESP32 and Antares, and competitive
                    programming strategies from LKS (Lomba Kompetensi Siswa) national competitions.
                </p>
            </section>

            {/* Articles List */}
            <div className="max-w-4xl mx-auto space-y-8">
                {posts.map((post, idx) => (
                    <article
                        key={post.slug}
                        className="dialog-box p-6 md:p-8 pt-10 md:pt-12 group hover:shadow-[10px_10px_0px_0px_var(--card-pink)] transition-all duration-300"
                    >
                        {/* Title Bar */}
                        <span className="absolute top-0 left-3 text-white text-xs font-bold z-10 leading-[28px]">
                            📄 ARTICLE_{String(idx + 1).padStart(2, '0')}.md
                        </span>

                        {/* Metadata row */}
                        <div className="flex flex-wrap items-center gap-3 mb-3 text-xs">
                            <span className="px-2.5 py-0.5 font-bold uppercase bg-[var(--card-yellow)] text-[var(--shadow-dark)] border border-[var(--shadow-dark)]">
                                {post.category}
                            </span>
                            <time dateTime={post.date} className="font-semibold text-gray-500">
                                📅 {post.date}
                            </time>
                            <span className="font-semibold text-gray-500">
                                ⏱️ {post.readTime}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl md:text-2xl font-bold text-[var(--text-dark)] mb-3 group-hover:text-[var(--card-pink)] transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-base text-[var(--text-dark)] opacity-80 leading-relaxed mb-5">
                            {post.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-dashed border-[var(--shadow-dark)]/20">
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-0.5 bg-[var(--card-blue)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Read More Link */}
                            <Link
                                href={`/blog/${post.slug}`}
                                className="retro-btn text-xs md:text-sm inline-flex items-center gap-2"
                            >
                                <span>Read Article</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {/* Footer note */}
            <div className="max-w-4xl mx-auto text-center mt-16 text-xs text-[var(--text-dark)] opacity-60">
                © 2026 Muhamad Rizal Fikri · Built for developers &amp; AI discovery
            </div>
        </main>
    )
}
