import {memo, useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import Title from '../../components/texts/Title'
import SkillDescription from '../../components/descriptions/SkillDescription'
import CursorPointer from '../../components/cursor/CursorPointer'
import {collapseListItem} from '../../utility/listItems'
import SliderBtn from '../../components/button/SliderBtn'

const SkillList = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [isCarouselAutoSpin, setIsCarouselAutoSpin] = useState(true)

  useEffect(() => {
    const {current} = carouselRef
    const numImages = collapseListItem.length
    const angle = (2 * Math.PI) / numImages
    if (!current) return
    Array.from(current.children).forEach((child: any, index: number) => {
      const theta = angle * index
      child.style.transform = `rotateY(${theta}rad) translateZ(230px)`
    })

    current.style.transform = `rotateY(${-angle * activeIndex}rad)`
  }, [activeIndex])

  const handleImageRotationStops = useCallback(() => {
    setIsCarouselAutoSpin(false)
  }, [])

  const handlePrev = useCallback(() => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? collapseListItem.length - 1 : prevIndex - 1))
    handleImageRotationStops()
  }, [activeIndex])

  const handleNext = useCallback(() => {
    setActiveIndex(prevIndex => (prevIndex === collapseListItem.length - 1 ? 0 : prevIndex + 1))
    handleImageRotationStops()
  }, [activeIndex])

  const handleSkillOnClick = useCallback((key: number) => {
    setActiveIndex(key - 1)
    handleImageRotationStops()
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isCarouselAutoSpin)
        setActiveIndex(prevIndex => (prevIndex === 0 ? collapseListItem.length - 1 : prevIndex - 1))
    }, 2000)

    return () => {
      clearInterval(intervalId)
    }
  }, [isCarouselAutoSpin])

  return (
    <SkillContainer>
      <div className={'titleBox'}>
        <Title title={'Skills & Tools'} color={'#eee'} level={1} />
      </div>
      <SkillSlideBox>
        <div className={'skillBox'}>
          {collapseListItem.map(value => {
            return (
              <SkillDescription title={value.label} key={value.key} index={value.key} onClick={handleSkillOnClick} />
            )
          })}
        </div>
        <ContainerBox>
          <Container>
            <div className={'sliderBtnBox'}>
              <SliderBtn onClick={handlePrev} direction={'left'} />
              <SliderBtn onClick={handleNext} direction={'right'} />
            </div>
            <Carousel ref={carouselRef}>
              {collapseListItem.map(value => (
                <Slide key={value.key} className={'overflow-hidden'}>
                  <div className={'skillIcon'} style={{backgroundImage: `url(${value.icons})`}} />
                  <div className={'description'}>{value.texts}</div>
                  <CursorPointer />
                </Slide>
              ))}
            </Carousel>
          </Container>
        </ContainerBox>
      </SkillSlideBox>
    </SkillContainer>
  )
}

export default memo(SkillList)

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 2rem;
  & .skillBox {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const SkillSlideBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 1020px) {
    flex-direction: column;
    & > div:last-child {
      width: 600px;
      margin-top: 2rem;
    }
  }
`

const ContainerBox = styled.div`
  max-height: 700px;
  height: 100%;
  width: 100%;
`
const Container = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  & .sliderBtnBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    & .btn {
      position: absolute;
      z-index: 2;
      top: 50%;

      &.right {
        left: 100%;
        transform: translateX(-100%);
      }
    }
    @media screen and (max-width: 600px) {
      & .btn.left {
        left: 21.7%;
      }
      & .btn.right {
        transform: translateX(-340%);
      }
    }
  }
`

const Carousel = styled.div`
  width: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  margin: 60px auto 0;
  height: 400px;
  max-height: 600px;
`

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background: rgba(53, 53, 53);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  box-sizing: border-box;
  border-radius: 14px;
  line-height: 18px;
  transition: 0.3s;
  font-size: 14px;
  & .skillIcon {
    margin: 1.5rem auto;
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 50px;
    border-radius: 14px;
  }
  & .description {
    width: 100%;
    padding: 1rem;
    color: #eee;
  }
`
