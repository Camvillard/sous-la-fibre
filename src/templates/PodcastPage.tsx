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

const PodcastPage = (props: IPodcastPageProps) => {
  const { data, pathContext } = props
  const { wordpressWpPodcast, site } = data
  const { episode } = pathContext

  const { content, title, tags, acf, featured_media } = wordpressWpPodcast

  return (
    <Fragment>
      <GlobalStyle />
      <PodcastPageWrapper>
        <PodcastInnerWrapper>
          <PodcastPageBack />
          <PodcastPageHeader
            title={title}
            episode={episode}
            thumbnail={featured_media}
          />
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
      tags {
        id
        slug
        name
      }
      acf {
        lienAusha
        musiqueAdditionnelle
        noteFinale
      }
      featured_media {
        id
        source_url
        alt_text
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
