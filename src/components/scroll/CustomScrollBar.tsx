import React from 'react'
import {motion, useScroll, useSpring} from 'framer-motion'
import styled from 'styled-components'

const CustomScrollBar = () => {
  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 10,
    restDelta: 0.001,
  })

  return (
    <ScrollBox>
      <CustomMotionScrollBar style={{scaleY: scaleX}} />
    </ScrollBox>
  )
}

export default CustomScrollBar

const ScrollBox = styled.div`
  height: 100%;
  width: 10px;
  position: fixed;
  left: 100%;
  transform: translate(-100%);
  z-index: 6;
`

const CustomMotionScrollBar = styled(motion.div)`
  width: 100%;
  height: 100%; // 높이를 100%로 설정합니다.
  background: rgba(238, 238, 238, 0.4);
  transform-origin: top; // 변환의 기준점을 상단으로 설정합니다.
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`
