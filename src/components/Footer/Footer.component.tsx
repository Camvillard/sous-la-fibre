import React from "react"
import {
  FaFacebookSquare,
  FaInstagram,
  FaSpotify,
  FaTwitterSquare,
  FaPodcast,
} from "react-icons/fa"

import {
  FooterWrapper,
  Copyright,
  FooterIconsWrapper,
  IconLink,
} from "./Footer.ui"

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterIconsWrapper>
        <IconLink>
          <a
            href="https://podcast.ausha.co/souslafibre"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPodcast />
          </a>
        </IconLink>
        <IconLink>
          <a
            href="https://www.instagram.com/souslafibre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </IconLink>
        <IconLink>
          <a
            href="https://www.facebook.com/souslafibre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </IconLink>
        <IconLink>
          <a
            href="https://open.spotify.com/show/7vGvdX6m9jpiQtKzRrv6Yx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify />
          </a>
        </IconLink>
        <IconLink>
          <a
            href="https://twitter.com/Mynamescm_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare />
          </a>
        </IconLink>
      </FooterIconsWrapper>
      <Copyright>
        © {new Date().getFullYear()} - sous la fibre | tous droits réservés
      </Copyright>
    </FooterWrapper>
  )
}
