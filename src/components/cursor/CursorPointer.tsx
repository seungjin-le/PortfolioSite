import {memo, useCallback, useState} from 'react'

const CursorPointer = () => {
  const [position, setPosition] = useState({x: 0, y: 0})
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const handleMouseMove = useCallback((event: any) => {
    setIsHovered(true)
    setPosition({
      x: event.nativeEvent.offsetX - 5,
      y: event.nativeEvent.offsetY - 5,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  return (
    <div
      className={'w-full h-full top-0 left-0 overflow-hidden absolute'}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div
          className={'w-0 h-0  pointer-events-none ease-in-out absolute shadow-cursor'}
          style={{top: `${position.y}px`, left: `${position.x}px`}}
        />
      )}
    </div>
  )
}
export default memo(CursorPointer)
