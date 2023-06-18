import React from 'react'
import {ScrollContainer, Sticky, Fade, batch, MoveOut, Animator, MoveIn} from 'react-scroll-motion'
import FlexRowBox from '../../container/sections/FlexRowBox'
import styled from 'styled-components'
import ProjectSlider from '../../components/descriptions/ProjectSlider'
import MainDraw from '../../components/draw/MainDraw'
import SiteLinks from '../../components/siteLink/SiteLinks'
import Title from '../../components/texts/Title'
import OriginBackground from '../../components/background/CustomScrollPage'
import Footer from '../../container/layout/Footer'
import DescriptionsBox from 'components/descriptions/DescriptionsBox'
import SkillTagCloud from '../../components/tags/SkillTagCloud'
import SkillList from '../../container/sections/SkillList'

const MainPage = () => {
  return (
    <CustomScrollContainer snap='mandatory'>
      <OriginBackground>
        <MainDraw />
      </OriginBackground>
      <OriginBackground>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Title title={'안녕하세요?'} color={'#eee'} level={1} />
          <Title title={'프론트엔드 개발자 이승진 입니다.'} color={'#eee'} level={1} />
        </Animator>
      </OriginBackground>
      <OriginBackground>
        <FlexRowBox title={'About Me'} left={<DescriptionsBox />} right={<SkillTagCloud />} />
      </OriginBackground>
      <OriginBackground>
        <SkillList />
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
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
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
