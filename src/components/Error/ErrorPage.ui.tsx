import styled from "styled-components"
import { FullScreenContainer, MainContainer } from "../Containers/Containers.ui"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { Link } from "gatsby"

const { coral, brightBlue, mediumBlue } = themeColors
const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const ErrorPageWrapper = styled(FullScreenContainer)`
  background-color: ${coral};
`
export const ErrorPageContentWrapper = styled(MainContainer)`
  max-width: 584px;
`

export const ErrorPageTitle = styled.h1`
  font-size: 6.2rem;
  margin: 0.1em 0;
  @media (min-width: ${smScreen}) {
    font-size: 8.2rem;
  }
`

export const ErrorPageText = styled.p`
  font-size: 1.6rem;
  @media (min-width: ${smScreen}) {
    font-size: 2rem;
  }
`
export const ErrorPageLink = styled(Link)`
  background: ${brightBlue};
  color: white;
  transition: 0.3s;

  &:hover {
    background: ${mediumBlue};
  }
`
