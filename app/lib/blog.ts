import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

export interface BlogPostMeta {
    title: string
    slug: string
    date: string
    author: string
    description: string
    tags: string[]
    category: string
    readTime: string
}

export interface BlogPost extends BlogPostMeta {
    contentHtml: string
}

export function getAllPosts(): BlogPostMeta[] {
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const { data } = matter(fileContents)

            return {
                title: data.title || '',
                slug: data.slug || fileName.replace(/\.md$/, ''),
                date: data.date || '',
                author: data.author || 'Muhamad Rizal Fikri',
                description: data.description || '',
                tags: Array.isArray(data.tags) ? data.tags : [],
                category: data.category || 'Engineering',
                readTime: data.readTime || '5 min read',
            } as BlogPostMeta
        })

    // Sort posts by date descending
    return allPostsData.sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
        return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Render markdown to HTML
    const contentHtml = await marked.parse(content)

    return {
        title: data.title || '',
        slug: data.slug || slug,
        date: data.date || '',
        author: data.author || 'Muhamad Rizal Fikri',
        description: data.description || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        category: data.category || 'Engineering',
        readTime: data.readTime || '5 min read',
        contentHtml,
    }
}
