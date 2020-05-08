import React from "react"
import styled from "styled-components"
import { themeBreakpoints } from "../../theme/theme-variables"

const { smScreen, mdScreen } = themeBreakpoints

export const Image = styled.img<TLogoImageProps>`
  width: ${props => props.size.default};
  margin: 0 auto;

  @media (min-width: ${smScreen}) {
    width: ${props => props.size.sm};
  }

  @media (min-width: ${mdScreen}) and (orientation: landscape) {
    width: ${props => props.size.md};
  }

  @media (min-width: ${mdScreen}) and (orientation: portrait) {
    width: ${props => props.size.md};
  }
`

interface IBreakpoint {
  default: string
  sm?: string
  md?: string
  lg?: string
  xlg?: string
}

type TLogoImageProps = {
  size: IBreakpoint
}

export const LogoImage = ({ size }: TLogoImageProps) => {
  const imageUrl =
    "https://contenu.souslafibre.com/wp-content/uploads/2020/04/sous-la-fibre_sans-texte.jpg"
  const imageAlt =
    "logo sous la fibre - illustration bleue et orange d'un visage"
  return <Image src={imageUrl} alt={imageAlt} size={size} />
}
