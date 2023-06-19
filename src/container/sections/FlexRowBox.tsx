import React from 'react'
import {SectionFlexBoxProps} from 'lodash'
import {Animator, MoveIn} from 'react-scroll-motion'
import styled from 'styled-components'
import Title from '../../components/texts/Title'

const FlexRowBox = ({title, left, right}: SectionFlexBoxProps) => {
  return (
    <FlexBox>
      <div className={'titleBox'}>
        <Title title={title} color={'#eee'} level={1} />
      </div>
      <div className={'aboutBox'}>
        <Animator className={'item left'} animation={MoveIn(0, 800)}>
          {left}
        </Animator>
        <Animator className={'item right'} animation={MoveIn(600, 0)}>
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
  position: relative;
  padding: 2rem;

  & .titleBox {
    width: 100%;
    display: flex;
    align-items: start;
    margin-bottom: 2rem;
  }
  & .item {
    padding: 0 3rem;
    width: 50%;
  }
  & .aboutBox:hover {
    color: #eee;
  }

  & .aboutBox {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    @media (max-width: 1020px) {
      flex-direction: column;
      & > div {
        width: 100%;
        &.right > div {
          margin-top: 2rem;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`
