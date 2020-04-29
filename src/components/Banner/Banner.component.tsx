import React from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { Logo } from "../Logo/Logo.component"
import { MainContainer } from "../Containers/Containers.ui"
import { Link } from "gatsby"

const { darkGray, brighBlue, coral } = themeColors
const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

const paddingAround = 24

const FullScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${coral};
  padding-top: 5vh;
  padding-bottom: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${lgScreen}) and (orientation: landscape) {
    display: block;
    padding: ${paddingAround}px;
    position: relative;
  }
`

const LogoImage = styled.img`
  height: 90vw;
  width: 90vw;
  margin: 0 auto;
  background: ${brighBlue};

  @media (min-width: ${smScreen}) {
    height: 80vw;
    width: 80vw;
  }

  @media (min-width: ${mdScreen}) and (orientation: landscape) {
    height: calc(100vh - ${paddingAround * 2}px);
    width: calc(100vh - ${paddingAround * 2}px);
    grid-column: 1 / span 8;
  }

  @media (min-width: ${mdScreen}) and (orientation: portrait) {
    height: 72vw;
    width: 72vw;
  }
`
const HomeLink = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${darkGray};
  display: block;
  text-align: center;
  @media (min-width: ${lgScreen}) {
    font-size: 4.4rem;
    text-align: left;
  }
`

const MobileBanner = () => {
  return (
    <FullScreenWrapper>
      <MainContainer top={"0"} bottom={"0"}>
        <Logo />
      </MainContainer>
      <LogoImage
        src={
          "https://contenu.souslafibre.com/wp-content/uploads/2020/04/sous-la-fibre_sans-texte.jpg"
        }
      />

      <MainContainer bottom={"0"} top={"0"}>
        <HomeLink to={"#"}>parcourir les épisodes</HomeLink>
        <HomeLink to={"#"}>lire les articles</HomeLink>
        <HomeLink to={"#"}>à propos</HomeLink>
        <HomeLink to={"#"}>contact</HomeLink>
      </MainContainer>
    </FullScreenWrapper>
  )
}

const DesktopLogoWrapper = styled.div`
  position: absolute;
  left: calc(100vh - ${paddingAround * 4}px);
  top: ${paddingAround}px;
  @media (min-width: ${xlgScreen}) {
    left: calc(100vh + ${paddingAround * 2}px);
  }
`

const DesktopMenuWrapper = styled.div`
  position: absolute;
  left: calc(100vh - ${paddingAround * 4}px);
  bottom: ${paddingAround * 2}px;
  @media (min-width: ${xlgScreen}) {
    left: calc(100vh + ${paddingAround * 2}px);
  }
`

const DesktopBanner = () => {
  return (
    <FullScreenWrapper>
      <LogoImage
        src={
          "https://contenu.souslafibre.com/wp-content/uploads/2020/04/sous-la-fibre_sans-texte.jpg"
        }
      />
      <DesktopLogoWrapper>
        <Logo />
      </DesktopLogoWrapper>
      <DesktopMenuWrapper>
        <HomeLink to={"/#tous-les-episodes"}>parcourir les épisodes</HomeLink>
        <HomeLink to={"/#tous-les-articles"}>lire les articles</HomeLink>
        <HomeLink to={"/a-propos"}>à propos</HomeLink>
        <HomeLink to={"/contact"}>contact</HomeLink>
      </DesktopMenuWrapper>
    </FullScreenWrapper>
  )
}

export const Banner = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: ${lgScreen})` })
  return isDesktop ? <DesktopBanner /> : <MobileBanner />
}
