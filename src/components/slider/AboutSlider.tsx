import React, {useRef, useState} from 'react'
import {Carousel} from 'antd'
import {CarouselRef} from 'antd/es/carousel'
import styled from 'styled-components'

import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import Info from '../info/Info'
import InfoSkillList from '../list/InfoSkillList'

const AboutSlider = () => {
  const [slide, setSlide] = useState<number>(0)
  const slider = useRef<CarouselRef | null | undefined>(null)

  const handleSliderOnChange = (num: number) => {
    const changeValue = slide + num
    if (!slider.current) return
    const len: number = 2
    if (changeValue === len || changeValue === -1) {
      setSlide(changeValue === len ? 0 : len - 1)
      slider.current.goTo(changeValue === len ? 0 : len - 1)
      return
    }
    setSlide(slide => slide + num)
    slider.current.goTo(slide + num)
  }

  return (
    <SliderBox>
      <CustomAntdSlider dotPosition={'bottom'} ref={ref => (slider.current = ref)}>
        <Info />
        <InfoSkillList />
      </CustomAntdSlider>
      <SliderBtnBox>
        <div className='prev' onClick={() => handleSliderOnChange(-1)}>
          <LeftOutlined />
        </div>
        <div className='next' onClick={() => handleSliderOnChange(1)}>
          <RightOutlined />
        </div>
      </SliderBtnBox>
    </SliderBox>
  )
}

export default AboutSlider

const SliderBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const CustomAntdSlider = styled(Carousel)`
  width: 100%;
  height: 100%;
  padding: 0 4rem;
`

const SliderBtnBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  top: 45%;
  z-index: 0;
  .next,
  .prev {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    overflow: hidden;
    transition: 0.8s;
    background: rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
    &:active {
      transition: 0.2s;
      box-shadow: 0 0 5px 10px #fff;
    }
    &.next {
      right: 20px;
    }

    &.prev {
      left: 20px;
    }
  }
`
