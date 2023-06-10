import React, {useRef, useState} from 'react'
import {Carousel} from 'antd'
import {images} from '../descriptions/ProjectDescription'
import {CarouselRef} from 'antd/es/carousel'
import styled from 'styled-components'
import SliderImageItem from './SliderImageItem'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'

const AboutSlider = () => {
  const [slide, setSlide] = useState<number>(0)
  const slider = useRef<CarouselRef | null | undefined>()
  const handleSliderOnChange = (num: number) => {
    const changeValue = slide + num
    if (!slider.current) return
    const len = images.length
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
      <CustomAntdSlider dotPosition={'top'} ref={ref => (slider.current = ref)}>
        {images.map((value: string, index: number) => {
          return <SliderImageItem src={value} alt={value} key={index} />
        })}
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
