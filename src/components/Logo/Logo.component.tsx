import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  themeColors,
  themeBreakpoints,
  themeFonts,
} from "../../theme/theme-variables"

const { darkGray, brighBlue } = themeColors
const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints
const { accentFont } = themeFonts

const LogoWrapper = styled.div``

const Baseline = styled.p`
  color: ${darkGray};
  text-align: center;
  font-size: 1.8rem;
  text-transform: uppercase;
  margin: 20px auto 0;
  max-width: 340px;

  @media (min-width: ${smScreen}) {
    font-size: 2.4rem;
    max-width: 450px;
  }

  @media (min-width: ${lgScreen}) {
    font-size: 2.6rem;
    text-align: left;
    max-width: 480px;
    margin-left 0;
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
      <Baseline>
        le podcast qui donne la parole aux artistes visuel.les
      </Baseline>
    </LogoWrapper>
  )
}
