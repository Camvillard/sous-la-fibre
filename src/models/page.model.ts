import { PodcastData } from "./podcast.model"
import { TSiteData } from "./site.model"
import { WordpressEdges } from "./post.model"

export type TPageData = {
  allWordpressWpPodcast?: any
  allWordpressPost?: WordpressEdges
  wordpressWpPodcast?: PodcastData
  site: TSiteData
}

export type TPageContext = {
  episode: number
  id: string
  slug: string
}

export interface IPageProps {
  data: TPageData
  pathContext: TPageContext
}
