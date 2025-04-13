export interface Author {
  name: string
  avatar: string
  bio: string
  social?: {
    facebook?: string
    twitter?: string
    linkedin?: string
  }
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string // HTML content
  image: string
  date: string
  author: Author
  category: string
  tags: string[]
  readTime: number
}
