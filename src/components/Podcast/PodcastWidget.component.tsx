import React from "react"
import styled from "styled-components"
import { PodcastPlayer } from "./PodcastPage.ui"

export type Orientation = "vertical" | "horizontal"

type PodcatsWidgetProps = {
  podcastId: string
  widgetOrientation?: Orientation
}
export const PodcastWidget = ({
  podcastId,
  widgetOrientation,
}: PodcatsWidgetProps) => {
  const height = widgetOrientation === "vertical" ? 470 : 180
  const width = widgetOrientation === "vertical" ? 295 : 510
  return (
    <PodcastPlayer
      frameBorder="0"
      height={`${height}px`}
      width={`${width}px`}
      src={`https://widget.ausha.co/index.html?chanId=bYd7gtvKvZMr&showId=b35E8fD5jV4P&color=%2372238e&display=${widgetOrientation}&v=2&height=${height}px&podcastId=${podcastId}`}
    ></PodcastPlayer>
  )
}
