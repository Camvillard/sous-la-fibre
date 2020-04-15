import React, { Fragment, ReactNode } from "react"
import { GlobalStyle } from "../../theme/global-style"

type LayoutProps = {
  children?: ReactNode
}
const Layout = (props: LayoutProps) => {
  return (
    <Fragment>
      <GlobalStyle />
      {props.children}
    </Fragment>
  )
}

export default Layout
