import React from 'react'
import {Layout} from 'antd'
import Header from './Header'
import Section from './Section'
import {PageLayoutProps} from 'lodash'
import styled from 'styled-components'
import WatchModel from '../../components/three/WatchModel'

const MainLayout = ({children}: PageLayoutProps) => {
  return (
    <CustomPageLayout>
      <Header />
      <WatchModel />
      <Section>{children}</Section>
    </CustomPageLayout>
  )
}

export default MainLayout

const CustomPageLayout = styled(Layout)`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  background: #161616;
  .section {
    height: 100%;
  }
`
