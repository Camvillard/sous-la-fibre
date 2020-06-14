import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

import { PodcastPageHeader } from "../components/Podcast/PodcastPageHeader.component"
import { PageProps } from "../models/page.model"
import { GlobalStyle } from "../theme/global-style"
import {
  PodcastPageWrapper,
  PodcastInnerWrapper,
  PodcastGridContent,
} from "../components/Podcast/PodcastPage.ui"
import { PodcastPageDescription } from "../components/Podcast/PodcastPageDescription.component"
import { PodcastPageFooter } from "../components/Podcast/PodcastPageFooter.component"
import { PodcastPageBack } from "../components/Podcast/PodcastPageBack.component"
import SEO from "../components/Seo/Seo.component"
import { createExcerpt } from "../helpers/podcast.helpers"
import { themeBreakpoints } from "../theme/theme-variables"
import { PodcastPageDesktop } from "../components/Podcast/PodcastPageDesktop.component"
import { PodcastPageMobile } from "../components/Podcast/PodcastPageMobile.component"
import { convertInRegulatText } from "../helpers/text.helpers"
import { PodcastWidget } from "../components/Podcast/PodcastWidget.component"
import { PodcastThumbnail } from "../components/Podcast/PodcastpageThumbnail.ui"
import { PodcastPageLinks } from "../components/Podcast/PodcastPageLinks.component"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

interface PodcastPageProps extends PageProps {}

const PodcastPage = (props: PodcastPageProps) => {
  const { data, pathContext } = props
  const { wordpressWpPodcast, site } = data
  const { episode } = pathContext

  const { content, tags, acf, featured_media } = wordpressWpPodcast
  const { idAusha } = acf
  const { source_url: src, alt_text: alt } = featured_media

  const title = convertInRegulatText(wordpressWpPodcast.title)

  const excerpt = createExcerpt(content)

  return (
    <>
      <GlobalStyle />
      <SEO title={title} description={excerpt} lang={"fr"} />
      <PodcastPageWrapper>
        <PodcastInnerWrapper>
          <PodcastPageBack />
          <PodcastGridContent>
            <PodcastThumbnail src={src} alt={alt} />
            <PodcastPageHeader title={title} episode={episode} />
            <PodcastPageDescription content={content} acf={acf} />
            <PodcastWidget podcastId={idAusha} />
            <PodcastPageLinks links={acf} />
          </PodcastGridContent>
        </PodcastInnerWrapper>
      </PodcastPageWrapper>
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
        idAusha
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
