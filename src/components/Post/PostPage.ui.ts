import styled from "styled-components"
import { FullScreenContainer } from "../Containers/Containers.ui"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { MainTitle } from "../Headers/Headers.ui"

const { mediumBlue } = themeColors
const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const PostPageWrapper = styled(FullScreenContainer)`
  background: ${mediumBlue};
`

export const PostPageInnerWrapper = styled.div`
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
  @media (min-width: ${lgScreen}) {
    width: 82vw;
    height: 92vh;
    max-height: 92vh;
  }
`

export const PostTitle = styled(MainTitle)`
  padding: 0 8px;
`
export const PostContent = styled.div`
  padding: 0 8px;
  @media (min-width: ${mdScreen}) {
    padding: 0 24px;
  }
  @media (min-width: ${lgScreen}) {
    padding: 0 40px;
  }
  p {
    max-width: 532px;
  }
`
