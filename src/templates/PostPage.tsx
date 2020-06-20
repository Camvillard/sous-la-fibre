import React from "react"
import { graphql } from "gatsby"
import { PageProps } from "../models/page.model"
import { GlobalStyle } from "../theme/global-style"
import SEO from "../components/Seo/Seo.component"

import "../scss/single-post.css"
import Helmet from "react-helmet"
import { Social } from "../components/Social/Social.component"
import { themeColors } from "../theme/theme-variables"
import {
  SingleTitle,
  FixedHeader,
  Back,
  SingleInnerWraper,
  SingleContent,
  SingleWrapper,
} from "../components/Single/Single.ui"

interface PostPageProps extends PageProps {}
const PostPage = (props: PostPageProps) => {
  const { data } = props
  const { wordpressPost } = data
  const { title, content, featured_media, excerpt } = wordpressPost

  return (
    <>
      <GlobalStyle />
      <SEO title={title} description={excerpt} lang={"fr"} />
      <Helmet>
        {<script async defer src="//www.instagram.com/embed.js"></script>}
      </Helmet>
      <SingleWrapper>
        <SingleInnerWraper>
          <FixedHeader>
            <Back to={"/"}>retour</Back>
            <Social iconColors={"white"} />
          </FixedHeader>
          <SingleTitle>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </SingleTitle>
          <SingleContent>
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </SingleContent>
        </SingleInnerWraper>
      </SingleWrapper>
    </>
  )
}

export default PostPage

export const PostPageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      content
      excerpt
      date(formatString: "LL", locale: "fr")
      featured_media {
        source_url
        id
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
