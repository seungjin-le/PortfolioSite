import React, {useState} from 'react'
import {TagCloudOptions} from 'TagCloud'
import styled from 'styled-components'
import TagCloud from '@frank-mayer/react-tag-cloud'
import {skillSet, TagItems} from '../../utility/listItems'
import SkillModal from '../modal/SkillModal'

const SkillTagCloud = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState({
    title: '',
    description: '',
  })

  const handleOnClickTag = (tag: string): void => {
    if (TagItems[tag]) {
      setShowModal(true)
      setSelectedItem(TagItems[tag])
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
  transition: 0.5s;
  .tagcloud--item:hover:hover {
    color: #ff6347;
    font-size: 20px;
    transition: 0.5s;
  }
`
