import React from "react"
import { graphql, Link } from "gatsby"
import { SiteData } from "../models/site.model"
import { WordpressPage } from "../models/page.model"
import SEO from "../components/Seo/Seo.component"
import { GlobalStyle } from "../theme/global-style"
import {
  AboutImage,
  CaptionImage,
  AboutContent,
  AboutFooter,
  AboutGrid,
  AboutContainer,
  AboutImageWrapper,
} from "../components/About/AboutPage.ui"
import { MainContainer } from "../components/Containers/Containers.ui"
import { PageBackButton } from "../components/Buttons/BackButton.component"
import { SingleTitle } from "../components/Single/Single.ui"

type AboutPageData = {
  site: SiteData
  wordpressPage: WordpressPage
}

type AboutPageProps = {
  data: AboutPageData
}
const APropos = (props: AboutPageProps) => {
  const { data } = props
  const { wordpressPage, site } = data
  const { id, title, content, featured_media } = wordpressPage
  const { source_url, alt_text } = featured_media
  return (
    <>
      <SEO />
      <GlobalStyle />
      <PageBackButton />
      <AboutGrid>
        <AboutImageWrapper>
          <AboutImage src={source_url} alt={alt_text} />
          <CaptionImage>collage de Kim Renaud-Venne</CaptionImage>
        </AboutImageWrapper>
        <AboutContainer>
          <SingleTitle>à propos</SingleTitle>
          <AboutContent>
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </AboutContent>
          <AboutFooter>
            <p>
              design sonore et mixage:
              <span>
                <a
                  href="https://www.juliettebeha.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Juliette Beha
                </a>
              </span>
            </p>
            <p>
              illustration et design graphique:
              <span>
                <Link to={"/episode/francorama-la-creation-comme-evidence"}>
                  Franco Egalité
                </Link>
              </span>
            </p>
            <p>
              conception du site web:
              <span>
                <a
                  href="https://www.cdltbisou.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Camille Villard
                </a>
              </span>
            </p>
          </AboutFooter>
        </AboutContainer>
      </AboutGrid>
    </>
  )
}

export default APropos

export const AboutPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    wordpressPage(slug: { eq: "a-propos" }) {
      id
      title
      content
      featured_media {
        source_url
        id
        alt_text
      }
    }
  }
`
