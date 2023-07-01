import {ScrollContainer, Sticky, Fade, batch, MoveOut, MoveIn} from 'react-scroll-motion'
import FlexRowBox from '../../container/sections/FlexRowBox'
import MainDraw from '../../components/draw/MainDraw'
import SiteLinks from '../../components/siteLink/SiteLinks'
import Title from '../../components/texts/Title'
import CustomScrollPage from '../../components/background/CustomScrollPage'
import Footer from '../../container/layout/Footer'
import DescriptionsBox from 'components/descriptions/DescriptionsBox'
import SkillTagCloud from '../../components/tags/SkillTagCloud'
import SkillList from '../../container/sections/SkillList'
import AboutCard from '../../components/card/AboutCard'
import CustomAnimator from '../../components/background/CustomAnimator'

const MainPage = () => {
  return (
    <ScrollContainer className={'w-full h-full relative'}>
      <CustomScrollPage>
        <MainDraw />
      </CustomScrollPage>
      <CustomScrollPage>
        <CustomAnimator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Title title={'안녕하세요?'} color={'#eee'} level={1} />
          <Title title={'신입 프론트엔드 개발자 이승진 입니다.'} color={'#eee'} level={1} />
        </CustomAnimator>
      </CustomScrollPage>
      <CustomScrollPage>
        <FlexRowBox title={'About Me'} left={<DescriptionsBox />} right={<SkillTagCloud />} />
      </CustomScrollPage>
      <CustomScrollPage>
        <SkillList />
      </CustomScrollPage>
      {/*
      <CustomScrollPage>
        <CustomAnimator animation={MoveIn(-4000, 0)}>
          <ProjectSlider />
        </CustomAnimator>
      </CustomScrollPage> 
      */}
      <CustomScrollPage>
        <CustomAnimator animation={MoveIn(2000, 0)}>
          <SiteLinks />
        </CustomAnimator>
      </CustomScrollPage>
      <CustomScrollPage>
        <AboutCard />
      </CustomScrollPage>
      <Footer />
    </ScrollContainer>
  )
}

export default MainPage
