import {memo, useState} from 'react'
import styled from 'styled-components'
import CursorPointer from '../cursor/CursorPointer'

const AboutCard = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  return (
    <div className={'w-full h-full flex flex-col items-center justify-center text-text'}>
      <CardBox onClick={() => setIsFlipped(!isFlipped)} className={'max-w-[700px] max-h-[300px] p-4 w-full h-full'}>
        <CardInner
          className={'card w-full h-full relative text-center rounded-default duration-700 cursor-pointer '}
          style={{transform: `rotateY(${isFlipped ? 180 : 0}deg)`}}
        >
          <CardFront className={'front items-center'}>
            <div>Click Card!</div>
            <CursorPointer />
          </CardFront>
          <CardBack className={'back rotate-180 sm:text-md'}>
            <div>Name : Lee Seung Jin</div>
            <div>Email : dltmdwls154@gmail.com</div>
            <div>Phone : +82) 010-5574-2436</div>
            <CursorPointer />
          </CardBack>
        </CardInner>
      </CardBox>
    </div>
  )
}

export default memo(AboutCard)

const CardBox = styled.div`
  perspective: 1000px;
`

const CardInner = styled.div`
  transform-style: preserve-3d;
  & div {
    &.front {
      align-items: center;
      &:hover > div {
        transition: 0.5s;
        transform: scale(1.3);
      }
    }
    &.back {
      align-items: start;
    }
  }
`

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 14px;
  padding: 0 3rem;
  transform-style: preserve-3d;
  overflow: hidden;
  background: rgba(53, 53, 53, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const CardFront = styled(CardFace)`
  font-size: 2rem;
`

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  font-size: 1.5rem;
  & > div {
    margin-bottom: 2rem;
  }
`
