import React from "react"
import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { FeaturedMedia } from "../../models/podcast.model"

const { mediumGray, lightGray, gray } = themeColors
const { mdScreen } = themeBreakpoints

type TPodcastPageHeader = {
  title: string
  episode: number
  thumbnail: FeaturedMedia
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
const PodcastThumbnail = styled.img`
  width: 100%;
  margin: 16px auto 8px;
  @media (min-width: ${mdScreen}) {
    width: 80%;
  }
`
export const PodcastPageHeader = ({
  title,
  episode,
  thumbnail,
}: TPodcastPageHeader) => {
  return (
    <>
      <PodcastEpisode>épisode {episode}</PodcastEpisode>
      <PodcastTitle>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </PodcastTitle>
    </>
  )
}
