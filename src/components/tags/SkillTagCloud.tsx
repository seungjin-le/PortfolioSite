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
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'fast',
        })}
        //onClick={(tag: string) => handleOnClickTag(tag)}
        onClickOptions={{passive: true}}
      >
        {skillSet}
      </TagCloud>
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
