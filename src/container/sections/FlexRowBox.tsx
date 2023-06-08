import React from 'react'

import {SectionFlexBoxProps} from 'lodash'
import {Animator, MoveIn} from 'react-scroll-motion'
import styled from 'styled-components'
import Title from '../../components/header/Title'

const FlexRowBox = ({title, left, right}: SectionFlexBoxProps) => {
  return (
    <FlexBox>
      <div className={'titleBox'}>
        <Title title={title} />
      </div>
      <div className={'aboutBox'}>
        <Animator className={'item left'} animation={MoveIn(-1000, 0)}>
          {left}
        </Animator>

        <Animator className={'item right'} animation={MoveIn(1000, 0)}>
          <Title title={' '} />
          {right}
        </Animator>
      </div>
    </FlexBox>
  )
}

export default FlexRowBox

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  & .titleBox {
    width: 100%;
    display: flex;
    align-items: start;
    margin-bottom: 2rem;
  }
  & .aboutBox {
    width: 100%;
    max-height: 520px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  & .item {
    padding: 0 2rem;
    width: 50%;
    height: 100%;
  }
`
