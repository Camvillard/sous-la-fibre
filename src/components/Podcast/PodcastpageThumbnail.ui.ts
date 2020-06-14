import styled from "styled-components"
import { themeBreakpoints } from "../../theme/theme-variables"

const { smScreen, mdScreen } = themeBreakpoints

export const PodcastThumbnail = styled.img`
  display: block;
  width: 100%;
  margin: 0;
  @media (min-width: ${smScreen}) {
    display: none;
    margin: 0;
    order: 2;
  }
`
