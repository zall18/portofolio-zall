import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '../../lib/blog'

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return {
            title: 'Article Not Found | Muhamad Rizal Fikri',
        }
    }

    return {
        title: `${post.title} | Muhamad Rizal Fikri`,
        description: post.description,
        authors: [{ name: post.author, url: 'https://www.rizll.tech' }],
        alternates: {
            canonical: `https://www.rizll.tech/blog/${post.slug}`,
            languages: {
                'id': `https://www.rizll.tech/blog/${post.slug}`,
                'en': `https://www.rizll.tech/blog/${post.slug}`,
                'x-default': `https://www.rizll.tech/blog/${post.slug}`,
            },
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            url: `https://www.rizll.tech/blog/${post.slug}`,
            locale: 'id_ID',
            images: [
                {
                    url: 'https://www.rizll.tech/api/og',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: ['https://www.rizll.tech/api/og'],
        },
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

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
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: post.title,
                        item: `https://www.rizll.tech/blog/${post.slug}`,
                    },
                ],
            },
            {
                '@type': 'TechArticle',
                '@id': `https://www.rizll.tech/blog/${post.slug}/#article`,
                headline: post.title,
                description: post.description,
                datePublished: post.date,
                dateModified: post.date,
                image: 'https://www.rizll.tech/api/og',
                author: {
                    '@id': 'https://www.rizll.tech/#person',
                },
                publisher: {
                    '@id': 'https://www.rizll.tech/#organization',
                },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': `https://www.rizll.tech/blog/${post.slug}`,
                },
                keywords: post.tags.join(', '),
            },
        ],
    }

    return (
        <main className="min-h-screen bg-[var(--background)] py-12 px-4 md:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Navigation Header */}
            <nav className="max-w-3xl mx-auto mb-10 flex items-center justify-between" aria-label="Article navigation">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase px-3 py-1.5 bg-[var(--card-yellow)] text-[var(--shadow-dark)] border-2 border-[var(--shadow-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                    ← All Articles
                </Link>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase px-3 py-1.5 bg-[var(--card-blue)] text-[var(--text-dark)] border-2 border-[var(--shadow-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                    Portfolio Home
                </Link>
            </nav>

            {/* Article Container */}
            <article className="max-w-3xl mx-auto dialog-box p-6 md:p-10 pt-12 md:pt-14">
                {/* Title Bar */}
                <span className="absolute top-0 left-3 text-white text-xs font-bold z-10 leading-[28px]">
                    📖 READER_VIEW // {post.slug}.md
                </span>

                {/* Article Header */}
                <header className="mb-8 border-b-2 border-dashed border-[var(--shadow-dark)]/20 pb-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                        <span className="px-2.5 py-0.5 font-bold uppercase bg-[var(--card-pink)] text-white border border-[var(--shadow-dark)]">
                            {post.category}
                        </span>
                        <time dateTime={post.date} className="font-semibold text-gray-500">
                            📅 {post.date}
                        </time>
                        <span className="font-semibold text-gray-500">
                            ⏱️ {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-extrabold text-[var(--text-dark)] leading-tight mb-4">
                        {post.title}
                    </h1>

                    <p className="text-sm md:text-base text-[var(--text-dark)] opacity-80 leading-relaxed italic border-l-4 border-[var(--card-pink)] pl-4 py-1">
                        {post.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-0.5 bg-[var(--card-blue)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Rendered HTML Content */}
                <div
                    className="article-content space-y-4 text-sm md:text-base text-[var(--text-dark)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />

                {/* Author Card Box */}
                <div className="mt-12 pt-6 border-t-2 border-dashed border-[var(--shadow-dark)]/30">
                    <div className="bg-[var(--background)] border-3 border-[var(--shadow-dark)] shadow-[4px_4px_0px_0px_var(--card-pink)] p-5 flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-16 h-16 shrink-0 bg-[var(--card-yellow)] border-2 border-[var(--shadow-dark)] flex items-center justify-center font-bold text-2xl">
                            👨‍💻
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                            <h2 className="font-bold text-base text-[var(--text-dark)]">
                                Written by Muhamad Rizal Fikri
                            </h2>
                            <p className="text-xs text-[var(--text-dark)] opacity-75 mt-1 leading-normal">
                                Information Systems student at Telkom University &amp; competitive software developer. Medallion for Excellence recipient at LKS National 2024.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="retro-btn text-xs uppercase shrink-0"
                        >
                            Contact Author
                        </Link>
                    </div>
                </div>
            </article>

            {/* Back link */}
            <div className="max-w-3xl mx-auto text-center mt-8">
                <Link
                    href="/blog"
                    className="text-xs font-bold uppercase tracking-wider text-[var(--card-pink)] hover:underline"
                >
                    ← Back to all articles
                </Link>
            </div>
        </main>
    )
}
