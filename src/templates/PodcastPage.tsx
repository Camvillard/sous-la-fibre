import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import { PodcastPageHeader } from "../components/Podcast/PodcastPageHeader.component"
import { PageProps } from "../models/page.model"
import { GlobalStyle } from "../theme/global-style"
import {
  PodcastPageWrapper,
  PodcastInnerWrapper,
  PodcastGridContent,
  Back,
} from "../components/Podcast/PodcastPage.ui"
import { PodcastPageDescription } from "../components/Podcast/PodcastPageDescription.component"
import SEO from "../components/Seo/Seo.component"
import { createExcerpt } from "../helpers/podcast.helpers"
import { themeBreakpoints } from "../theme/theme-variables"
import { convertInRegulatText } from "../helpers/text.helpers"
import {
  PodcastWidget,
  Orientation,
} from "../components/Podcast/PodcastWidget.component"
import { PodcastPageLinks } from "../components/Podcast/PodcastPageLinks.component"
import { useMediaQuery } from "react-responsive"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

interface PodcastPageProps extends PageProps {}

const PodcastPage = (props: PodcastPageProps) => {
  const { data, pathContext } = props
  const { wordpressWpPodcast } = data
  const { episode } = pathContext
  const { content, acf, featured_media } = wordpressWpPodcast
  const { idAusha } = acf

  const title = convertInRegulatText(wordpressWpPodcast.title)
  const excerpt = createExcerpt(content)

  const [widgetOrientation, setWidgetOrientation] = useState<Orientation>(
    "horizontal"
  )
  const isTablet = useMediaQuery({
    query: `(min-device-width: ${smScreen})`,
  })

  useEffect(() => {
    isTablet
      ? setWidgetOrientation("horizontal")
      : setWidgetOrientation("vertical")
  }, [isTablet])

  return (
    <>
      <GlobalStyle />
      <SEO title={title} description={excerpt} lang={"fr"} />
      <PodcastPageWrapper>
        <Back to={"/"}>retour</Back>
        <PodcastInnerWrapper>
          <PodcastGridContent>
            <PodcastPageHeader title={title} episode={episode} />
            <PodcastWidget
              podcastId={idAusha}
              widgetOrientation={widgetOrientation}
            />
            <PodcastPageDescription content={content} acf={acf} />
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
