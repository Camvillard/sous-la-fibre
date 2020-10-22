import styled from "styled-components"
import { FullScreenContainer, GridContainer } from "../Containers/Containers.ui"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { Link } from "gatsby"

const { mediumBlue, darkGray, lightGray, gray } = themeColors
const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const PodcastPlayer = styled.iframe`
  align-self: center;
  width: 100%;
  @media (min-width: ${smScreen}) {
  }
`

export const PodcastEpisode = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${gray};
  margin: 0 15px 8px;
`

export const ListenWrapper = styled.div`
  margin-top: 16px;
  @media (min-width: ${smScreen}) {
  }
  @media (min-width: ${mdScreen}) {
    background: none;
    margin-top: 0;
    border: none;
  }
`

export const ToggleListen = styled.h4`
  margin: 0;
  text-align: left;
  color: ${darkGray};
  @media (min-width: ${smScreen}) {
  }
`

export const PodcastList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 16px 0 0;
  li {
    text-transform: uppercase;
    margin-right: 16px;
    word-break: break-word;
  }
  a {
    color: ${darkGray};
  }
`

export const PodcastContentGrid = styled(GridContainer)`
  @media (min-width: ${mdScreen}) {
    margin-top: 24px;
    grid-template-columns: 75% 25%;
    gap: 32px;
  }
`
