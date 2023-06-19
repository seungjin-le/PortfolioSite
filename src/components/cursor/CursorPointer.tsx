import React, {useCallback, useState} from 'react'
import {styled} from 'styled-components'

const CursorPointer = () => {
  const [position, setPosition] = useState({x: 0, y: 0})
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const handleMouseMove = useCallback((event: any) => {
    setIsHovered(true)
    setPosition({
      x: event.nativeEvent.offsetX - 5,
      y: event.nativeEvent.offsetY - 5,
    })
  }, []) // 의존성 배열이 비어 있으므로 이 함수는 한 번만 생성됩니다.

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])
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
