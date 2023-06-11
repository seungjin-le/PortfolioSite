import React, {useRef, useState} from 'react'

import styled from 'styled-components'
import {Carousel} from 'antd'
import {CarouselRef} from 'antd/es/carousel'
import SliderImageItem from '../slider/SliderImageItem'
import Title from '../texts/Title'

export const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
]

const ProjectDescription = () => {
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
    <ProjectBox>
      <Containers>
        <Title title={'Projects'} level={1} />
        <div>
          <div style={{position: 'relative'}}>
            <Carousel dotPosition={'top'} ref={ref => (slider.current = ref)}>
              {images.map((value: string, index: number) => {
                return <SliderImageItem src={value} alt={value} key={index} />
              })}
            </Carousel>
            <div className='next' onClick={() => handleSliderOnChange(1)}>
              {'‣'}
            </div>
            <div className='prev' onClick={() => handleSliderOnChange(-1)}>
              {'‣'}
            </div>
          </div>
        </div>
      </Containers>
    </ProjectBox>
  )
}

export default ProjectDescription

const ProjectBox = styled.div`
  width: 100%;
  max-height: 720px;
  height: 100%;
  display: flex;
  flex-direction: column;
  & .team + td span {
    display: flex;
    justify-content: space-between;
  }
`
const Containers = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  & div {
    width: 100%;
  }
  & > div {
    padding: 0 2rem;
  }

  .next,
  .prev {
    top: calc(47%);
    position: absolute;
    background: white;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
  }

  .next {
    right: 20px;
  }

  .prev {
    left: 20px;
    transform: scale(-1);
  }
`
