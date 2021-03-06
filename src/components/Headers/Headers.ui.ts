import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"

const { mediumGray, lightGray, gray } = themeColors
const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const Header1 = styled.h1`
  font-size: 4.2rem;
`
export const Header2 = styled.h2`
  font-size: 3.8rem;
`
export const Header3 = styled.h3`
  font-size: 3.4rem;
`
export const Header4 = styled.h4`
  font-size: 2.2rem;
`
export const MainTitle = styled(Header1)``
