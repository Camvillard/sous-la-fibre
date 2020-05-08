import React from "react"
import Layout from "../components/Layout/Layout.component"
import SEO from "../components/Seo/Seo.component"
import {
  ErrorPageWrapper,
  ErrorPageContentWrapper,
  ErrorPageTitle,
  ErrorPageLink,
  ErrorPageText,
} from "../components/Error/ErrorPage.ui"
import { GlobalStyle } from "../theme/global-style"
import { graphql } from "gatsby"
import { TPageData, IPageProps } from "../models/page.model"
import { Logo } from "../components/Logo/Logo.component"
import { LogoImage } from "../components/Logo/LogoImage.component"

const NotFoundPage = ({ data }: IPageProps) => {
  console.log(data)

  const { allWordpressWpPodcast } = data
  const { edges } = allWordpressWpPodcast

  const randomPodcastLink =
    edges[Math.floor(Math.random() * edges.length)]?.node.slug

  return (
    <>
      <SEO title={"404 page"} description={"404 page"} />
      <ErrorPageWrapper>
        <GlobalStyle />
        <ErrorPageContentWrapper>
          <LogoImage
            size={{ default: "50%", sm: "70%", md: "64%", lg: "50%" }}
          />
          <ErrorPageTitle>404</ErrorPageTitle>
          <ErrorPageText>
            La page que vous avez demandé semble ne plus exister (ou n'a
            peut-être jamais existé, en vrai).
          </ErrorPageText>
          <h3>quelques pistes pour résoudre ce problème :</h3>
          <ErrorPageText>
            Vérifiez que l'url est la bonne. Vous pouvez aussi{" "}
            <ErrorPageLink to={"/"}>retourner à l'accueil</ErrorPageLink>, ou
            bien encore, vous pouvez nous laisser le soin de vous faire
            découvrir un épisode de{" "}
            <ErrorPageLink to={`/episode/${randomPodcastLink}`}>
              podcast au hasard.
            </ErrorPageLink>
          </ErrorPageText>
        </ErrorPageContentWrapper>
      </ErrorPageWrapper>
    </>
  )
}

export default NotFoundPage

export const notFoundPageQuery = graphql`
  query {
    allWordpressWpPodcast(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          slug
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
