import React from "react"
import styled from "styled-components"
import { themeColors } from "../../theme/theme-variables"
import { Header3 } from "../Headers/Headers.ui"
import { DiamondButton } from "../Buttons/DiamondButton.component"

import { placeholders } from "../../helpers/placeholders"

const { mediumBlue, mediumGray } = themeColors
const { two } = placeholders
const PodcastCardWrapper = styled.div``

const Episode = styled.h5`
  text-transform: uppercase;
  color: ${mediumBlue};
  font-weight: 400;
`

const PodcastName = styled(Header3)`
  font-size: 2rem;
`

const PodcastDescription = styled.p`
  color: ${mediumGray};
  line-height: 1.16;
`

const placeholderImage = `https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80`
export const PodcastCard = () => {
  return (
    <PodcastCardWrapper>
      <img src={two} alt="placeholder kitten" />
      <Episode>Épisode 3</Episode>
      <PodcastName>
        un titre que je ne connais pas encore mais qui viendra bientôt
      </PodcastName>
      <PodcastDescription>
        L'artiste nous dévoile, entre autres, quelques morceaux de son univers
        nostalgique et sensible, elle nous parle de ses aspirations, de son
        désir d'exprimer des réalités parfois douloureuses, de ses débuts avec
        le Polaroid et de sa série documentaire Fovea à l'argentique noir et
        blanc qui met en lumière des jeunes aveugles et malvoyants du Québec.
      </PodcastDescription>
      <DiamondButton />
    </PodcastCardWrapper>
  )
}
