import styled from "styled-components"
import { GridContainer } from "../Containers/Containers.ui"
import { themeBreakpoints } from "../../theme/theme-variables"

const { smScreen, lgScreen } = themeBreakpoints

export const PostGrid = styled(GridContainer)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;
  @media (min-width: ${smScreen}) {
    gap: 24px;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${lgScreen}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
