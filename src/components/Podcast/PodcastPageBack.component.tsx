import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { DiamondIcon } from "../Icons/Diamond.component"

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 0 0 16px;
  span {
    margin-right: -16px;
    position: relative;
    z-indx: 100;
  }
`

export const PodcastPageBack = () => {
  return (
    <BackButton to={"/"}>
      <span>retour</span>
      <DiamondIcon ratio={0.4} />
    </BackButton>
  )
}
