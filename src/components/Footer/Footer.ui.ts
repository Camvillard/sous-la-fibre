import styled from "styled-components"
import { themeColors } from "../../theme/theme-variables"

const { darkGray, mediumBlue, brightBlue, mediumGray, gray } = themeColors

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${mediumBlue};
  padding: 16px 0;
  width: 92vw;
  margin-left: auto;
  margin-right: auto;
`

export const FooterIconsWrapper = styled.ul`
  list-style: none;
  margin: 0 0 8px;
  padding: 0;
`

export const IconLink = styled.li`
  display: inline;
  margin-right: 8px;
  a {
    color: ${mediumBlue};
  }
  svg {
    width: 20px !important;
    height: 20px !important;
  }
  path {
    width: 100%;
    height: 100%:
  }
`
export const Copyright = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${gray};
`
