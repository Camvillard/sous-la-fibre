import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

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
import SEO from "../components/Seo/Seo.component"
import { createExcerpt } from "../helpers/podcast.helpers"
import { themeBreakpoints } from "../theme/theme-variables"
import { PodcastPageDesktop } from "../components/Podcast/PodcastPageDesktop.component"
import { PodcastPageMobile } from "../components/Podcast/PodcastPageMobile.component"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

interface IPodcastPageProps extends IPageProps {}

const PodcastPage = (props: IPodcastPageProps) => {
  const { data, pathContext } = props
  const { wordpressWpPodcast, site } = data
  const { episode } = pathContext

  const { content, title, tags, acf, featured_media } = wordpressWpPodcast

  const excerpt = createExcerpt(content)

  const isDesktop = useMediaQuery({
    query: `(min-device-width: ${mdScreen})`,
  })
  return (
    <>
      <GlobalStyle />
      <SEO title={title} description={excerpt} lang={"fr"} />
      {isDesktop ? (
        <PodcastPageDesktop podcast={wordpressWpPodcast} episode={episode} />
      ) : (
        <PodcastPageMobile podcast={wordpressWpPodcast} episode={episode} />
      )}
    </>
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
