import React from "react"
import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { Logo } from "../Logo/Logo.component"
import { MainContainer } from "../Containers/Containers.ui"
import { Link } from "gatsby"

const { darkGray, brighBlue, coral } = themeColors
const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

const FullScreenGrid = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  background: ${coral};
  justify-items: center;
  @media (min-width: ${mdScreen}) and (orientation: landscape) {
    grid-template-columns: 4fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "image logo"
      "image nav";
  }
`

const GridLogoWrapper = styled.div`
  width: 92%;
  align-self: center;
  margin: 0 auto;
  @media (min-width: ${smScreen}) {
    width: 88vw;
  }
  @media (min-width: ${mdScreen}) and (orientation: landscape) {
    align-self: start;
    width: 100%;
    grid-area: logo;
    position: relative;
    left: -42px;
    top: 10vh;
    z-index: 2;
  }
  @media (min-width: ${lgScreen}) and (orientation: landscape) {
    left: -124px;
    width: calc(100% + 124px);
    padding-right: 24px;
  }
`

const GridImageWrapper = styled.div`
  width: 92%;
  align-self: center;
  margin: 0 auto;
  @media (min-width: ${mdScreen}) and (orientation: landscape) {
    display: flex;
    align-items: center;
    width: 100%;
    align-self: center;
    grid-area: image;
    height: 100vh;
    padding-left: 24px;
  }
`

const GridNavWrapper = styled.div`
  width: 92%;
  align-self: center;
  margin: 0 auto;
  @media (min-width: ${smScreen}) {
    width: 88vw;
  }
  @media (min-width: ${mdScreen}) and (orientation: landscape) {
    align-self: end;
    width: 100%;
    grid-area: nav;
    position: relative;
    left: -42px;
    bottom: 10vh;
    z-index: 2;
  }
  @media (min-width: ${lgScreen}) and (orientation: landscape) {
    left: -124px;
    width: calc(100% + 124px);
  }
`

const LogoImage = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;
  background: ${brighBlue};

  @media (min-width: ${lgScreen}) and (orientation: landscape) {
    width: auto;
    height: 92vh;
  }
`

const HomeLink = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${darkGray};
  display: block;
  text-align: center;
  @media (min-width: ${smScreen}) {
    font-size: 2.8rem;
  }
  @media (min-width: ${mdScreen}) and (orientation: landscape) {
    text-align: left;
    font-size: 3.4rem;
  }
  @media (min-width: ${mdScreen}) and (orientation: portrait) {
    font-size: 4.4rem;
  }
  @media (min-width: ${lgScreen}) {
    font-size: 4.4rem;
    text-align: left;
  }
`

export const HomeBanner = () => {
  return (
    <FullScreenGrid>
      <GridLogoWrapper>
        <Logo />
      </GridLogoWrapper>
      <GridImageWrapper>
        <LogoImage
          src={
            "https://contenu.souslafibre.com/wp-content/uploads/2020/04/sous-la-fibre_sans-texte.jpg"
          }
        />
      </GridImageWrapper>
      <GridNavWrapper>
        <HomeLink to={"#"}>parcourir les épisodes</HomeLink>
        {/* <HomeLink to={"#"}>lire les articles</HomeLink> */}
        <HomeLink to={"#"}>à propos</HomeLink>
        <HomeLink to={"#"}>contact</HomeLink>
      </GridNavWrapper>
    </FullScreenGrid>
  )
}
