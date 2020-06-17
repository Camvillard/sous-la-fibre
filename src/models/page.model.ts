import { PodcastData } from "./podcast.model"
import { SiteData } from "./site.model"
import { WordpressEdges, WordpressPost } from "./post.model"
import { FeaturedMedia } from "./media.model"

export type PageData = {
  allWordpressWpPodcast?: any
  allWordpressPost?: WordpressEdges
  wordpressWpPodcast?: PodcastData
  wordpressPost?: WordpressPost
  site: SiteData
}

export type PageContext = {
  episode: number
  id: string
  slug: string
}

export interface PageProps {
  data: PageData
  pathContext: PageContext
}

export type WordpressPage = {
  content: string
  id: string
  title: string
  featured_media: FeaturedMedia
}
