import React, { ReactNode, Fragment } from "react"
import { ModalWrapper } from "./Modal.ui"

type ModalProps = {
  children?: ReactNode
  isOpen: boolean
}

export const Modal = (props: ModalProps) => {
  const { children, isOpen } = props
  return isOpen ? <ModalWrapper>{children}</ModalWrapper> : <Fragment />
}
