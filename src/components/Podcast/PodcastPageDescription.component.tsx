import React from "react"
import { themeBreakpoints } from "../../theme/theme-variables"
import { PodcastPageFooter } from "./PodcastPageFooter.component"
import { AcfData } from "../../models/podcast.model"
import { PageDescriptionWrapper } from "./PodcastPage.ui"

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
    <PageDescriptionWrapper>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <PodcastPageFooter acf={acf} />
    </PageDescriptionWrapper>
  )
}
