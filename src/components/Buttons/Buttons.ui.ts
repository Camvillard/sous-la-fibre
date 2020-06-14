import styled from "styled-components"
import { Link } from "gatsby"
import { themeFonts, themeColors } from "../../theme/theme-variables"

const { accentFont } = themeFonts
const { darkGray } = themeColors

type SimpleLinksProps = {
  color?: string
}
export const SimpleLink = styled(Link)<SimpleLinksProps>`
  text-transform: uppercase;
  font-weight: 600;
  color: ${props => props.color || darkGray};
`
