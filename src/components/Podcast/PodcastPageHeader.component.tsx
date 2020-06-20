import React from "react"
import { PodcastEpisode } from "./PodcastPage.ui"
import { SingleHeaderWrapper, SingleTitle } from "../Single/Single.ui"

type TPodcastPageHeader = {
  title: string
  episode: number
}

export const PodcastPageHeader = ({ title, episode }: TPodcastPageHeader) => {
  return (
    <SingleHeaderWrapper>
      <PodcastEpisode>épisode {episode}</PodcastEpisode>
      <SingleTitle>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </SingleTitle>
    </SingleHeaderWrapper>
  )
}
