import styled from "styled-components"
import { FullScreenContainer, GridContainer } from "../Containers/Containers.ui"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { Link } from "gatsby"

const { mediumBlue, darkGray, lightGray, gray } = themeColors
const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const PodcastPageWrapper = styled(FullScreenContainer)`
  background: ${mediumBlue};
  flex-direction: column;
`

export const PodcastInnerWrapper = styled.div`
  background: white;
  width: 86vw;
  max-height: 92vh;
  overflow-y: scroll;
  padding: 8px 4px;
  border-top: 8px solid white;
  border-bottom: 16px solid white;
  @media (min-width: ${smScreen}) {
    width: 90vw;
    padding: 0 24px;
  }
  @media (min-width: ${mdScreen}) {
    width: 74vw;
    max-height: 90vh;
    height: 90vh;
    padding: 0 40px;
  }
`

export const Back = styled(Link)`
  font-weight: 600;
  font-size: 1.2rem;
  text-align: left;
  text-transform: uppercase;
  color: white;
  align-self: flex-start;
  width: 86vw;
  margin: 4px auto 8px;
`
export const PodcastGridContent = styled(GridContainer)`
  grid-template-columns: 1fr;
  gap: 8px;
  @media (min-width: ${smScreen}) {
    // grid-template-columns: 40% 60%;
    // grid-template-rows: auto auto auto;
    // grid-template-areas: "widget header" "widget content" "footer content";
    // gap: 24px;
  }
  @media (min-width: ${mdScreen}) {
    // grid-template-columns: 2.5fr 1fr;
    gap: 24px;
  }
`

export const PodcastPlayer = styled.iframe`
  align-self: center;
  width: 100%;
  @media (min-width: ${smScreen}) {
    // grid-area: widget;
  }
`

export const PageHeaderWrapper = styled.div`
  margin-left: 15px;
  @media (min-width: ${smScreen}) {
    // grid-area: header;
  }
`

export const PodcastEpisode = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${gray};
  margin: 0 0 8px;
`

export const PageDescriptionWrapper = styled.div`
  width: calc(100% - 30px);
  margin-left: 15px;
  @media (min-width: ${smScreen}) {
    // grid-area: content;
    margin-top: 15px;
    max-width: 506px;
  }
`

export const ListenWrapper = styled.div`
  margin-left: 15px;
  @media (min-width: ${smScreen}) {
    // grid-area: footer;
  }
  @media (min-width: ${mdScreen}) {
    background: none;
    margin-top: 16px;
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
