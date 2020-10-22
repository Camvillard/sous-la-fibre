import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import { PodcastPageHeader } from "../components/Podcast/PodcastPageHeader.component"
import { PageProps } from "../models/page.model"
import { GlobalStyle } from "../theme/global-style"
import { PodcastPageDescription } from "../components/Podcast/PodcastPageDescription.component"
import SEO from "../components/Seo/Seo.component"
import { createExcerpt } from "../helpers/podcast.helpers"
import { themeBreakpoints, themeColors } from "../theme/theme-variables"
import { convertInRegulatText } from "../helpers/text.helpers"
import {
  PodcastWidget,
  Orientation,
} from "../components/Podcast/PodcastWidget.component"
import { PodcastPageLinks } from "../components/Podcast/PodcastPageLinks.component"
import { useMediaQuery } from "react-responsive"
import { Social } from "../components/Social/Social.component"
import {
  SingleWrapper,
  SingleInnerWraper,
  SingleContent,
  FixedHeader,
  Back,
} from "../components/Single/Single.ui"
import { PodcastContentGrid } from "../components/Podcast/PodcastPage.ui"

const { smScreen } = themeBreakpoints
const { darkGray } = themeColors

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
      <SEO
        title={title}
        description={excerpt}
        lang={"fr"}
        thumbnail={featured_media.source_url}
      />
      <SingleWrapper>
        <SingleInnerWraper>
          <FixedHeader>
            <Back to={"/"}>retour</Back>
            <Social iconColors={darkGray} />
          </FixedHeader>
          <SingleContent>
            <PodcastPageHeader title={title} episode={episode} />
            <PodcastWidget
              podcastId={idAusha}
              widgetOrientation={widgetOrientation}
            />
            <PodcastContentGrid>
              <PodcastPageDescription content={content} acf={acf} />
              <PodcastPageLinks links={acf} />
            </PodcastContentGrid>
          </SingleContent>
        </SingleInnerWraper>
      </SingleWrapper>
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
