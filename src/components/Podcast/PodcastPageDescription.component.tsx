import React from "react"

type TPodcastPageDescription = {
  content: string
}
export const PodcastPageDescription = ({
  content,
}: TPodcastPageDescription) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
        quos laborum illo excepturi soluta aliquam autem consectetur mollitia
        aliquid! Eveniet esse ea unde ipsam iure necessitatibus molestiae nam
        maxime ex.
      </p>
    </>
  )
}
