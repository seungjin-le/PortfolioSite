import React from 'react'
import {
  ScrollContainer,
  ScrollPage,
  Sticky,
  Fade,
  batch,
  MoveOut,
  Move,
  ZoomIn,
  Animator,
  MoveIn,
} from 'react-scroll-motion'
import FlexRowBox from '../../container/sections/FlexRowBox'
import styled from 'styled-components'
import CollapseList from '../../components/lists/CollapseList'
import ProjectDescription from '../../components/descriptions/ProjectDescription'
import {CustomScrollPageProps} from 'lodash'
import SkillTagCloud from '../../components/tagCloud/SkillTagCloud'

const MainPage = () => {
  const ZoomInScrollOut = batch(Sticky(), Move(), ZoomIn(), Fade())
  const FadeUp = batch(Fade(), Move(), Sticky())

  return (
    <CustomScrollContainer>
      <CustomScrollPage gradientDirection={true}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{fontSize: '30px'}}></span>
        </Animator>
      </CustomScrollPage>
      <CustomScrollPage gradientDirection={false}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div style={{fontSize: '30px'}}>안녕하세요?</div>
        </Animator>
      </CustomScrollPage>
      <CustomScrollPage gradientDirection={true}>
        <Animator animation={ZoomInScrollOut}>
          <div style={{fontSize: '40px'}}>프론트엔드 개발자 이승진 입니다.✨</div>
        </Animator>
      </CustomScrollPage>
      <CustomScrollPage gradientDirection={false}>
        <FlexRowBox title={'Skill'} left={<SkillTagCloud />} right={<CollapseList />} />
      </CustomScrollPage>
      <CustomScrollPage gradientDirection={true}>
        <Animator animation={FadeUp}>
          <ProjectDescription />
        </Animator>
      </CustomScrollPage>

      <ScrollPage>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <span style={{fontSize: '40px'}}>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- Im Dante Chun -
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{fontSize: '40px'}}>Done</span>
          <br />
          <span style={{fontSize: '30px'}}>Theres FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation</span>
        </Animator>
      </ScrollPage>
    </CustomScrollContainer>
  )
}

export default MainPage

const CustomScrollContainer = styled(ScrollContainer)``

const CustomScrollPage = styled(ScrollPage)<CustomScrollPageProps>`
  background-image: ${({gradientDirection}) =>
      gradientDirection
        ? 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.5))'
        : 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'},
    url('/images/background/solidPaintedBackdrop.jpg');
  background-size: cover;
  opacity: 0.6;
`
