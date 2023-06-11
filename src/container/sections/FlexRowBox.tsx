import React, {useState} from 'react'
import {SectionFlexBoxProps} from 'lodash'
import {Animator, MoveIn} from 'react-scroll-motion'
import styled from 'styled-components'
import AboutMeModal from '../../components/modal/AboutMeModal'
import Title from '../../components/texts/Title'

const FlexRowBox = ({title, left, right}: SectionFlexBoxProps) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <FlexBox>
      <div className={'titleBox'}>
        <Title title={title} level={1} />
      </div>
      <div className={'aboutBox'} onClick={() => setShowModal(true)}>
        <Animator className={'item left'} animation={MoveIn(-1000, 0)}>
          {left}
        </Animator>

        <Animator className={'item right'} animation={MoveIn(1000, 0)}>
          {right}
        </Animator>

        <img className={'backgroundImage'} src='/images/background/watercolor.png' alt='' />
      </div>
      <AboutMeModal showModal={showModal} setShowModal={setShowModal} />
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
  & .titleBox {
    width: 100%;
    display: flex;
    align-items: start;
    margin-bottom: 2rem;
  }
  & .item {
    padding: 0 3rem;
    width: 50%;
    height: 100%;
  }
  & .backgroundImage {
    width: 110%;
    height: 100%;
    position: absolute;
    left: -5%;
    top: 0;
    z-index: -3;
    transition: 0.7s;
  }
  & .aboutBox:hover {
    color: #fff;

    .backgroundImage {
      filter: opacity(0.5) drop-shadow(0 0 0 black);
    }
  }

  & .aboutBox {
    position: relative;
    width: 100%;
    max-height: 520px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`
