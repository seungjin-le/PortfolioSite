import React from 'react'
import styled from 'styled-components'
import {ScrollPage} from 'react-scroll-motion'
import {PageLayoutProps} from 'lodash'

const CustomScrollPage = ({children}: PageLayoutProps) => {
  return <CustomScrollPageBox>{children}</CustomScrollPageBox>
}

export default CustomScrollPage

const CustomScrollPageBox = styled(ScrollPage)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
`
