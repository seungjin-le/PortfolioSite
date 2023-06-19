import React, {memo, useState} from 'react'
import styled from 'styled-components'
import Title from '../texts/Title'
import CursorPointer from '../cursor/CursorPointer'

const AboutCard = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  return (
    <Container>
      <CardBox onClick={() => setIsFlipped(!isFlipped)}>
        <CardInner className={'card'} style={{transform: `rotateY(${isFlipped ? 180 : 0}deg)`}}>
          <CardFront className={'front'}>
            <Title title={'Click Card!'} color={'#eee'} level={2} />
          </CardFront>
          <CardBack className={'back'}>
            <Title title={'Name : Lee Seung Jin'} color={'#eee'} level={3} />
            <Title title={'Email : dltmdwls154@gmail.com'} color={'#eee'} level={3} />
            <Title title={'Phone : +82) 010-5574-2436'} color={'#eee'} level={3} />
          </CardBack>
          <CursorPointer />
        </CardInner>
      </CardBox>
    </Container>
  )
}

export default memo(AboutCard)

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CardBox = styled.div`
  max-width: 700px;
  max-height: 350px;
  width: 100%;
  height: 100%;
  padding: 1rem;
  perspective: 1000px;
  & .card {
    transition: 1s;
    & .front,
    & .back {
      transition: 0.5s;
    }
  }
`

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;

  transform-style: preserve-3d;
  cursor: pointer;
  & > div {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(53, 53, 53, 0.5);
    &.front {
      align-items: center;
    }
    &.back {
      align-items: start;
    }
  }
  &:hover .front h2 {
    transition: 0.5s;
    transform: scale(1.3);
  }
`

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 14px;
  padding: 0 3rem;
`

const CardFront = styled(CardFace)``

const CardBack = styled(CardFace)`
  color: #eee;
  transform: rotateY(180deg);
`
