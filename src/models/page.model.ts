import { PodcastData } from "./podcast.model"
import { TSiteData } from "./site.model"

export type TPageData = {
  allWordpressWpPodcast?: any
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
