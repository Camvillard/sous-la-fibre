import styled from "styled-components"
import { themeColors } from "../../theme/theme-variables"

const { darkGray, mediumBlue, mediumGray, gray } = themeColors

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${gray};
  padding: 4px 0;
  width: 92vw;
  margin-left: auto;
  margin-right: auto;
`
export const Copyright = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${gray};
`
export const Credit = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${mediumBlue};
`
