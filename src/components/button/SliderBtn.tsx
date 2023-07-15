import {memo} from 'react'
import CursorPointer from '../cursor/CursorPointer'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import styled from 'styled-components'
import {SliderBtnProps} from 'lodash'

const SliderBtn = ({onClick, direction}: SliderBtnProps) => {
  return (
    <SliderButtonBox className={`btn sliderBtn ${direction === 'left' ? 'left' : 'right'}`} onClick={() => onClick()}>
      {direction === 'left' ? <LeftOutlined /> : <RightOutlined />}
      <CursorPointer />
    </SliderButtonBox>
  )
}

export default memo(SliderBtn)

const SliderButtonBox = styled.span`
  font-size: 24px;
  z-index: 2;
  color: rgba(16, 16, 16);
  border-radius: 14px;
  transition: 0.2s;
  cursor: pointer;
  padding: 15px;
  background: rgba(238, 238, 238, 0.4);
  overflow: hidden;
  &:hover {
    transition: 0.2s;
    background: rgba(16, 16, 16, 0.8);
    & svg {
      color: rgba(238, 238, 238, 0.8);
    }
  }
  &:active {
    transition: 0.4s;
    box-shadow: 0 0 5px 10px #eee;
  }
`
