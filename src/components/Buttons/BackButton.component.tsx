import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { DiamondIcon } from "../Icons/Diamond.component"
import { themeBreakpoints } from "../../theme/theme-variables"

const { mdScreen, lgScreen } = themeBreakpoints

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 0 0 16px;
  position: fixed;
  top: 16px;
  right: 16px;
  span {
    margin-right: -16px;
    position: relative;
    z-index: 100;
  }
  @media (min-width: ${mdScreen}) {
    top: 24px;
    right: 24px;
  }
`

export const PageBackButton = () => {
  return (
    <BackButton to={"/"}>
      <span>retour</span>
      <DiamondIcon ratio={0.32} />
    </BackButton>
  )
}
