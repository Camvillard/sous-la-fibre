import styled from "styled-components"

export const ModalWrapper = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(55, 114, 157, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalBody = styled.div`
  background: white;
  width: 72vw;
  padding: 4vw;
`
export const ModalClose = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    position: relative;
    z-index: 1;
  }
`
export const ModalCloseText = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 0 -16px 0 0;
  position: relative;
  z-index: 4;
`
export const ModalTtle = styled.h3``

export const ModalContent = styled.div`
  padding: 2vw;
`

export const ModalFooter = styled.div``
