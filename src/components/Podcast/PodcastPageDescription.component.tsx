import React from "react"
import { themeBreakpoints } from "../../theme/theme-variables"
import { PodcastPageFooter } from "./PodcastPageFooter.component"
import { AcfData } from "../../models/podcast.model"
import { SingleContent } from "../Single/Single.ui"

const { smScreen, mdScreen } = themeBreakpoints

type TPodcastPageDescription = {
  content: string
  acf: AcfData
}
export const PodcastPageDescription = ({
  content,
  acf,
}: TPodcastPageDescription) => {
  return (
    <SingleContent>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <PodcastPageFooter acf={acf} />
    </SingleContent>
  )
}
