import { PodcastData } from "./podcast.model"
import { TSiteData } from "./site.model"
import { WordpressEdges, WordpressPost } from "./post.model"

export type PageData = {
  allWordpressWpPodcast?: any
  allWordpressPost?: WordpressEdges
  wordpressWpPodcast?: PodcastData
  wordpressPost?: WordpressPost
  site: TSiteData
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
