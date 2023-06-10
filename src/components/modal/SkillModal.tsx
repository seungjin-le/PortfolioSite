import {Modal} from 'antd'
import {ModalProps} from 'lodash'
import React from 'react'

const SkillModal = ({item, showModal, setShowModal}: ModalProps) => {
  return (
    <>
      <Modal
        title={item?.title}
        centered
        open={showModal}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      >
        <p>{item?.description || ''}</p>
      </Modal>
    </>
  )
}

export default SkillModal
