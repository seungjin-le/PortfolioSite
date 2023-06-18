import React, {useState} from 'react'
import {styled} from 'styled-components'

const CursorPointer = () => {
  const [position, setPosition] = useState({x: 0, y: 0})
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseMove = (event: any) => {
    setIsHovered(true)
    setPosition({
      x: event.nativeEvent.offsetX - 5,
      y: event.nativeEvent.offsetY - 5,
    })
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  return (
    <LightComponent onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {isHovered && <Light style={{top: `${position.y}px`, left: `${position.x}px`}} />}
    </LightComponent>
  )
}
export default CursorPointer
const LightComponent = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 1rem;
  position: absolute;
  overflow: hidden;
`

const Light = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  width: 0 !important;
  height: 0 !important;
  border-radius: 50%;
  pointer-events: none;
  transition: all 0.01s ease-out;
  box-shadow: 0 0 30px 15px rgba(255, 255, 255, 0.7);
`
