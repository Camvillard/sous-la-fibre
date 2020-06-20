import React from "react"
import styled from "styled-components"
import {
  FaFacebookSquare,
  FaInstagram,
  FaSpotify,
  FaTwitterSquare,
  FaPodcast,
} from "react-icons/fa"
import { themeColors, themeBreakpoints } from "../../theme/theme-variables"
import { GooglePodcast } from "../Icons/GooglePodcast.component"

const { darkGray, mediumBlue, brightBlue, mediumGray, gray } = themeColors
const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

type IconLinkProps = {
  color?: string
}

type SocialProps = {
  iconColors?: string
  isFixed?: boolean
}

export const IconsWrapper = styled.ul<SocialProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  ${props => (props.isFixed ? "position: fixed; top: 16px; right: 16px" : "")};
`

export const IconLink = styled.li<IconLinkProps>`
  display: inline;
  margin-right: 8px;
  a {
    color: ${props => props.color || mediumBlue};
  }
  svg {
    width: 16px !important;
    height: 16px !important;
  }
  path {
    width: 100%;
    height: 100%:
  }

  @media (min-width: ${mdScreen}) {
    svg {
      width: 18px !important;
      height: 18px !important;
    }

  }
`

export const Social = ({ iconColors, isFixed }: SocialProps) => {
  return (
    <IconsWrapper isFixed={isFixed}>
      <IconLink color={iconColors}>
        <a
          href="https://podcast.ausha.co/souslafibre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPodcast />
        </a>
      </IconLink>
      <IconLink color={iconColors}>
        <a
          href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkLmF1c2hhLmNvL2IzNUU4ZkQ1alY0UA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GooglePodcast color={iconColors} />
        </a>
      </IconLink>
      <IconLink color={iconColors}>
        <a
          href="https://www.instagram.com/souslafibre/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </IconLink>
      <IconLink color={iconColors}>
        <a
          href="https://www.facebook.com/souslafibre/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
      </IconLink>
      <IconLink color={iconColors}>
        <a
          href="https://open.spotify.com/show/7vGvdX6m9jpiQtKzRrv6Yx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify />
        </a>
      </IconLink>
      <IconLink color={iconColors}>
        <a
          href="https://twitter.com/Mynamescm_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare />
        </a>
      </IconLink>
    </IconsWrapper>
  )
}
