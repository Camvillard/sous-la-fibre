export type WordpressEdges = {
  edges: WordpressPostNode[]
  totalCount: number
}
export type WordpressPostNode = {
  node: WordpressPost
}

export type WordpressPost = {
  id: string
  title: string
  content: string
  date: string
  featured_media: FeaturedMedia
  slug?: string
  excerpt?: string
  tags?: Tag[]
}

type FeaturedMedia = {
  id: string
  source_url: string
}

type Tag = {
  id: string
  name: string
  slug: string
}
