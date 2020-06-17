import React from "react"
import { FooterWrapper, Copyright, Credit } from "./Footer.ui"

export const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>
        © {new Date().getFullYear()} - sous la fibre | tous droits réservés
      </Copyright>
    </FooterWrapper>
  )
}
