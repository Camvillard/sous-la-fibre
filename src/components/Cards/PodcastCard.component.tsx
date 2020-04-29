import React from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { Header3 } from "../Headers/Headers.ui"
import { DiamondButton } from "../Buttons/DiamondButton.component"
import { placeholders } from "../../helpers/placeholders"
import { Excerpt } from "./Cards.ui"
import { MainContainer } from "../Containers/Containers.ui"
import { Link } from "gatsby"
import { TPodcastData } from "../../models/podcast.model"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

const { mediumBlue, mediumGray, darkGray } = themeColors
const { two } = placeholders

const PodcastCardWrapper = styled.div`
  @media (min-width: ${mdScreen}) {
    display: flex;
    align-items: center;
    justify=content: flex-start;
    max-width: 70vw;
    margin: 32px 0 64px 8vw;
  }
`

const ThumbnailContainer = styled(MainContainer)`
  @media (min-width: ${mdScreen}) {
    width: auto;
  }
`

const Episode = styled.span`
  position: relative;
  top: -64px;
  z-index: 100;
  padding: 4px 3vw 4px 6vw;
  text-transform: uppercase;
  color: white;
  font-size: 1.4rem;
  background: ${mediumBlue};
  font-weight: 400;
  @media (min-width: ${mdScreen}) {
    padding: 0;
    background: none;
    color: ${mediumBlue};
    top: 0;
    margin-top: 0;
  }
`

const PodcastName = styled(Header3)`
  font-size: 2rem;
  max-width: 520px;
  color: ${darkGray};
`

const PodcastInfoSection = styled.div`
  @media (min-width: ${mdScreen}) {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const PodcastText = styled.div``

const PodcastThumbnail = styled.img`
  @media (min-width: ${mdScreen}) {
    width: 25vw;
    height: 25vw;
  }
`
type TPodcastCardProps = {
  podcast: TPodcastData
  key: string
}
export const PodcastCard = ({ podcast }: TPodcastCardProps) => {
  const { id, slug, title, content } = podcast
  const isDesktop = useMediaQuery({
    query: `(min-device-width: ${lgScreen})`,
  })

  return (
    <PodcastCardWrapper>
      <ThumbnailContainer top={"0"} bottom={"0"}>
        <PodcastThumbnail src={two} alt="placeholder kitten" />
      </ThumbnailContainer>
      {!isDesktop && <Episode>Épisode 3</Episode>}
      <MainContainer top={isDesktop ? "-40px" : "-12px"} bottom={"0"}>
        <PodcastInfoSection>
          {isDesktop && <Episode>Épisode 3</Episode>}
          <PodcastText>
            <Link to={slug}>
              <PodcastName>
                <span dangerouslySetInnerHTML={{ __html: title }} />
              </PodcastName>
            </Link>
            <Excerpt>
              <span dangerouslySetInnerHTML={{ __html: content }} />
            </Excerpt>
          </PodcastText>
          <DiamondButton />
        </PodcastInfoSection>
      </MainContainer>
    </PodcastCardWrapper>
  )
}
