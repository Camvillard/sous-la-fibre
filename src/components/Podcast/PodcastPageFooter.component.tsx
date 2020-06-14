import React from "react"
import styled from "styled-components"
import { AcfData } from "../../models/podcast.model"
import { themeBreakpoints } from "../../theme/theme-variables"

const { smScreen, mdScreen } = themeBreakpoints

// import { AcfData } from "../../models/podcast.model"

const PodcastFooterWrapper = styled.div`
  @media (min-width: ${smScreen}) {
    grid-column: 1 / span 1;
  }
`
const PodcastFooterInfoWrapper = styled.div`
  margin: 8px 0;
`
const PodcastFooterInfoTitle = styled.p`
  margin: 0;
  font-weight: 600;
`
const PodcastFooterInfoContent = styled.p`
  margin: 0;
  p {
    margin: 0;
  }
`

type TPodcastPageFooter = {
  acf: AcfData
}

export const PodcastPageFooter = ({ acf }: TPodcastPageFooter) => {
  const { musiqueAdditionnelle, noteFinale } = acf
  return (
    <PodcastFooterWrapper>
      <PodcastFooterInfoWrapper>
        <PodcastFooterInfoTitle>
          Création, conception, réalisation :
        </PodcastFooterInfoTitle>
        <PodcastFooterInfoContent>Claire-Marine Beha</PodcastFooterInfoContent>
      </PodcastFooterInfoWrapper>
      <PodcastFooterInfoWrapper>
        <PodcastFooterInfoTitle>
          Musique originale et mixage :
        </PodcastFooterInfoTitle>
        <PodcastFooterInfoContent>
          <a
            href="https://www.juliettebeha.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juliette Beha
          </a>
        </PodcastFooterInfoContent>
      </PodcastFooterInfoWrapper>
      <PodcastFooterInfoWrapper>
        <PodcastFooterInfoTitle>
          Musiques additionnelles :
        </PodcastFooterInfoTitle>
        <PodcastFooterInfoContent>
          <span dangerouslySetInnerHTML={{ __html: musiqueAdditionnelle }} />
        </PodcastFooterInfoContent>
      </PodcastFooterInfoWrapper>
      <PodcastFooterInfoWrapper>
        <PodcastFooterInfoContent>
          <span dangerouslySetInnerHTML={{ __html: noteFinale }} />
        </PodcastFooterInfoContent>
      </PodcastFooterInfoWrapper>
    </PodcastFooterWrapper>
  )
}
