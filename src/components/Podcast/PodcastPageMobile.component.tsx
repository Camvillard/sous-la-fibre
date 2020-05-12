import React, { useState } from "react"
import styled from "styled-components"

import { PodcastPageWrapper, PodcastInnerWrapper } from "./PodcastPage.ui"
import { PodcastPageBack } from "./PodcastPageBack.component"
import { PodcastPageHeader } from "./PodcastPageHeader.component"
import { title } from "process"
import { PodcastPageDescription } from "./PodcastPageDescription.component"
import { PodcastPageFooter } from "./PodcastPageFooter.component"
import { TPodcastData } from "../../models/podcast.model"
import { themeColors } from "../../theme/theme-variables"

const { mediumBlue, darkGray } = themeColors

const ListenWrapper = styled.div`
  margin-top: 24px;
  border-top: 1px solid ${mediumBlue};
  border-bottom: 1px solid ${mediumBlue};
`

const ToggleListen = styled.h4`
  text-align: center;
  padding: 8px 0;
  color: ${darkGray};
`

const PodcastList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
  li {
    text-transform: uppercase;
    text-align: center;
  }

  a {
    color: ${darkGray};
  }
`

interface IPodcastPageProps {
  podcast: TPodcastData
  episode: number
}

export const PodcastPageMobile = ({ podcast, episode }: IPodcastPageProps) => {
  const { title, featured_media, content, acf } = podcast
  const { lienAusha } = acf
  console.log(podcast)

  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <PodcastPageWrapper>
      <PodcastInnerWrapper>
        <PodcastPageBack />
        <PodcastPageHeader
          title={title}
          episode={episode}
          thumbnail={featured_media}
        />
        <PodcastPageDescription content={content} />
        <ListenWrapper>
          <ToggleListen onClick={toggle}>
            {isOpen ? "fermer" : "écouter l'épisode"}
          </ToggleListen>
          {isOpen && (
            <PodcastList>
              <li>
                <a href={lienAusha}>ausha</a>
              </li>
              <li>
                <a href={lienAusha}>spotify</a>
              </li>
              <li>
                <a href={"https://www.deezer.com/fr/show/788592"}>deezer</a>
              </li>
              <li>
                <a href={"https://soundcloud.com/souslafibre"}>soundcloud</a>
              </li>
              <li>
                <a
                  href={
                    "https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkLmF1c2hhLmNvL2IzNUU4ZkQ1alY0UA%3D%3D"
                  }
                >
                  google podcasts
                </a>
              </li>
              <li>
                <a
                  href={
                    "https://podcasts.apple.com/ca/podcast/sous-la-fibre/id1494609876"
                  }
                >
                  apple podcasts
                </a>
              </li>
              <li>
                <a
                  href={
                    "https://castro.fm/podcast/57de1f5d-6541-4e63-b290-70fe68dcdbf0"
                  }
                >
                  castro
                </a>
              </li>
              <li>
                <a href={"https://overcast.fm/itunes1494609876/sous-la-fibre"}>
                  overcast
                </a>
              </li>
              <li>
                <a href={"https://podplayer.net/?podId=2513227e"}>podplayer</a>
              </li>
            </PodcastList>
          )}
        </ListenWrapper>
        <PodcastPageFooter acf={acf} />
      </PodcastInnerWrapper>
    </PodcastPageWrapper>
  )
}
