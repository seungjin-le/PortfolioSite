import {Modal} from 'antd'
import {TagModalProps} from 'lodash'
import React from 'react'

const SkillModal = ({item, showModal, setShowModal}: TagModalProps) => {
  return (
    <>
      <Modal
        title={item.title || ''}
        centered
        open={showModal}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      >
        <p>{item.description || ''}</p>
      </Modal>
    </>
  )
}

export default SkillModal
