import React from "react"
import styled from "styled-components"
import { themeColors } from "../../theme/theme-variables"
import { Logo } from "../Logo/Logo.component"
import { MainContainer } from "../Containers/Containers.ui"
import { Link } from "gatsby"

const { darkGray, brighBlue, coral } = themeColors

const FullScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${coral};
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const LogoPlaceholder = styled.div`
  height: 90vw;
  width: 90vw;
  margin: auto;
  background: ${brighBlue};
`
const HomeLink = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${darkGray};
  display: block;
  text-align: center;
`

export const Banner = () => {
  return (
    <FullScreenWrapper>
      <MainContainer top={"0"}>
        <Logo />
      </MainContainer>
      <LogoPlaceholder />
      <MainContainer bottom={"0"}>
        <HomeLink to={"#"}>parcourir les épisodes</HomeLink>
        <HomeLink to={"#"}>lire les articles</HomeLink>
        <HomeLink to={"#"}>à propos</HomeLink>
        <HomeLink to={"#"}>contact</HomeLink>
      </MainContainer>
    </FullScreenWrapper>
  )
}
