import React, { ReactNode } from "react"
import styled from "styled-components"

import { Header2 } from "./Headers.ui"
import { themeFonts, themeBreakpoints } from "../../theme/theme-variables"

const { bodyFont } = themeFonts
const { smScreen, mdScreen, lgScreen } = themeBreakpoints

type THeaderWithCounterProps = {
  children: ReactNode
  count: number
}

const HeaderCounter = styled(Header2)`
  padding-top: 4vh;
  font-size: 3.2rem;
  @media (min-width: ${smScreen}) {
    padding-top: 24px;
    font-size: 4rem;
  }
  @media (min-width: ${mdScreen}) {
    font-size: 4.2rem;
  }
  @media (min-width: ${mdScreen}) {
    font-size: 5.4rem;
  }
`
const Count = styled.span`
  font-size: 0.4em;
  position: relative;
  top: -0.8em;
  left: 4px;
  font-family: ${bodyFont};
  font-weight: 300;
`

export const HeaderWithCounter = ({
  children,
  count,
}: THeaderWithCounterProps) => {
  return (
    <HeaderCounter>
      {children}
      <Count>({count})</Count>{" "}
    </HeaderCounter>
  )
}
