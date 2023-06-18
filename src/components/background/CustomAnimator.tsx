import React from 'react'
import {Animator} from 'react-scroll-motion'
import {AnimatorProps} from 'lodash'
import styled from 'styled-components'

const CustomAnimator = ({children, animation}: AnimatorProps) => {
  return <CustomAnimatorBox animation={animation}>{children}</CustomAnimatorBox>
}

export default CustomAnimator

const CustomAnimatorBox = styled(Animator)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`
