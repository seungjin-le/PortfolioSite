// import CustomAnimator from 'components/background/CustomAnimator'
import ScrollContainer from 'react-scroll-motion/dist/ScrollContainer'
import CustomScrollPage from '../../components/background/CustomScrollPage'
import ProjectSections from 'components/descriptions/ProjectSections'
import {projectsInfo} from '../../utility/listItems'

const ProjectsPage = () => {
  return (
    <ScrollContainer className={'w-full h-full relative'}>
      {projectsInfo?.map((v, i) => {
        return (
          <CustomScrollPage key={i}>
            <ProjectSections item={v} />
          </CustomScrollPage>
        )
      })}
    </ScrollContainer>
  )
}

export default ProjectsPage
