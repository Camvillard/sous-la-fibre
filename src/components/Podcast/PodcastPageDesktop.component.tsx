import React from "react"
import styled from "styled-components"

import { TPodcastData } from "../../models/podcast.model"
import { PodcastPageWrapper, PodcastInnerWrapper } from "./PodcastPage.ui"
import { PodcastPageBack } from "./PodcastPageBack.component"
import { PodcastPageHeader } from "./PodcastPageHeader.component"
import { PodcastPageDescription } from "./PodcastPageDescription.component"
import { PodcastPageLinks } from "./PodcastPageLinks.component"
import { PodcastPageFooter } from "./PodcastPageFooter.component"
import { GridContainer } from "../Containers/Containers.ui"
import { PodcastThumbnail } from "./PodcastpageThumbnail.ui"

const PodcastGridContent = styled(GridContainer)`
  grid-template-columns: 2fr 1fr;
  grid-gap: 24px;
`

interface IPodcastPageProps {
  podcast: TPodcastData
  episode: number
}

export const PodcastPageDesktop = ({ podcast, episode }: IPodcastPageProps) => {
  const { title, featured_media, content, acf } = podcast
  const { source_url: src, alt_text: alt } = featured_media
  return (
    <PodcastPageWrapper>
      <PodcastInnerWrapper>
        <PodcastPageBack />
        <PodcastGridContent>
          <div>
            <PodcastPageHeader
              title={title}
              episode={episode}
              thumbnail={featured_media}
            />
            <PodcastPageDescription content={content} />
            <PodcastPageFooter acf={acf} />
          </div>
          <div>
            <PodcastThumbnail src={src} alt={alt} />
            <PodcastPageLinks links={acf} />
          </div>
        </PodcastGridContent>
      </PodcastInnerWrapper>
    </PodcastPageWrapper>
  )
}
