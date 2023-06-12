import React, {useRef, useState} from 'react'

import styled from 'styled-components'
import {Carousel} from 'antd'
import {CarouselRef} from 'antd/es/carousel'

import Title from '../texts/Title'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import ProjectDescription from './ProjectDescription'
import {projectsInfo} from '../../utility/listItems'

export const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
]
// const colors = ["processing", "success", "error", "warning", "magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];
const ProjectSlider = () => {
  const [slide, setSlide] = useState(0)
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
    <Containers>
      <Title title={'Projects'} color={'#adefd1'} level={1} />
      <SliderBox>
        <Carousel dotPosition={'top'} ref={ref => (slider.current = ref)}>
          {projectsInfo?.map((value, index) => {
            return <ProjectDescription item={value} key={index} />
          })}
        </Carousel>
        <SliderBtnBox>
          <span className='prev' onClick={() => handleSliderOnChange(-1)}>
            <LeftOutlined />
          </span>
          <span className='next' onClick={() => handleSliderOnChange(1)}>
            <RightOutlined />
          </span>
        </SliderBtnBox>
      </SliderBox>
    </Containers>
  )
}

export default ProjectSlider

const Containers = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  & div {
    width: 100%;
  }
`
const SliderBox = styled.div`
  border-radius: 18px;
  padding: 2rem 0;
  background: rgb(173, 239, 209);
  max-height: 700px;
  height: 100%;

  & .ant-carousel.css-dev-only-do-not-override-dfjnss {
    padding: 0 2.5rem;
    max-height: 636px;
    height: 100%;
    position: relative;

    & > div,
    & > div > div,
    & > div > div .slick-slide,
    & > div > div .slick-slide > div > div {
      max-height: 636px;
      height: 100%;
    }
  }
  & .team + td span {
    display: flex;
    justify-content: space-between;
  }
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
    font-size: 26px;
    & span svg {
      color: #00203f;
    }
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
