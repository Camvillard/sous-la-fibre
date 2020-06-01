import React from "react"
import styled from "styled-components"

type PodcatsWidgetProps = {
  podcastId: string
}
export const PodcastWidget = ({ podcastId }: PodcatsWidgetProps) => {
  return (
    <iframe
      frameBorder="0"
      height="201px"
      width="100%"
      src={`https://widget.ausha.co/index.html?chanId=bYd7gtvKvZMr&showId=b35E8fD5jV4P&color=%2372238e&display=horizontal&v=2&height=201px&podcastId=${podcastId}`}
    ></iframe>
  )
}
