import CustomAnimator from 'components/background/CustomAnimator'
import ScrollContainer from 'react-scroll-motion/dist/ScrollContainer'
import CustomScrollPage from '../../components/background/CustomScrollPage'
import {MoveIn} from 'react-scroll-motion'
import ProjectSections from 'components/descriptions/ProjectSections'
import {projectsInfo} from '../../utility/listItems'

const ProjectsPage = () => {
  return (
    <ScrollContainer className={'w-full h-full relative'}>
      {projectsInfo?.map((v, i) => {
        return (
          <CustomScrollPage key={i}>
            <CustomAnimator animation={MoveIn(-4000, 0)}>
              <ProjectSections item={v} />
            </CustomAnimator>
          </CustomScrollPage>
        )
      })}
    </ScrollContainer>
  )
}

export default ProjectsPage
