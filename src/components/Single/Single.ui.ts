import styled from "styled-components"
import { FullScreenContainer } from "../Containers/Containers.ui"
import {
  themeColors,
  themeBreakpoints,
  themeFonts,
} from "../../theme/theme-variables"
import { Header1 } from "../Headers/Headers.ui"
import { Link } from "gatsby"

const { mediumBlue } = themeColors
const { smScreen, mdScreen, lgScreen } = themeBreakpoints
const { headersFont } = themeFonts

export const SingleWrapper = styled(FullScreenContainer)`
  background: ${mediumBlue};
`
export const SingleInnerWraper = styled.div`
  background: white;
  width: 92vw;
  max-height: 90vh;
  margin-top: 4vh;
  overflow-y: scroll;
  border-top: 12px solid white;
  border-bottom: 12px solid white;
  padding: 12px;
  @media (min-width: ${smScreen}) {
    padding: 12px 24px;
    margin-top: 2vh;
  }
  @media (min-width: ${mdScreen}) {
    width: 92vw;
    padding: 20px;
    border-top: 18px solid white;
    border-bottom: 18px solid white;
  }
  @media (min-width: ${lgScreen}) {
    margin-top: 4vh;
    padding: 40px;
    width: 82vw;
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
      max-width: 90%;
      margin: auto;
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
// POSTS

export const SinglePostTitle = styled(SingleTitle)`
  margin-left: 0;
  margin-right: 0;
  margin-top: 2rem;
  margin-bottom: 1.4rem;
  @media (min-width: ${smScreen}) {
    max-width: 88%;
    margin-left: 2%;
    // margin: 2rem 10% 1.4rem 2%;
  }
  @media (min-width: ${mdScreen}) {
    max-width: 82%;
    margin-left: 4%;
  }
`

export const SinglePostContent = styled(SingleContent)`
  margin-left: 0px;
  margin-right: 0px;
  max-width: 100%;
  figure {
    max-width: 100%;
  }
  @media (min-width: ${smScreen}) {
    p {
      max-width: 88%;
      margin-left: 2%;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: ${mdScreen}) {
    p {
      max-width: 82%;
      margin-left: 4%;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: ${lgScreen}) {
  }
`

export const SinglePostMeta = styled.div`
  border-top: 1px solid ${mediumBlue};
  p {
    color: ${mediumBlue};
    text-transform: uppercase;
    font-size: 0.8em;
  }
  span {
    // font-family: ${headersFont};
  }
  margin-top: 16px;
`
