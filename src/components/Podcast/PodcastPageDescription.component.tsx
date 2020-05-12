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
    </>
  )
}
