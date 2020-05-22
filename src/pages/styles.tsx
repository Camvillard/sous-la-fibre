import React, { Fragment } from "react"
import { GlobalStyle } from "../theme/global-style"
import { Header1 } from "../components/Headers/Headers.ui"
import { MainContainer } from "../components/Containers/Containers.ui"
import { PodcastCard } from "../components/Cards/PodcastCard.component"
import { PostCard } from "../components/Cards/PostCard.component"
import { HomeBanner } from "../components/HomeBanner/HomeBanner.component"

const Styles = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <HomeBanner />
      <Header1>titre principal</Header1>
      <PostCard />
    </Fragment>
  )
}

export default Styles
