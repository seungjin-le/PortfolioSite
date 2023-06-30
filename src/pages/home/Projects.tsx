import CustomAnimator from 'components/background/CustomAnimator'
import ScrollContainer from 'react-scroll-motion/dist/ScrollContainer'
import CustomScrollPage from '../../components/background/CustomScrollPage'
import ProjectsSlider from 'components/slider/ProjectsSlider'
import {MoveIn} from 'react-scroll-motion'

const ProjectsPage = () => {
  return (
    <ScrollContainer className={'w-full h-full relative'}>
      <CustomScrollPage>
        <CustomAnimator animation={MoveIn(-4000, 0)}>
          <ProjectsSlider />
        </CustomAnimator>
      </CustomScrollPage>
    </ScrollContainer>
  )
}

export default ProjectsPage
