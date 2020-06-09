import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout.component"
import { PodcastCard } from "../components/Cards/PodcastCard.component"
import { PageProps } from "../models/page.model"
import { MainContainer } from "../components/Containers/Containers.ui"
import { HeaderWithCounter } from "../components/Headers/HeaderWithCounter.component"
import { HomeBanner } from "../components/HomeBanner/HomeBanner.component"
import { PostCard } from "../components/Cards/PostCard.component"
import { PostGrid } from "../components/Post/PostGrid.ui"

const IndexPage = ({ data }: PageProps) => {
  const { allWordpressWpPodcast, allWordpressPost } = data
  const { totalCount: podcastCount } = allWordpressWpPodcast
  const { totalCount: postsCount } = allWordpressPost
  console.log("data", data)

  let counter = podcastCount + 1
  return (
    <Layout>
      <HomeBanner />
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

      <MainContainer id={"tous-les-articles"}>
        <HeaderWithCounter count={postsCount}>
          tous les articles
        </HeaderWithCounter>
        <PostGrid>
          {allWordpressPost.edges.map(post => {
            return <PostCard key={post.node.id} post={post} />
          })}
        </PostGrid>
      </MainContainer>
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
    allWordpressPost(
      filter: { id: { ne: "22bf5072-5999-51ac-be3f-65df4e78e598" } }
    ) {
      totalCount
      edges {
        node {
          id
          title
          content
          slug
          date(formatString: "LL", locale: "fr")
          featured_media {
            source_url
            id
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
