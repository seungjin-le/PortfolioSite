import React from 'react'
import {PageLayoutProps} from 'lodash'
import styled from 'styled-components'
import {Layout} from 'antd'

const Section = ({children}: PageLayoutProps) => {
  return <CustomSectionLayout>{children}</CustomSectionLayout>
}

export default Section

const CustomSectionLayout = styled(Layout)`
  height: 100%;
  width: 100%;
  background: #161616;
`
