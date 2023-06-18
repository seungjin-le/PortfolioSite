import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import Title from '../../components/texts/Title'
import SkillDescription from '../../components/descriptions/SkillDescription'
import CursorPointer from '../../components/cursor/CursorPointer'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import {collapseListItem} from '../../utility/listItems'

const SkillList = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    const numImages = collapseListItem.length
    const angle = (2 * Math.PI) / numImages
    if (!carousel) return
    Array.from(carousel.children).forEach((child: any, index: number) => {
      const theta = angle * index
      child.style.transform = `rotateY(${theta}rad) translateZ(250px)`
    })

    carousel.style.transform = `rotateY(${-angle * activeIndex}rad)`
  }, [activeIndex])

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? collapseListItem.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex === collapseListItem.length - 1 ? 0 : prevIndex + 1))
  }

  const handleSkillOnClick = (key: number) => {
    setActiveIndex(key - 1)
  }

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
              <span className={'btn left'} onClick={handlePrev}>
                <LeftOutlined />
                <CursorPointer />
              </span>
              <span className={'btn right'} onClick={handleNext}>
                <CursorPointer />
                <RightOutlined />
              </span>
            </div>
            <Carousel ref={carouselRef}>
              {collapseListItem.map(value => (
                <Slide key={value.key}>
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

export default SkillList

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
      font-size: 24px;
      position: absolute;
      z-index: 2;
      color: rgba(16, 16, 16);
      top: 50%;
      cursor: pointer;
      border-radius: 14px;
      padding: 15px;
      background: rgba(238, 238, 238, 0.4);
      transition: 0.2s;
      &.right {
        left: 100%;
        transform: translateX(-100%);
      }
      &:hover {
        transition: 0.2s;
        background: rgba(16, 16, 16, 0.8);
        color: rgba(238, 238, 238, 0.8);
      }
    }
  }
`

const Carousel = styled.div`
  width: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
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

  line-height: 15px;

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
