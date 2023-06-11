import React from 'react'
import {ScrollContainer, Sticky, Fade, batch, MoveOut, Move, ZoomIn, Animator, MoveIn} from 'react-scroll-motion'
import FlexRowBox from '../../container/sections/FlexRowBox'
import styled from 'styled-components'

import ProjectDescription from '../../components/descriptions/ProjectDescription'
import SkillTagCloud from '../../components/tagCloud/SkillTagCloud'
import AboutMe from '../../components/descriptions/AboutMe'
import MainDraw from '../../components/draw/MainDraw'
import SiteLinks from '../../components/siteLink/SiteLinks'
import OldCinemaBackGround from '../../components/background/OldCinemaBackGround'
import Title from '../../components/texts/Title'

const MainPage = () => {
  const ZoomInScrollOut = batch(Sticky(), Move(), ZoomIn(), Fade())
  //const FadeUp = batch(Fade(), Move(), Sticky(), MoveOut(0, -200))

  return (
    <CustomScrollContainer>
      <OldCinemaBackGround>
        <MainDraw />
      </OldCinemaBackGround>

      <OldCinemaBackGround>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Title title={'안녕하세요?'} level={1} />
        </Animator>
      </OldCinemaBackGround>

      <OldCinemaBackGround>
        <Animator animation={ZoomInScrollOut}>
          <Title title={'프론트엔드 개발자 이승진 입니다.✨'} level={1} />
        </Animator>
      </OldCinemaBackGround>
      <OldCinemaBackGround>
        <FlexRowBox title={'About Me'} left={<AboutMe />} right={<SkillTagCloud />} />
      </OldCinemaBackGround>
      <OldCinemaBackGround>
        <Animator animation={MoveIn(-4000, 0)}>
          <ProjectDescription />
        </Animator>
      </OldCinemaBackGround>
      <OldCinemaBackGround>
        <Animator animation={MoveIn(2000, 0)}>
          <SiteLinks />
        </Animator>
      </OldCinemaBackGround>
      <OldCinemaBackGround>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{fontSize: '40px'}}>감사합니다.</span>
        </Animator>
      </OldCinemaBackGround>
    </CustomScrollContainer>
  )
}

export default MainPage

const CustomScrollContainer = styled(ScrollContainer)`
  width: 100%;
  height: 100%;
`
