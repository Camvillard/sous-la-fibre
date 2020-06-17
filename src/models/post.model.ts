import { FeaturedMedia } from "./media.model"

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
  categories?: Categorie[]
}

type Tag = {
  id: string
  name: string
  slug: string
}

type Categorie = {
  id: string
  name: string
  slug: string
}
