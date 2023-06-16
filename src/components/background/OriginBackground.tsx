import React from 'react'
import styled from 'styled-components'
import {ScrollPage} from 'react-scroll-motion'
import {PageLayoutProps} from 'lodash'

const OriginBackground = ({children}: PageLayoutProps) => {
  return <CustomScrollPage>{children}</CustomScrollPage>
}

export default OriginBackground

const CustomScrollPage = styled(ScrollPage)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  background: rgba(16, 16, 16, 0);
`
