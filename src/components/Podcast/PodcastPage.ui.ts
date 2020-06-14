import styled from "styled-components"
import { FullScreenContainer, GridContainer } from "../Containers/Containers.ui"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"

const { mediumBlue } = themeColors
const { smScreen, mdScreen } = themeBreakpoints

export const PodcastPageWrapper = styled(FullScreenContainer)`
  background: ${mediumBlue};
`

export const PodcastInnerWrapper = styled.div`
  background: white;
  width: 86vw;
  max-height: 92vh;
  overflow-y: scroll;
  padding: 0 16px;
  border-top: 8px solid white;
  border-bottom: 16px solid white;
  @media (min-width: ${smScreen}) {
    width: 90vw;
    padding: 0 24px;
  }
  @media (min-width: ${mdScreen}) {
    width: 92vw;
    max-height: 90vh;
    height: 90vh;
    padding: 0 40px;
  }
`
export const PodcastGridContent = styled(GridContainer)`
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: ${smScreen}) {
    grid-template-columns: 3fr 2fr;
    gap: 24px;
  }
  @media (min-width: ${mdScreen}) {
    grid-template-columns: 2.5fr 1fr;
    gap: 24px;
  }
  .css-1ufwyvl {
    margin: 0 !important;
  }
`
