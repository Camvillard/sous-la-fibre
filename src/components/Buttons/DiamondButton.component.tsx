import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import DiamondIcon from "../Icons/Diamond.component"
import { themeColors } from "../../theme/theme-variables"

const { mediumBlue } = themeColors

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
`

const BlueLink = styled(Link)`
  color: ${mediumBlue};
  text-transform: uppercase;
  font-weight: 600;
  margin: 8px auto;
`

export const DiamondButton = () => {
  return (
    <DiamondButtonWrapper>
      <BlueLink to={"#"}>écouter l'épisode</BlueLink>
      <BlueLink to={"#"}>lire les articles associés</BlueLink>
      <DiamondIcon />
    </DiamondButtonWrapper>
  )
}
