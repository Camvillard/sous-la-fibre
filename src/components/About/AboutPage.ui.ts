import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { GridContainer, MainContainer } from "../Containers/Containers.ui"

const { mediumGray, lightGray, gray } = themeColors
const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const AboutGrid = styled(GridContainer)`
  @media (min-width: ${mdScreen}) {
    grid-template-columns: 54% 46%;
    align-items: start;
  }
`
export const AboutContainer = styled(MainContainer)`
  @media (min-width: ${smScreen}) {
    width: 60%;
    margin-left: 30%;
    margin-top: 0px;
  }
  @media (min-width: ${mdScreen}) {
    width: 80%;
    margin-left: 5%;
    margin-top: 8vh;
  }
`

export const AboutImageWrapper = styled.div`
  @media (min-width: ${smScreen}) {
    width: 65%;
    margin-left: 32px;
  }
  @media (min-width: ${mdScreen}) {
    width: calc(100% - 42px);
    position: sticky;
    margin-top: 24px;
    top: 0;
  }
`

export const AboutImage = styled.img``

export const CaptionImage = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: right;
  margin-right: 4vw;
  @media (min-width: ${smScreen}) {
    transform: rotate(-90deg);
    transform-origin: top left;
    left: -16px;
    position: relative;
    top: -8px;
    text-align: left;
  }
  @media (min-width: ${mdScreen}) {
    font-size: 1.2rem;
    top: -12px;
    left: -22px;
  }
`
export const AboutContent = styled.div`
  h4 {
    margin-top: 24px;
    margin-bottom: 16px;
  }
`
export const AboutFooter = styled.footer`
  margin-top: 18px;
  p {
    text-transform: uppercase;
    margin: 2px 0;
  }
  span {
    text-transform: none;
    margin-left: 4px;
  }
`
