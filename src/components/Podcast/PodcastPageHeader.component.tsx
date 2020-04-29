import React from "react"
import styled from "styled-components"
import { themeColors } from "../../theme/theme-variables"

const { mediumGray, lightGray, gray } = themeColors

type TPodcastPageHeader = {
  title: string
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

export const PodcastPageHeader = ({ title }: TPodcastPageHeader) => {
  return (
    <>
      <PodcastEpisode>épisode 1</PodcastEpisode>
      <PodcastTitle>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </PodcastTitle>
    </>
  )
}
