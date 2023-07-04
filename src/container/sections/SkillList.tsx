import {memo, useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import Title from '../../components/texts/Title'
import SkillDescription from '../../components/descriptions/SkillDescription'
import CursorPointer from '../../components/cursor/CursorPointer'
import {collapseListItem} from '../../utility/listItems'
import SliderBtn from '../../components/button/SliderBtn'
import SkillListState from '../../zustand/SkillListState'

const SkillList = () => {
  const {activeIndex, setActiveIndex} = SkillListState(state => state)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const cardsLen = collapseListItem.length
  const [direction, setDirection] = useState('right')

  useEffect(() => {
    const {current} = carouselRef
    if (!current) return
    const activeChild: any = current.children[activeIndex]
    if (!activeChild) return
    activeChild.style.animation = direction === 'next' ? 'cardNextMove 0.5s forwards' : 'cardPrevMove 0.5s forwards'
    setTimeout(() => {
      activeChild.style.zIndex = cardsLen + 1
    }, 250)
    setTimeout(() => {
      activeChild.style.animation = ''
    }, 500)
  }, [activeIndex])

  const handleReSetCardStyle = (actionType: string) => {
    const {current} = carouselRef

    if (!current) return
    Array.from(current.children).forEach((child: any, index: number) => {
      child.style.transform = 'none'
      child.style.animation = ''
      child.style.zIndex =
        actionType === 'prev'
          ? cardsLen - Math.abs(activeIndex - index)
          : activeIndex < index
          ? 0
          : cardsLen - Math.abs(activeIndex - index)
    })
  }

  const handlePrev = useCallback(() => {
    setActiveIndex(activeIndex === 0 ? cardsLen - 1 : activeIndex - 1)
    setDirection('prev')
    handleReSetCardStyle('prev')
  }, [activeIndex])

  const handleNext = useCallback(() => {
    const {current} = carouselRef
    if (!current) return
    const newIndex = activeIndex === cardsLen - 1 ? 0 : activeIndex + 1
    setActiveIndex(newIndex)
    setDirection('next')
    handleReSetCardStyle('next')
  }, [activeIndex])

  const handleSkillOnClick = useCallback(
    (key: number) => {
      const {current} = carouselRef
      if (!current) return
      setActiveIndex(key - 1)
      handleReSetCardStyle('next')
    },
    [activeIndex],
  )

  return (
    <div className={'flex flex-col px-8 h-full w-full relative items-center justify-center'}>
      <div className={'titleBox w-full h-auto'}>
        <Title title={'Skills & Tools'} color={'#eee'} />
      </div>
      <div className={'flex flex-row md:flex-col w-full items-center justify-center'}>
        <div className={'skillBox flex flex-1 flex-wrap flex-row md:justify-center'}>
          {collapseListItem.map(value => {
            return (
              <SkillDescription title={value.label} key={value.key} index={value.key} onClick={handleSkillOnClick} />
            )
          })}
        </div>
        <div className={'flex-1 max-h-[600px] w-full h-full'}>
          <Container className={'w-full h-full flex flex-col justify-center items-center'}>
            <div className={'sliderBtnBox'}>
              <SliderBtn onClick={handlePrev} direction={'left'} />
              <SliderBtn onClick={handleNext} direction={'right'} />
            </div>
            <div
              ref={carouselRef}
              className={
                'max-w-[340px] w-full h-[500px] md:mt-20  mx-auto transition-default flex items-center justify-center relative'
              }
            >
              {collapseListItem.map(value => (
                <Slide
                  key={value.key}
                  className={
                    'absolute w-full h-full rounded-default  overflow-hidden max-h-[500px] max-w-[340px] flex flex-col items-center justify-items-start leading-6 sm:max-h-[450px] sm:max-w-[300px]'
                  }
                >
                  <img
                    className={'skillIcon my-6 mx-auto max-h-[90px] rounded-default'}
                    src={value.icons}
                    alt={value.label}
                  />
                  <div className={'text-itemText text-3xl md:text-2xl '}>{value.label}</div>
                  <div className={'w-full p-4 text-text text-lg md:text-base'}>{value.texts}</div>
                  <CursorPointer />
                </Slide>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default memo(SkillList)

const Container = styled.div`
  perspective: 1000px;

  & .sliderBtnBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    & .btn {
      position: absolute;
      z-index: 100;
      top: 50%;
      transform: translateY(-100%);
      &.right {
        left: 100%;
        transform: translateX(-100%) translateY(-100%);
      }
    }
    @media screen and (max-width: 600px) {
      & .btn {
        top: 35%;
      }

      & .btn.left {
        left: 10%;
      }
      & .btn.right {
        left: 90%;
      }
    }
  }
`

const Slide = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background: rgba(53, 53, 53);
`
