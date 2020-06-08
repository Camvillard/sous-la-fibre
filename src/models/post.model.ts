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
}

type FeaturedMedia = {
  id: string
  source_url: string
}