import {useCallback, useRef, useState} from 'react'
import styled from 'styled-components'
import {Carousel} from 'antd'
import {CarouselRef} from 'antd/es/carousel'
import Title from '../texts/Title'
import {projectsInfo} from '../../utility/listItems'
import SliderBtn from '../button/SliderBtn'
import ProjectDescription from '../descriptions/ProjectDescription'

const ProjectsSlider = () => {
  const [slide, setSlide] = useState(0)
  const slider = useRef<CarouselRef | null | undefined>()
  const [scrollTop, setScrollTop] = useState(false)
  const [scrollBottom, setScrollBottom] = useState(true)
  const [scrollBtnClick, setScrollBtnClick] = useState('')

  const handleSliderOnChange = useCallback(
    (num: number) => {
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
    },
    [slide],
  )

  return (
    <div className={'relative flex flex-col w-full'}>
      <Title title={'Projects'} color={'#eee'} level={1} />
      <div className={'project px-8'}>
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
          <SliderBtnBox className={'posY'}>
            {scrollTop && <SliderBtn direction={'left'} onClick={() => setScrollBtnClick('up')} />}
            {scrollBottom && <SliderBtn direction={'right'} onClick={() => setScrollBtnClick('down')} />}
          </SliderBtnBox>
          <SliderBtnBox className={'posX'}>
            <SliderBtn direction={'left'} onClick={() => handleSliderOnChange(-1)} />
            <SliderBtn direction={'right'} onClick={() => handleSliderOnChange(1)} />
          </SliderBtnBox>
        </SliderBox>
      </div>
    </div>
  )
}

export default ProjectsSlider

const SliderBox = styled.div`
  border-radius: 18px;
  padding: 2rem;
  background: rgba(53, 53, 53, 0.4);
  height: 100%;
  max-width: 1200px;
  position: relative;

  & .slick-slider.slick-initialized {
    width: 100%;
    height: 100%;
  }

  & .slick-dots.slick-dots-top * {
    background: rgba(238, 238, 238, 0.6);
    &.slick-active * {
      background: rgba(238, 238, 238, 0.9);
    }
  }

  & .ant-carousel.css-dev-only-do-not-override-dfjnss {
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
`
const SliderBtnBox = styled.div`
  &.posX {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    & .btn {
      position: absolute;
      z-index: 2;
      top: 45%;
      &.right {
        left: 100%;
        transform: translateX(-55%);
      }
      &.left {
        left: -2.2%;
      }
    }
  }
  &.posY {
    display: inline-block;
    width: 100%;
    & .btn {
      position: absolute;
      z-index: 2;
      left: 50%;
      transform: rotate(90deg) translateY(50%);
      &.left {
        top: -6%;
        margin-top: 7rem;
      }
      &.right {
        top: 100%;
        transform: rotate(90deg) translate(-100%, 50%);
      }
    }
  }
`