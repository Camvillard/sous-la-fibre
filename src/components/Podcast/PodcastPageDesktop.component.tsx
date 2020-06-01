import React from "react"
import styled from "styled-components"

import { PodcastData } from "../../models/podcast.model"
import { PodcastPageWrapper, PodcastInnerWrapper } from "./PodcastPage.ui"
import { PodcastPageBack } from "./PodcastPageBack.component"
import { PodcastPageHeader } from "./PodcastPageHeader.component"
import { PodcastPageDescription } from "./PodcastPageDescription.component"
import { PodcastPageDesktopLInks } from "./PodcastPageLinks.component"
import { PodcastPageFooter } from "./PodcastPageFooter.component"
import { GridContainer } from "../Containers/Containers.ui"
import { PodcastThumbnail } from "./PodcastpageThumbnail.ui"
import { PodcastWidget } from "./PodcastWidget.component"

const PodcastGridContent = styled(GridContainer)`
  grid-template-columns: 2.5fr 1fr;
  grid-gap: 24px;
`

interface IPodcastPageProps {
  podcast: PodcastData
  episode: number
}

export const PodcastPageDesktop = ({ podcast, episode }: IPodcastPageProps) => {
  const { title, featured_media, content, acf } = podcast
  const { idAusha } = acf
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
            <PodcastWidget podcastId={idAusha} />
            <PodcastPageFooter acf={acf} />
          </div>
          <div>
            <PodcastThumbnail src={src} alt={alt} />
            <PodcastPageDesktopLInks links={acf} />
          </div>
        </PodcastGridContent>
      </PodcastInnerWrapper>
    </PodcastPageWrapper>
  )
}
