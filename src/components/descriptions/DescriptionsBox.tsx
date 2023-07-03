import {memo} from 'react'
import DescriptionMarkDown from '../texts/DescriptionMarkDown'
import styled from 'styled-components'
import {aboutMeText} from '../../utility/listItems'

const DescriptionsBox = () => {
  return (
    <AboutMeBox
      className={`text-text w-full h-full relative rounded-default transition-all break-keep sm:overflow-scroll  sm:scrollbar-hide`}
    >
      <DescriptionMarkDown description={aboutMeText} />
    </AboutMeBox>
  )
}

export default memo(DescriptionsBox)

//

const AboutMeBox = styled.div``
