import styled from "styled-components"
import { FullScreenContainer } from "../Containers/Containers.ui"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"

const { mediumBlue } = themeColors
const { mdScreen } = themeBreakpoints

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
  @media (min-width: ${mdScreen}) {
    width: 92vw;
    max-height: 90vh;
    height: 90vh;
  }
`
