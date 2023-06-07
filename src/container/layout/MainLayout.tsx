import React from 'react'
import {Layout} from 'antd'
import Header from './Header'
import Footer from './Footer'
import Section from './Section'
import {PageLayoutProps} from 'lodash'
import styled from 'styled-components'

const MainLayout = ({children}: PageLayoutProps) => {
  return (
    <CustomPageLayout>
      <Header />
      <Section>{children}</Section>
      <Footer />
    </CustomPageLayout>
  )
}

export default MainLayout

const CustomPageLayout = styled(Layout)`
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`
