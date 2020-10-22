import React from "react"
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
  const height = widgetOrientation === "vertical" ? 520 : 220
  const width = widgetOrientation === "vertical" ? 295 : 510
  return (
    <PodcastPlayer
      frameBorder="0"
      height={`${height}px`}
      width={`${width}px`}
      src={`https://player.ausha.co/index.html?showId=b35E8fD5jV4P&color=%2372238e&podcastId=${podcastId}&v=3&playerId=ausha-sanx`}
    ></PodcastPlayer>
  )
}
