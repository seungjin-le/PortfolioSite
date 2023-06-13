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
      <Title title={'Projects'} color={'#adefd1'} level={1} />
      <SliderBox>
        <Carousel dotPosition={'top'} ref={ref => (slider.current = ref)} className={'qwe'}>
          {projectsInfo?.map((value, index) => {
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
  width: 100%;
  height: 100%;
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
    background: rgba(0, 32, 63, 0.8);
    font-size: 26px;
  }
`
const SliderBox = styled.div`
  border-radius: 18px;
  padding: 2rem 0;
  background: rgb(173, 239, 209);
  height: 100%;
  position: relative;
  //box-shadow: inset -5px 0 10px 5px rgb(77, 71, 71), inset 20px 0px 20px 20px rgb(77, 71, 71);
  & .slick-dots.slick-dots-top * {
    background: rgba(0, 32, 63, 0.6);
    &.slick-active * {
      background: rgba(0, 32, 63, 0.6);
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
          margin-top: 6rem;
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
  height: auto;
  width: 100%;
  .next.btn,
  .prev.btn {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-100%);

    & span svg {
      color: #00203f;
    }
    &:hover {
      background: rgba(0, 32, 63, 0.8);
    }
    &:active {
      transition: 0.2s;
      box-shadow: 0 0 5px 10px #00203f;
    }
    &.next {
      left: 100%;
      transform: translate(-100%, -100%);
      margin-left: -3rem;
    }

    &.prev {
      background: rgba(173, 239, 209, 0.4);
      margin-left: 3rem;
      &:hover {
        background: rgba(173, 239, 209, 0.8);
      }
      &:active {
        transition: 0.2s;
        box-shadow: 0 0 5px 10px #adefd1;
      }
    }
  }
`
