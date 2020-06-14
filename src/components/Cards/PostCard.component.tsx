import React from "react"
import styled from "styled-components"
import { Header4 } from "../Headers/Headers.ui"
import { placeholders } from "../../helpers/placeholders"
import { Excerpt } from "./Cards.ui"
import {
  themeColors,
  themeFonts,
  themeBreakpoints,
} from "../../theme/theme-variables"
import { createExcerpt } from "../../helpers/podcast.helpers"
import { SimpleLink } from "../Buttons/Buttons.ui"
import { WordpressPost } from "../../models/post.model"

const { mediumBlue, darkGray } = themeColors
const { accentFont } = themeFonts
const { smScreen, lgScreen } = themeBreakpoints

const PostCardWrapper = styled.div`
  margin: 24px auto;
`

const PostTitle = styled(Header4)`
  font-size: 2rem;
`

const PostThumbnail = styled.img`
  margin: 0;
`

const Separator = styled.hr`
  width: 20%;
  margin-left: 0;
  background: ${mediumBlue};
  height: 1px;
`

const PostDate = styled.p`
  color: ${darkGray};
  font-size: 1.2rem;
  text-transform: uppercase;
`

const PostTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const PostTag = styled.p`
  background: ${mediumBlue};
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 10px;
  font-family: ${accentFont};
  font-size: 1.2rem;
`
type PostCardProps = {
  post: WordpressPost
}
export const PostCard = ({ post }: PostCardProps) => {
  if (!post) {
    return <></>
  }
  const { title, content, date, featured_media, slug, tags } = post
  const thumbnail = featured_media?.source_url || ""
  const excerpt = createExcerpt(content)

  return (
    <PostCardWrapper>
      <PostDate>publié le {date}</PostDate>
      <PostThumbnail src={thumbnail} alt={title} />
      {tags && (
        <PostTagWrapper>
          {tags.map(tag => (
            <PostTag key={tag.id}>{tag.name}</PostTag>
          ))}
        </PostTagWrapper>
      )}
      <PostTitle>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </PostTitle>
      {excerpt && (
        <Excerpt>
          <span dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Excerpt>
      )}

      <SimpleLink to={`article/${slug}`} color={mediumBlue}>
        lire la suite
      </SimpleLink>
    </PostCardWrapper>
  )
}
