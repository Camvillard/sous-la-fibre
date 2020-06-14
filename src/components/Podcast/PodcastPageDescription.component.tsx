import React from "react"
import styled from "styled-components"
import { themeBreakpoints } from "../../theme/theme-variables"
import { PodcastPageFooter } from "./PodcastPageFooter.component"
import { AcfData } from "../../models/podcast.model"

const { smScreen, mdScreen } = themeBreakpoints

const PageDescriptionWrapper = styled.div`
  @media (min-width: ${smScreen}) {
    grid-column: 1 / span 1;
    margin-top: 15px;
  }
`

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
