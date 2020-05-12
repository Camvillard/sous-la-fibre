import React from "react"
import Layout from "../components/Layout/Layout.component"
import { PodcastCard } from "../components/Cards/PodcastCard.component"
import { graphql } from "gatsby"
import { IPageProps } from "../models/page.model"
import { MainContainer } from "../components/Containers/Containers.ui"
import { HeaderWithCounter } from "../components/Headers/HeaderWithCounter.component"
import { Banner } from "../components/Banner/Banner.component"

const IndexPage = ({ data }: IPageProps) => {
  const { allWordpressWpPodcast } = data
  const { totalCount: podcastCount } = allWordpressWpPodcast
  let counter = podcastCount + 1
  return (
    <Layout>
      <Banner />
      <MainContainer id={"tous-les-episodes"}>
        <HeaderWithCounter count={podcastCount}>
          tous les épisodes
        </HeaderWithCounter>
      </MainContainer>
      {allWordpressWpPodcast.edges.map(edge => {
        counter--
        return (
          <PodcastCard
            key={edge.node.id}
            podcast={edge.node}
            counter={counter}
          />
        )
      })}

      {/* <MainContainer id={"tous-les-articles"}>
        <HeaderWithCounter count={podcastCount}>
          tous les articles
        </HeaderWithCounter>
      </MainContainer> */}
    </Layout>
  )
}
export default IndexPage

export const indexPageQuery = graphql`
  query {
    allWordpressWpPodcast(sort: { fields: date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          slug
          title
          content
          featured_media {
            id
            source_url
            alt_text
          }
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
