import React, { ReactNode } from "react"
import { GlobalStyle } from "../../theme/global-style"
import { Footer } from "../Footer/Footer.component"

type LayoutProps = {
  children?: ReactNode
}
const Layout = (props: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
