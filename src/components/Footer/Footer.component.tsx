import React from "react"
import { FooterWrapper, Copyright } from "./Footer.ui"
import { Social } from "../Social/Social.component"
import { themeColors } from "../../theme/theme-variables"

const { mediumBlue } = themeColors

export const Footer = () => {
  return (
    <FooterWrapper>
      <Social iconColors={mediumBlue} />
      <Copyright>
        © {new Date().getFullYear()} - sous la fibre | tous droits réservés
      </Copyright>
    </FooterWrapper>
  )
}
