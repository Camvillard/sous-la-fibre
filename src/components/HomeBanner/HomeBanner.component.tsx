import React, { useState } from "react"
import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { Logo } from "../Logo/Logo.component"
import { MainContainer } from "../Containers/Containers.ui"
import { Link } from "gatsby"
import { Social } from "../Social/Social.component"

const { darkGray, brightBlue, coral } = themeColors
const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

const FullScreenGrid = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  background: ${coral};
  justify-items: center;
  @media (min-width: ${mdScreen}) and (orientation: landscape) {
    grid-template-columns: 5fr 3fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "image logo"
      "image nav";
  }
  @media (min-width: ${xlgScreen}) {
    grid-template-columns: 4fr 3fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "image logo"
      "image nav";
  }
`

const GridLogoWrapper = styled.div`
  width: 92%;
  align-self: end;
  margin: 32px auto 0;
  padding: 12px 0 0;
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
    left: -112px;
    width: calc(100% + 112px);
    padding-right: 24px;
  }
  @media (min-width: ${xlgScreen}) and (orientation: landscape) {
    left: -152px;
    width: calc(100% + 152px);
    padding-right: 24px;
  }
`

const GridImageWrapper = styled.div`
  width: 88%;
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
  // align-self: center;
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
    left: 0;
    width: 100%;
    bottom: 4vh;
  }
`

const LogoImage = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;
  background: ${brightBlue};

  @media (min-width: ${smScreen}) and (orientation: portrait) {
    width: 80%;
  }

  @media (min-width: ${lgScreen}) and (orientation: landscape) {
    width: auto;
    height: 92vh;
  }
`

const HomeLink = styled(Link)`
  margin: 6px 0;
  font-size: 2rem;
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
    font-size: 4rem;
  }
  @media (min-width: ${lgScreen}) {
    font-size: 4.2rem;
    text-align: left;
  }
`

const HomeNav = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: ${darkGray};
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: ${smScreen}) {
    font-size: 2.8rem;
  }
  @media (min-width: ${mdScreen}) and (orientation: landscape) {
    text-align: left;
    font-size: 3.4rem;
  }
  @media (min-width: ${mdScreen}) and (orientation: portrait) {
    font-size: 4rem;
  }
  @media (min-width: ${lgScreen}) {
    font-size: 4.2rem;
    text-align: left;
  }
`

export const HomeBanner = () => {
  const [showEmail, setShowEmail] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const toggleEmail = () => {
    setShowEmail(!showEmail)
  }
  const toggleAbout = () => {
    setShowAbout(!showAbout)
  }
  const imageSrc =
    "https://contenu.souslafibre.com/wp-content/uploads/2020/06/sous-la-fibre_logo.jpg"
  return (
    <>
      <Social iconColors={darkGray} isFixed={true} />
      <FullScreenGrid>
        <GridLogoWrapper>
          <Logo />
        </GridLogoWrapper>
        <GridImageWrapper>
          <LogoImage src={imageSrc} />
        </GridImageWrapper>
        <GridNavWrapper>
          <HomeLink to={"#tous-les-episodes"}>parcourir les épisodes</HomeLink>
          <HomeLink to={"#tous-les-articles"}>lire les articles</HomeLink>
          <HomeLink to={"/a-propos"}>à propos</HomeLink>
          <HomeNav onClick={toggleEmail}>
            {showEmail ? "souslafibre@gmail.com" : "contact"}
          </HomeNav>
        </GridNavWrapper>
      </FullScreenGrid>
    </>
  )
}
