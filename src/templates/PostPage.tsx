import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { PageProps } from "../models/page.model"
import { GlobalStyle } from "../theme/global-style"
import SEO from "../components/Seo/Seo.component"
import {
  PostPageWrapper,
  PostPageInnerWrapper,
  PostTitle,
  PostContent,
} from "../components/Post/PostPage.ui"
import { PodcastPageBack } from "../components/Podcast/PodcastPageBack.component"

import "../scss/single-post.css"
import { Footer } from "../components/Footer/Footer.component"
import Helmet from "react-helmet"

interface PostPageProps extends PageProps {}
const PostPage = (props: PostPageProps) => {
  const { data, pathContext } = props
  const { wordpressPost, site } = data
  const { title, content, date, featured_media, excerpt } = wordpressPost
  const { source_url: imageUrl } = featured_media

  return (
    <>
      <GlobalStyle />
      <SEO title={title} description={excerpt} lang={"fr"} />
      <Helmet>
        {<script async defer src="//www.instagram.com/embed.js"></script>}
      </Helmet>
      <PostPageWrapper>
        <PostPageInnerWrapper>
          <PodcastPageBack />
          <PostTitle>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </PostTitle>
          <PostContent>
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </PostContent>
        </PostPageInnerWrapper>
      </PostPageWrapper>
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
