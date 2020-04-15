import React, { Fragment } from "react"
import { GlobalStyle } from "../theme/global-style"
import { Header1 } from "../components/Headers/Headers.ui"
import { MainContainer } from "../components/Containers/Containers.ui"
import { DiamondButton } from "../components/Buttons/DiamondButton.component"
import { PodcastCard } from "../components/Cards/PodcastCard.component"

const Styles = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <MainContainer>
        <Header1>titre principal</Header1>
        <PodcastCard />
      </MainContainer>
    </Fragment>
  )
}

export default Styles
