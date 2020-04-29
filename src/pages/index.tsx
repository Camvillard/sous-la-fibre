import React from "react"
import Layout from "../components/Layout/Layout.component"
import { PodcastCard } from "../components/Cards/PodcastCard.component"
import { graphql } from "gatsby"
import { IPageProps } from "../models/page.model"

const IndexPage = ({ data }: IPageProps) => {
  const { allWordpressWpPodcast } = data
  return (
    <Layout>
      {allWordpressWpPodcast.edges.map(edge => (
        <PodcastCard key={edge.node.id} podcast={edge.node} />
      ))}
    </Layout>
  )
}
export default IndexPage

export const indexPageQuery = graphql`
  query {
    allWordpressWpPodcast {
      edges {
        node {
          id
          slug
          title
          content
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
