import React from "react"

import { PodcastPageWrapper, PodcastInnerWrapper } from "./PodcastPage.ui"
import { PodcastPageBack } from "./PodcastPageBack.component"
import { PodcastPageHeader } from "./PodcastPageHeader.component"
import { PodcastPageDescription } from "./PodcastPageDescription.component"
import { PodcastPageFooter } from "./PodcastPageFooter.component"
import { PodcastData } from "../../models/podcast.model"
import { PodcastPageMobileLinks } from "./PodcastPageLinks.component"
import { PodcastThumbnail } from "./PodcastpageThumbnail.ui"
import { PodcastWidget } from "./PodcastWidget.component"

interface IPodcastPageProps {
  podcast: PodcastData
  episode: number
}

export const PodcastPageMobile = ({ podcast, episode }: IPodcastPageProps) => {
  const { title, featured_media, content, acf } = podcast
  const { idAusha } = acf
  const { source_url: src, alt_text: alt } = featured_media

  return (
    <PodcastPageWrapper>
      <PodcastInnerWrapper>
        <PodcastPageBack />
        <PodcastThumbnail src={src} alt={alt} />
        <PodcastPageHeader
          title={title}
          episode={episode}
          thumbnail={featured_media}
        />
        <PodcastPageDescription content={content} />
        <PodcastWidget podcastId={idAusha} />
        <PodcastPageMobileLinks links={acf} />
        <PodcastPageFooter acf={acf} />
      </PodcastInnerWrapper>
    </PodcastPageWrapper>
  )
}
