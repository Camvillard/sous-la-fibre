import styled from "styled-components"
import { FullScreenContainer } from "../Containers/Containers.ui"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { Header1 } from "../Headers/Headers.ui"
import { Link } from "gatsby"

const { mediumBlue } = themeColors
const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const SingleWrapper = styled(FullScreenContainer)`
  background: ${mediumBlue};
`
export const SingleInnerWraper = styled.div`
  background: white;
  width: 86vw;
  max-height: 88vh;
  overflow-y: scroll;
  border-top: 8px solid white;
  border-bottom: 16px solid white;
  padding: 12px;
  @media (min-width: ${mdScreen}) {
    width: 92vw;
    max-height: 88vh;
    height: 88vh;
    padding: 20px;
  }
  @media (min-width: ${lgScreen}) {
    padding: 40px;
    width: 72vw;
  }
`

export const FixedHeader = styled.div`
  width: 86vw;
  margin: auto;
  position: fixed;
  top: 2vh;
  left: 7vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${mdScreen}) {
    width: 92vw;
    left: 4vw;
  }
  @media (min-width: ${lgScreen}) {
    width: 72vw;
    left: 14vw;
  }
`

export const Back = styled(Link)`
  font-weight: 600;
  font-size: 1.2rem;
  text-align: left;
  text-transform: uppercase;
  color: white;
  align-self: flex-start;
  @media (min-width: ${mdScreen}) {
  }
`

export const SingleHeaderWrapper = styled.div``

export const SingleTitle = styled(Header1)`
  font-size: 3.2rem;
  margin-left: 15px;
  margin-right: 15px;
  @media (min-width: ${mdScreen}) {
    font-size: 3.4rem;
  }
  @media (min-width: ${lgScreen}) {
    font-size: 3.8rem;
  }
`

export const SinglePostTitle = styled(SingleTitle)`
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 1.4rem;
`

export const SingleContent = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  p {
    text-align: justify;
  }
  p,
  figure {
    max-width: 532px;
  }

  @media (min-width: ${smScreen}) {
    p {
      max-width: 548px;
    }
    figure {
      max-width: 632px;
    }
  }
  @media (min-width: ${mdScreen}) {
    figure {
      max-width: 732px;
    }
  }
  @media (min-width: ${lgScreen}) {
  }
`

export const SinglePostContent = styled(SingleContent)`
  margin-left: 0;
  margin-right: 0;
`
