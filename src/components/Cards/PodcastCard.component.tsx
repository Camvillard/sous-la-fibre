import React, { useState } from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { Header3 } from "../Headers/Headers.ui"
import { DiamondButton } from "../Buttons/DiamondButton.component"
import { placeholders } from "../../helpers/placeholders"
import { Excerpt } from "./Cards.ui"
import { MainContainer } from "../Containers/Containers.ui"
import { PodcastModal } from "../PodcastModal/PodcastModal.component"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

const { mediumBlue, mediumGray } = themeColors
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

export const PodcastCard = () => {
  const isDesktop = useMediaQuery({
    query: `(min-device-width: ${lgScreen})`,
  })

  const [modalIsOpen, toggleModal] = useState(false)

  return (
    <>
      <PodcastCardWrapper>
        <ThumbnailContainer top={"0"} bottom={"0"}>
          <PodcastThumbnail src={two} alt="placeholder kitten" />
        </ThumbnailContainer>
        {!isDesktop && <Episode>Épisode 3</Episode>}
        <MainContainer top={isDesktop ? "0" : "-40px"} bottom={"0"}>
          <PodcastInfoSection>
            {isDesktop && <Episode>Épisode 3</Episode>}
            <PodcastText>
              <PodcastName>
                un titre que je ne connais pas encore mais qui viendra bientôt
              </PodcastName>
              <Excerpt>
                abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
                L'artiste nous dévoile, entre autres, quelques morceaux de son
                univers nostalgique et sensible, elle nous parle de ses
                aspirations, de son désir d'exprimer des réalités parfois
                douloureuses, de ses débuts avec le Polaroid et de sa série
                documentaire Fovea à l'argentique noir et blanc qui met en
                lumière des jeunes aveugles et malvoyants du Québec.
              </Excerpt>
            </PodcastText>
            <DiamondButton toggleModal={() => toggleModal(!modalIsOpen)} />
          </PodcastInfoSection>
        </MainContainer>
      </PodcastCardWrapper>
      {modalIsOpen && (
        <PodcastModal
          isOpen={modalIsOpen}
          closeModal={() => toggleModal(false)}
        />
      )}
    </>
  )
}
