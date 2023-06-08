import React from 'react'

import {SectionFlexBoxProps} from 'lodash'
import {Animator, MoveIn} from 'react-scroll-motion'
import styled from 'styled-components'
import Title from '../../components/header/Title'

const FlexRowBox = ({title, left, right}: SectionFlexBoxProps) => {
  return (
    <FlexBox>
      <Animator className={'item left'} animation={MoveIn(-1000, 0)}>
        <Title title={title} />
        {left}
      </Animator>
      <Animator className={'item right'} animation={MoveIn(1000, 0)}>
        <Title title={' '} />
        {right}
      </Animator>
    </FlexBox>
  )
}

export default FlexRowBox

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  & .item {
    padding: 0 2rem;
    width: 100%;
  }
`
