import React from "react"
import styled from "styled-components"
import { Header4 } from "../Headers/Headers.ui"
import { placeholders } from "../../helpers/placeholders"
import { Excerpt } from "./Cards.ui"
import { themeColors, themeFonts } from "../../theme/theme-variables"

const { mediumBlue } = themeColors
const { accentFont } = themeFonts

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
  color: ${mediumBlue};
  font-size: 1.21rem;
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

export const PostCard = () => {
  return (
    <PostCardWrapper>
      <PostThumbnail src={placeholders.one} />
      <PostTitle>titre de l'article</PostTitle>
      <Excerpt>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        assumenda, voluptatem, fugiat quaerat praesentium minus quo odit eaque
        laudantium magni reiciendis ullam delectus nostrum deserunt beatae saepe
        illo omnis est.
      </Excerpt>
      <Separator />
      <PostDate>publié le 12 septembre 2020</PostDate>
      <PostTagWrapper>
        <PostTag>Sarah Senee</PostTag>
        <PostTag>photographie</PostTag>
      </PostTagWrapper>
    </PostCardWrapper>
  )
}
