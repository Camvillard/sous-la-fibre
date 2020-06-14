import React from "react"
import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { FeaturedMedia } from "../../models/podcast.model"

const { mediumGray, lightGray, gray } = themeColors
const { smScreen, mdScreen } = themeBreakpoints

type TPodcastPageHeader = {
  title: string
  episode: number
}

const PodcastEpisode = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${gray};
  margin: 0 0 8px;
`
const PodcastTitle = styled.h1`
  font-size: 2.2rem;
  margin: 0;
`

const PageHeaderWrapper = styled.div`
  @media (min-width: ${smScreen}) {
    grid-column: 1 / span 2;
  }
`

export const PodcastPageHeader = ({ title, episode }: TPodcastPageHeader) => {
  return (
    <PageHeaderWrapper>
      <PodcastEpisode>épisode {episode}</PodcastEpisode>
      <PodcastTitle>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </PodcastTitle>
    </PageHeaderWrapper>
  )
}
