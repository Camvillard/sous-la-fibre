import React from "react"
import styled from "styled-components"
import { themeColors } from "../../theme/theme-variables"
import { MainContainer } from "../Containers/Containers.ui"
import { Link } from "gatsby"

const { darkGray, brighBlue } = themeColors

const LogoWrapper = styled.div``

const LogoText = styled.h2`
  font-size: 5.2rem;
  color: ${darkGray};
  margin: 0;
`

const Baseline = styled.p`
  color: ${darkGray};
  font-size: 1.8rem;
  max-width: 270px;
`

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoText>Sous la fibre</LogoText>
      <Baseline>le podcast qui donne la parole aux artistes visuels</Baseline>
    </LogoWrapper>
  )
}
