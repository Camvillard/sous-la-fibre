import React from "react"
import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { MainContainer } from "../Containers/Containers.ui"
import { Link } from "gatsby"

const { darkGray, brighBlue } = themeColors
const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

const LogoWrapper = styled.div``

const Baseline = styled.p`
  color: ${darkGray};
  font-size: 1.6rem;
  max-width: 270px;

  @media (min-width: ${smScreen}) {
    font-size: 2.2rem;
    max-width: 100%;
  }

  @media (min-width: ${lgScreen}) {
    font-size: 2rem;
  }
`

const LogoImage = styled.img`
  filter: invert(1);
  display: block;
  margin: auto;
`

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage
        src="https://contenu.souslafibre.com/wp-content/uploads/2020/05/logo_blanc.png"
        alt="logo sous la fibre"
      />
      <Baseline>le podcast qui donne la parole aux artistes visuels</Baseline>
    </LogoWrapper>
  )
}
