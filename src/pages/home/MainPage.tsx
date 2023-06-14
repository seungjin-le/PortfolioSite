import React from 'react'
import {ScrollContainer, Sticky, Fade, batch, MoveOut, Move, ZoomIn, Animator, MoveIn} from 'react-scroll-motion'
import FlexRowBox from '../../container/sections/FlexRowBox'
import styled from 'styled-components'
import ProjectSlider from '../../components/descriptions/ProjectSlider'
import SkillTagCloud from '../../components/tagCloud/SkillTagCloud'
import AboutMe from '../../components/descriptions/AboutMe'
import MainDraw from '../../components/draw/MainDraw'
import SiteLinks from '../../components/siteLink/SiteLinks'
import Title from '../../components/texts/Title'
import OriginBackground from '../../components/background/OriginBackground'
import Footer from '../../container/layout/Footer'
import WatchModel from '../../components/three/WatchModel'

const MainPage = () => {
  const ZoomInScrollOut = batch(Sticky(), Move(), ZoomIn(), Fade())

  return (
    <CustomScrollContainer>
      <OriginBackground>
        <MainDraw />
        <WatchModel />
      </OriginBackground>

      <OriginBackground>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Title title={'안녕하세요?'} color={'#eee'} level={1} />
        </Animator>
      </OriginBackground>

      <OriginBackground>
        <Animator animation={ZoomInScrollOut}>
          <Title title={'프론트엔드 개발자 이승진 입니다.'} color={'#eee'} level={1} />
        </Animator>
      </OriginBackground>
      <OriginBackground>
        <FlexRowBox title={'About Me'} left={<AboutMe />} right={<SkillTagCloud />} />
      </OriginBackground>
      <OriginBackground>
        <Animator animation={MoveIn(-4000, 0)}>
          <ProjectSlider />
        </Animator>
      </OriginBackground>
      <OriginBackground>
        <Animator animation={MoveIn(2000, 0)}>
          <SiteLinks />
        </Animator>
      </OriginBackground>
      <OriginBackground>
        <Animator animation={batch(Fade(), Sticky())}>
          <Title title={'감사합니다.'} color={'#eee'} level={1} />
        </Animator>
      </OriginBackground>
      <Footer />
    </CustomScrollContainer>
  )
}

export default MainPage

const CustomScrollContainer = styled(ScrollContainer)`
  width: 100%;
  height: 100%;
`
