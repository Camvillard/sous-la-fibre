import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout.component"
import { PodcastCard } from "../components/Cards/PodcastCard.component"

const IndexPage = () => (
  <Layout>
    <PodcastCard />
    <PodcastCard />
    <PodcastCard />
  </Layout>
)

export default IndexPage
