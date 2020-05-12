import styled from "styled-components"
import { themeBreakpoints } from "../../theme/theme-variables"

const { mdScreen } = themeBreakpoints

export const PodcastThumbnail = styled.img`
  width: 100%;
  margin: 8px auto;
  @media (min-width: ${mdScreen}) {
    margin: 0;
  }
`
