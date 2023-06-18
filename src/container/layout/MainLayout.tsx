import React from 'react'
import {Layout} from 'antd'
import Header from './Header'
import {PageLayoutProps} from 'lodash'
import styled from 'styled-components'
import WatchModel from 'components/three/WatchModel'

const MainLayout = ({children}: PageLayoutProps) => {
  return (
    <CustomPageLayout>
      <Header />
      {children}
      <WatchModel />
    </CustomPageLayout>
  )
}

export default MainLayout

const CustomPageLayout = styled(Layout)`
  height: 0;
  width: 100%;
  margin: 0 auto;
  max-width: 1800px;
  min-width: 400px;
`
