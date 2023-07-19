import {memo, useEffect, useState} from 'react'
import {motion, useScroll, useSpring} from 'framer-motion'
import styled from 'styled-components'
import {throttle} from 'lodash'

const CustomScrollBar = () => {
  const {scrollYProgress} = useScroll()
  const [scrollPos, setScrollPos] = useState<number>(0)
  const handleScroll = throttle(() => {
    setScrollPos(window.scrollY)
  }, 200)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 10,
    restDelta: 0.001,
  })
  return (
    <ScrollBox>
      <CustomMotionScrollBar style={{scaleY: scrollPos === 0 ? '0' : scaleX}} />
    </ScrollBox>
  )
}

export default memo(CustomScrollBar)

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
  height: 100%;
  background: rgba(238, 238, 238, 0.4);
  transform-origin: top;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`
