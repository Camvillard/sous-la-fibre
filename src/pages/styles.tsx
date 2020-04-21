import React, { Fragment } from "react"
import { GlobalStyle } from "../theme/global-style"
import { Header1 } from "../components/Headers/Headers.ui"
import { MainContainer } from "../components/Containers/Containers.ui"
import { PodcastCard } from "../components/Cards/PodcastCard.component"
import { PostCard } from "../components/Cards/PostCard.component"
import { Banner } from "../components/Banner/Banner.component"

const Styles = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Banner />
      <Header1>titre principal</Header1>
      <PodcastCard />
      <PostCard />
    </Fragment>
  )
}

export default Styles
