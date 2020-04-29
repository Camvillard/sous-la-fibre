import { TPodcastData } from "./podcast.model"
import { TSiteData } from "./site.model"

export type TPageData = {
  allWordpressWpPodcast?: any
  wordpressWpPodcast?: TPodcastData
  site: TSiteData
}

export interface IPageProps {
  data: TPageData
}
