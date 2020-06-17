import React from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { Header3 } from "../Headers/Headers.ui"
import { DiamondButton } from "../Buttons/DiamondButton.component"
import { Excerpt } from "./Cards.ui"
import { MainContainer } from "../Containers/Containers.ui"
import { Link } from "gatsby"
import { PodcastData } from "../../models/podcast.model"
import { createExcerpt } from "../../helpers/podcast.helpers"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

const { mediumBlue, mediumGray, darkGray } = themeColors

const PodcastCardWrapper = styled.div`
  margin: 32px 0;
  @media (min-width: ${smScreen}) {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 32px auto 64px;
  }
  @media (min-width: ${mdScreen}) {
    margin-top: 92px;
    align-items: stretch;
    max-width: 82vw;
  }
  @media (min-width: ${lgScreen}) {
    max-width: 72vw;
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
  @media (min-width: ${smScreen}) {
    padding: 0;
    background: none;
    color: ${mediumBlue};
    top: 0;
    margin-top: 0;
  }
`

const PodcastName = styled(Header3)`
  font-size: 2.4rem;
  max-width: 520px;
  color: ${darkGray};
  margin: 12px 0;
  @media (min-width: ${smScreen}) {
    font-size: 2.6rem;
  }
  @media (min-width: ${mdScreen}) {
  }
`

const PodcastInfoSection = styled(MainContainer)`
  @media (min-width: ${smScreen}) {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const PodcastText = styled.div`
  @media (min-width: ${mdScreen}) {
    margin-top: 24px;
  }
`

const PodcastThumbnail = styled.img`
  width: 92vw;
  height: 92vw;
  display: block;
  margin: auto;
  flex-shrink: 1;
  @media (min-width: ${smScreen}) {
    width: 50%;
    height: 50%;
  }
  @media (min-width: ${mdScreen}) {
    width: 44%;
    height: 44%;
  }
`
type PodcastCardProps = {
  podcast: PodcastData
  key: string
  counter: number
}
export const PodcastCard = ({ podcast, counter }: PodcastCardProps) => {
  const { slug, title, content, featured_media } = podcast
  const { source_url: src, alt_text: alt } = featured_media

  const excerpt = createExcerpt(content)

  const isDesktop = useMediaQuery({
    query: `(min-device-width: ${lgScreen})`,
  })
  const isTablet = useMediaQuery({
    query: `(min-device-width: ${smScreen})`,
  })

  return (
    <PodcastCardWrapper>
      <PodcastThumbnail src={src} alt={alt} />
      {!isTablet && <Episode>Épisode {counter}</Episode>}
      <PodcastInfoSection top={isTablet ? "0" : "-12px"} bottom={"0"}>
        <PodcastText>
          {isTablet && <Episode>Épisode {counter}</Episode>}
          <Link to={"/episode/" + slug}>
            <PodcastName>
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </PodcastName>
          </Link>
          <Excerpt>
            <span dangerouslySetInnerHTML={{ __html: excerpt }} />
          </Excerpt>
        </PodcastText>
        <DiamondButton podcastLink={slug} />
      </PodcastInfoSection>
    </PodcastCardWrapper>
  )
}
