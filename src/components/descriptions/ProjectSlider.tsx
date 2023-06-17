import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import {Carousel} from 'antd'
import {CarouselRef} from 'antd/es/carousel'
import Title from '../texts/Title'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import ProjectDescription from './ProjectDescription'
import {projectsInfo} from '../../utility/listItems'

const ProjectSlider = () => {
  const [slide, setSlide] = useState(0)
  const slider = useRef<CarouselRef | null | undefined>()
  const [scrollTop, setScrollTop] = useState(false)
  const [scrollBottom, setScrollBottom] = useState(true)
  const [scrollBtnClick, setScrollBtnClick] = useState('')

  const handleSliderOnChange = (num: number) => {
    const changeValue = slide + num
    const element = slider.current
    if (!element) return
    const len = projectsInfo.length

    if (changeValue === len || changeValue === -1) {
      setSlide(changeValue === len ? 0 : len - 1)
      element.goTo(changeValue === len ? 0 : len - 1)
    } else {
      setSlide(slide => slide + num)
      element.goTo(slide + num)
    }
    setScrollBtnClick('up')
  }

  return (
    <Containers>
      <Title title={'Projects'} color={'#eee'} level={1} />
      <SliderBox>
        <Carousel dotPosition={'top'} ref={ref => (slider.current = ref)}>
          {projectsInfo &&
            projectsInfo.map((value, index) => {
              return (
                <ProjectDescription
                  item={value}
                  key={index}
                  setScrollTop={setScrollTop}
                  setScrollBottom={setScrollBottom}
                  scrollBtnClick={scrollBtnClick}
                  setScrollBtnClick={setScrollBtnClick}
                />
              )
            })}
        </Carousel>
        <span className={'upDownBtnBox'}>
          <span>
            <span
              className='up btn'
              style={{display: scrollTop ? 'inline-block' : 'none'}}
              onClick={() => setScrollBtnClick('up')}
            >
              <LeftOutlined />
            </span>
          </span>
          <span>
            <span
              className='down btn'
              style={{display: scrollBottom ? 'inline-block' : 'none'}}
              onClick={() => setScrollBtnClick('down')}
            >
              <RightOutlined />
            </span>
          </span>
        </span>

        <SliderBtnBox>
          <span className='prev btn' onClick={() => handleSliderOnChange(-1)}>
            <LeftOutlined />
          </span>
          <span className='next btn' onClick={() => handleSliderOnChange(1)}>
            <RightOutlined />
          </span>
        </SliderBtnBox>
      </SliderBox>
    </Containers>
  )
}

export default ProjectSlider

const Containers = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  & .btn {
    border-radius: 50%;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    overflow: hidden;
    transition: 0.4s;
    background: rgba(238, 238, 238, 0.4);
    font-size: 26px;
    & svg {
      transition: 0.4s;
      color: #eee;
    }
    &:hover {
      background: rgba(238, 238, 238, 0.8);
      svg {
        color: #161616;
      }
    }
    &:active {
      transition: 0.4s;
      box-shadow: 0 0 5px 10px #eee;
    }
  }
`
const SliderBox = styled.div`
  border-radius: 18px;
  padding: 2rem 3rem;
  background: rgba(53, 53, 53, 0.7);
  height: 100%;
  max-width: 1200px;
  position: relative;
  & > div {
    width: 100%;
    height: 100%;
  }
  & .slick-slider.slick-initialized {
    background: red;
    width: 100%;
    min-width: 100%;
  }

  & .slick-dots.slick-dots-top * {
    background: rgba(238, 238, 238, 0.6);
    &.slick-active * {
      background: rgba(238, 238, 238, 0.9);
    }
  }

  & .ant-carousel.css-dev-only-do-not-override-dfjnss {
    padding: 0 2.5rem;
    height: 100%;
    position: relative;
  }

  & .team + td span {
    display: flex;
    justify-content: space-between;
  }
  & tbody {
    & th,
    & td {
      text-align: center !important;
      vertical-align: middle;
      font-size: 15px !important;
    }
    & tr:last-child * {
      text-align: start;
      vertical-align: baseline;
    }
  }

  & .upDownBtnBox {
    position: absolute;
    top: 100%;
    left: 50%;
    height: 100%;
    transform: translate(-50%);
    & span {
      &.btn {
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      & .up,
      & .down {
        transform: rotate(90deg) translateY(50%);

        &.up {
          top: -100%;
          margin-top: 6.5rem;
        }
        &.down {
          bottom: 100%;
          margin-bottom: 2.7rem;
        }
      }
    }
  }
`
const SliderBtnBox = styled.div`
  bottom: 100%;
  width: 100%;
  .next.btn,
  .prev.btn {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-100%);

    &.next {
      left: 100%;
      transform: translate(-100%, -100%);
      margin-left: -1.5rem;
    }

    &.prev {
      margin-left: 1.5rem;
    }
  }
`
