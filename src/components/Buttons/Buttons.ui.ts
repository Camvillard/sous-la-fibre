import styled from "styled-components"
import { Link } from "gatsby"
import { themeFonts, themeColors } from "../../theme/theme-variables"

const { accentFont } = themeFonts
const { darkGray } = themeColors

export const SimpleLink = styled(Link)`
  text-transform: uppercase;
  font-weight: 600;
  color: ${darkGray};
`
