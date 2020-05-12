import React from "react"
import styled from "styled-components"
import { themeColors } from "../../theme/theme-variables"
import { TFeaturedMedia } from "../../models/podcast.model"

const { mediumGray, lightGray, gray } = themeColors

type TPodcastPageHeader = {
  title: string
  episode: number
  thumbnail: TFeaturedMedia
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
`
export const PodcastPageHeader = ({
  title,
  episode,
  thumbnail,
}: TPodcastPageHeader) => {
  return (
    <>
      <PodcastEpisode>épisode {episode}</PodcastEpisode>
      <PodcastThumbnail src={thumbnail.source_url} alt={thumbnail.alt_text} />
      <PodcastTitle>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </PodcastTitle>
    </>
  )
}
