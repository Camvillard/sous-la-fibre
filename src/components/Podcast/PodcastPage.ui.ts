import styled from "styled-components"
import { FullScreenContainer } from "../Containers/Containers.ui"
import { themeColors } from "../../theme/theme-variables"

const { mediumBlue } = themeColors

export const PodcastPageWrapper = styled(FullScreenContainer)`
  background: ${mediumBlue};
`

export const PodcastInnerWrapper = styled.div`
  background: white;
  width: 80vw;
  max-height: 88vh;
  overflow-y: scroll;
  padding: 0 16px;
  border-top: 8px solid white;
  border-bottom: 16px solid white;
`
