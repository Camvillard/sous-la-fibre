import React from "react"
import styled from "styled-components"

import { TAcfData } from "../../models/podcast.model"

const PodcastFooterWrapper = styled.div`
  margin: 24px 0;
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
  acf: TAcfData
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
