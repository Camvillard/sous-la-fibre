import React, { useState } from "react"
import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { TAcfData } from "../../models/podcast.model"
import { useMediaQuery } from "react-responsive"

const { mediumBlue, darkGray, brighBlue, coral } = themeColors
const { mdScreen } = themeBreakpoints

const ListenWrapper = styled.div`
  margin-top: 24px;
  padding: 8px;
  background: ${coral};
  @media (min-width: ${mdScreen}) {
    background: none;
    margin-top: 16px;
    border: none;
  }
`

const ToggleListen = styled.h4`
  margin: 0;
  text-align: center;
  padding: 8px 0;
  color: ${darkGray};
`

const PodcastList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
  margin-bottom: 0;
  li {
    text-transform: uppercase;
    text-align: center;
  }
  a {
    color: ${darkGray};
  }
`

type TPodcastPageLinksProps = {
  links: TAcfData
}

export const PodcastPageMobileLinks = ({ links }: TPodcastPageLinksProps) => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <ListenWrapper>
      <ToggleListen onClick={toggle}>
        {isOpen ? "fermer" : "écouter l'épisode"}
      </ToggleListen>
      {isOpen && <PodcastListLinks links={links} />}
    </ListenWrapper>
  )
}

export const PodcastPageDesktopLInks = ({ links }: TPodcastPageLinksProps) => {
  return (
    <ListenWrapper>
      <ToggleListen>écouter l'épisode</ToggleListen>
      <PodcastListLinks links={links} />
    </ListenWrapper>
  )
}

const PodcastListLinks = ({ links }: TPodcastPageLinksProps) => {
  const { lienAusha } = links
  return (
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
  )
}

export const PodcastPageLinks = ({ links }: TPodcastPageLinksProps) => {
  const { lienAusha } = links
  const [isOpen, setOpen] = useState(false)

  const isDesktop = useMediaQuery({
    query: `(min-device-width: ${mdScreen})`,
  })

  return (
    <ListenWrapper>{isDesktop ? <p>desktop links</p> : <></>}</ListenWrapper>
  )
}
