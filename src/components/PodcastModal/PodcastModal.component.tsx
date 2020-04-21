import React from "react"
import { Modal } from "../Modal/Modal.component"
import {
  ModalBody,
  ModalClose,
  ModalContent,
  ModalCloseText,
} from "../Modal/Modal.ui"
import DiamondIcon from "../Icons/Diamond.component"

type PodcastModalProps = {
  isOpen: boolean
  closeModal: any
}

export const PodcastModal = (props: PodcastModalProps) => {
  const { isOpen, closeModal } = props
  return (
    <Modal isOpen={isOpen}>
      <ModalBody>
        <ModalClose onClick={closeModal}>
          <ModalCloseText>retour</ModalCloseText>
          <DiamondIcon width={84 / 4} height={100 / 4} />
        </ModalClose>
        <ModalContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
            exercitationem. Sequi itaque ab quo quasi perferendis repellendus
            deleniti eveniet iusto laborum. Rerum mollitia velit incidunt
            nostrum qui repudiandae consequatur ea?
          </p>
        </ModalContent>
      </ModalBody>
    </Modal>
  )
}
