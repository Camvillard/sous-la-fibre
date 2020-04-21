import styled from "styled-components"
import { themeColors } from "../../theme/theme-variables"

const { mediumGray } = themeColors

export const Excerpt = styled.p`
  color: ${mediumGray};
  line-height: 1.16;
  max-width: 520px;
  margin-bottom: 2vh;
`
