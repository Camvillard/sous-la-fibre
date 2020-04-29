import React, { ReactNode } from "react"
import styled from "styled-components"

import { Header2 } from "./Headers.ui"
import { themeFonts } from "../../theme/theme-variables"

const { bodyFont } = themeFonts

type THeaderWithCounterProps = {
  children: ReactNode
  count: number
}

const HeaderCounter = styled(Header2)`
  font-size: 3.2rem;
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
