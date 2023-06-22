import React from 'react'
import {ScrollContainer, Sticky, Fade, batch, MoveOut, MoveIn} from 'react-scroll-motion'
import FlexRowBox from '../../container/sections/FlexRowBox'
import MainDraw from '../../components/draw/MainDraw'
import SiteLinks from '../../components/siteLink/SiteLinks'
import Title from '../../components/texts/Title'
import OriginBackground from '../../components/background/CustomScrollPage'
import Footer from '../../container/layout/Footer'
import DescriptionsBox from 'components/descriptions/DescriptionsBox'
import SkillTagCloud from '../../components/tags/SkillTagCloud'
import SkillList from '../../container/sections/SkillList'
import AboutCard from '../../components/card/AboutCard'
import ProjectSlider from '../../components/slider/ProjectSlider'
import CustomAnimator from '../../components/background/CustomAnimator'

const MainPage = () => {
  return (
    <ScrollContainer snap='mandatory' className={'w-full h-full'}>
      <OriginBackground>
        <MainDraw />
      </OriginBackground>
      <OriginBackground>
        <CustomAnimator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Title title={'안녕하세요?'} color={'#eee'} level={1} />
          <Title title={'프론트엔드 개발자 이승진 입니다.'} color={'#eee'} level={1} />
        </CustomAnimator>
      </OriginBackground>
      <OriginBackground>
        <FlexRowBox title={'About Me'} left={<DescriptionsBox />} right={<SkillTagCloud />} />
      </OriginBackground>
      <OriginBackground>
        <SkillList />
      </OriginBackground>
      <OriginBackground>
        <CustomAnimator animation={MoveIn(-4000, 0)}>
          <ProjectSlider />
        </CustomAnimator>
      </OriginBackground>
      <OriginBackground>
        <CustomAnimator animation={MoveIn(2000, 0)}>
          <SiteLinks />
        </CustomAnimator>
      </OriginBackground>
      <OriginBackground>
        <AboutCard />
      </OriginBackground>
      <Footer />
    </ScrollContainer>
  )
}

export default MainPage
