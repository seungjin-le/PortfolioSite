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

import ProjectDescription from '../../components/descriptions/ProjectDescription'
import {CustomScrollPageProps} from 'lodash'
import SkillTagCloud from '../../components/tagCloud/SkillTagCloud'
import AboutMe from '../../components/descriptions/AboutMe'
import MainDraw from '../../components/draw/MainDraw'
import SiteLinks from '../../components/siteLink/SiteLinks'

const MainPage = () => {
  const ZoomInScrollOut = batch(Sticky(), Move(), ZoomIn(), Fade())
  //const FadeUp = batch(Fade(), Move(), Sticky(), MoveOut(0, -200))

  return (
    <CustomScrollContainer>
      <CustomScrollPage gradientDirection={true}>
        <MainDraw />
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
        <FlexRowBox title={'About Me'} left={<AboutMe />} right={<SkillTagCloud />} />
      </CustomScrollPage>
      <CustomScrollPage gradientDirection={true}>
        <Animator animation={MoveIn(-400, 0)}>
          <ProjectDescription />
        </Animator>
      </CustomScrollPage>
      <CustomScrollPage gradientDirection={false}>
        <Animator animation={MoveIn(1000, 0)}>
          <SiteLinks />
        </Animator>
      </CustomScrollPage>
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

const CustomScrollContainer = styled(ScrollContainer)`
  width: 100%;
  & > div {
  }
`

const CustomScrollPage = styled(ScrollPage)<CustomScrollPageProps>`
  width: 100%;
  background-size: cover;
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
//background-image: ${({gradientDirection}) =>
//       gradientDirection
//         ? 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.5))'
//         : 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'},
//     url('/images/background/solidPaintedBackdrop.jpg');
