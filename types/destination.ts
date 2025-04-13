export interface Destination {
  id: string
  title: string
  slug: string
  category: string
  location: string
  image: string
  shortDescription: string
  description: string
  highlights?: string[]
  bestTime?: string
  tourCount: number
  relatedTourSlugs: string[]
}
