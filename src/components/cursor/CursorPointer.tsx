import React, {memo, useCallback, useState} from 'react'

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
    <div
      className={'w-full h-full top-0 left-0 overflow-hidden absolute rounded-default'}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div
          className={'w-0 h-0  pointer-events-none ease-in-out absolute shadow-cursor rounded-full'}
          style={{top: `${position.y}px`, left: `${position.x}px`}}
        />
      )}
    </div>
  )
}
export default memo(CursorPointer)
