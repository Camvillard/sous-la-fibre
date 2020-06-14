import React from "react"
import styled from "styled-components"

const PodcastPlayer = styled.iframe`
  align-self: center;
`

type PodcatsWidgetProps = {
  podcastId: string
}
export const PodcastWidget = ({ podcastId }: PodcatsWidgetProps) => {
  return (
    <PodcastPlayer
      frameBorder="0"
      height="470px"
      width="295px"
      src={`https://widget.ausha.co/index.html?chanId=bYd7gtvKvZMr&showId=b35E8fD5jV4P&color=%2372238e&display=vertical&v=2&height=470px&podcastId=${podcastId}`}
    ></PodcastPlayer>
  )
}
