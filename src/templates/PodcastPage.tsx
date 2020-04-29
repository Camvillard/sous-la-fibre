import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { PodcastPageHeader } from "../components/Podcast/PodcastPageHeader.component"
import { IPageProps } from "../models/page.model"
import { GlobalStyle } from "../theme/global-style"
import {
  PodcastPageWrapper,
  PodcastInnerWrapper,
} from "../components/Podcast/PodcastPage.ui"
import { PodcastPageDescription } from "../components/Podcast/PodcastPageDescription.component"
import { PodcastPageFooter } from "../components/Podcast/PodcastPageFooter.component"
import { PodcastPageBack } from "../components/Podcast/PodcastPageBack.component"

interface IPodcastPageProps extends IPageProps {}

const PodcastPage = ({ data }: IPodcastPageProps) => {
  console.log("props", data)
  const { wordpressWpPodcast, site } = data
  const { id, content, title, artiste, acf } = wordpressWpPodcast

  return (
    <Fragment>
      <GlobalStyle />
      <PodcastPageWrapper>
        <PodcastInnerWrapper>
          <PodcastPageBack />
          <PodcastPageHeader title={title} />
          <PodcastPageDescription content={content} />
          <PodcastPageFooter acf={acf} />
        </PodcastInnerWrapper>
      </PodcastPageWrapper>
    </Fragment>
  )
}

export default PodcastPage

export const podcastPageQuery = graphql`
  query($id: String!) {
    wordpressWpPodcast(id: { eq: $id }) {
      id
      content
      title
      artiste
      acf {
        lienAusha
        musiqueAdditionnelle
        noteFinale
      }
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
