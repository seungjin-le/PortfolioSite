import React from 'react'
import {TagCloudOptions} from 'TagCloud'
import styled from 'styled-components'
import TagCloud from '@frank-mayer/react-tag-cloud'
import {skillSet} from '../../utility/listItems'

const SkillTagCloud = () => {
  return (
    <CloudBox>
      <TagCloud
        options={(w: Window): TagCloudOptions => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2.5,
          maxSpeed: 'fast',
        })}
        onClick={(tag: string) => alert(tag)}
        onClickOptions={{passive: true}}
      >
        {skillSet}
      </TagCloud>
    </CloudBox>
  )
}

export default SkillTagCloud

const CloudBox = styled.div`
  .tagcloud--item:hover:hover {
    color: #ff6347;
  }
`
