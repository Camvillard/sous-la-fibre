import React, { useState } from "react"
import { AcfData } from "../../models/podcast.model"
import { useMediaQuery } from "react-responsive"
import { PodcastList, ListenWrapper, ToggleListen } from "./PodcastPage.ui"

type TPodcastPageLinksProps = {
  links: AcfData
}

const PodcastListLinks = ({ links }: TPodcastPageLinksProps) => {
  const { lienAusha } = links
  return (
    <PodcastList>
      <li>
        <a href={lienAusha} target="_blank" rel="noopener noreferrer">
          ausha
        </a>
      </li>
      <li>
        <a
          href={"https://open.spotify.com/show/7vGvdX6m9jpiQtKzRrv6Yx"}
          target="_blank"
          rel="noopener noreferrer"
        >
          spotify
        </a>
      </li>
      <li>
        <a
          href={"https://www.deezer.com/fr/show/788592"}
          target="_blank"
          rel="noopener noreferrer"
        >
          deezer
        </a>
      </li>
      <li>
        <a
          href={"https://soundcloud.com/souslafibre"}
          target="_blank"
          rel="noopener noreferrer"
        >
          soundcloud
        </a>
      </li>
      <li>
        <a
          href={
            "https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkLmF1c2hhLmNvL2IzNUU4ZkQ1alY0UA%3D%3D"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          google podcasts
        </a>
      </li>
      <li>
        <a
          href={
            "https://podcasts.apple.com/ca/podcast/sous-la-fibre/id1494609876"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          apple podcasts
        </a>
      </li>
      <li>
        <a
          href={
            "https://castro.fm/podcast/57de1f5d-6541-4e63-b290-70fe68dcdbf0"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          castro
        </a>
      </li>
      <li>
        <a
          href={"https://overcast.fm/itunes1494609876/sous-la-fibre"}
          target="_blank"
          rel="noopener noreferrer"
        >
          overcast
        </a>
      </li>
      <li>
        <a
          href={"https://podplayer.net/?podId=2513227e"}
          target="_blank"
          rel="noopener noreferrer"
        >
          podplayer
        </a>
      </li>
    </PodcastList>
  )
}

export const PodcastPageLinks = ({ links }: TPodcastPageLinksProps) => {
  // const [isOpen, setOpen] = useState(false)
  // const toggle = () => {
  //   setOpen(!isOpen)
  // }

  return (
    <ListenWrapper>
      <ToggleListen>écouter sur d'autres plateformes</ToggleListen>
      <PodcastListLinks links={links} />
    </ListenWrapper>
  )
}
