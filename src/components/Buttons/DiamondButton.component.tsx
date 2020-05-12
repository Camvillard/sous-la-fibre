import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { DiamondIcon } from "../Icons/Diamond.component"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"

const { mediumBlue } = themeColors
const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

const DiamondButtonWrapper = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    top: 0;
    left: calc(50% - 41px);
    z-index: -1;
  }

  @media (min-width: ${mdScreen}) {
    align-items: flex-start;
    margin-bottom: -26px;
    svg {
      left: -48px;
    }
  }
`

const BlueLink = styled(Link)`
  color: ${mediumBlue};
  text-transform: uppercase;
  font-weight: 600;
  margin: 8px auto;
  @media (min-width: ${mdScreen}) {
    margin: 8px 0;
  }
`

type TDiamondButtonProps = {
  podcastLink: string
}
export const DiamondButton = ({ podcastLink }: TDiamondButtonProps) => {
  return (
    <DiamondButtonWrapper>
      <BlueLink to={`/episode/${podcastLink}`}>écouter l'épisode</BlueLink>
      <BlueLink to={"#"}>lire les articles associés</BlueLink>
      <DiamondIcon ratio={1} />
    </DiamondButtonWrapper>
  )
}
