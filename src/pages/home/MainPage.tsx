import {ScrollContainer} from 'react-scroll-motion'
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
import {useRef} from 'react'
import {useInView} from 'framer-motion'
import AboutTimeLine from 'components/timeLine/AboutTimeLine'

const MainPage = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {once: true})

  return (
    <ScrollContainer className={'w-full h-full relative scroll-smooth'}>
      <CustomScrollPage>
        <MainDraw />
      </CustomScrollPage>
      <CustomScrollPage>
        <div
          className={'w-full h-full flex flex-col items-center justify-center px-4'}
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <div ref={ref} className={'flex flex-col'}>
            <Title title={'안녕하세요?'} color={'#eee'} />
            <Title title={'신입 프론트엔드 개발자 이승진 입니다.'} color={'#eee'} />
          </div>
        </div>
      </CustomScrollPage>
      <CustomScrollPage>
        <FlexRowBox title={'About Me'} left={<DescriptionsBox />} right={<SkillTagCloud />} />
      </CustomScrollPage>
      <CustomScrollPage>
        <SkillList />
      </CustomScrollPage>
      <CustomScrollPage>
        <SiteLinks />
      </CustomScrollPage>
      <CustomScrollPage>
        <AboutTimeLine />
      </CustomScrollPage>
      <CustomScrollPage>
        <AboutCard />
      </CustomScrollPage>
      <Footer />
    </ScrollContainer>
  )
}

export default MainPage
