import React, {useState} from 'react'
import {TagCloudOptions} from 'TagCloud'
import styled from 'styled-components'
import TagCloud from '@frank-mayer/react-tag-cloud'
import {skillSet, tagItems} from '../../utility/listItems'
import SkillModal from '../modal/SkillModal'

const SkillTagCloud = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState({
    title: '',
    description: '',
  })

  const handleOnClickTag = (tag: string): void => {
    if (tagItems[tag]) {
      setShowModal(true)
      setSelectedItem(tagItems[tag])
    }
  }

  return (
    <CloudBox>
      <TagCloud
        options={(w: Window): TagCloudOptions => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'fast',
        })}
        onClick={(tag: string) => handleOnClickTag(tag)}
        onClickOptions={{passive: true}}
      >
        {skillSet}
      </TagCloud>
      <SkillModal item={selectedItem} showModal={showModal} setShowModal={setShowModal} />
    </CloudBox>
  )
}

export default SkillTagCloud

const CloudBox = styled.div`
  display: flex;
  color: #eee;
  justify-content: flex-start;
  padding: 0 2rem 2rem;
  .tagcloud--item:hover:hover {
    font-size: 24px;
    transition: 0.5s;
  }
`
