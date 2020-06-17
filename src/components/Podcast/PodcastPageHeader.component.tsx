import React from "react"
import { MainTitle } from "../Headers/Headers.ui"
import { PageHeaderWrapper, PodcastEpisode } from "./PodcastPage.ui"

type TPodcastPageHeader = {
  title: string
  episode: number
}

export const PodcastPageHeader = ({ title, episode }: TPodcastPageHeader) => {
  return (
    <PageHeaderWrapper>
      <PodcastEpisode>épisode {episode}</PodcastEpisode>
      <MainTitle>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </MainTitle>
    </PageHeaderWrapper>
  )
}
