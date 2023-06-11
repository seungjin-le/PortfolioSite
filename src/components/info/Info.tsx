import React from 'react'
import ModalTitle from '../texts/Title'
import {Image} from 'antd'
import styled from 'styled-components'

const Info = () => {
  return (
    <InfoBox>
      <Image className={'image'} src='/images/info/infoImage.jpeg' alt='' preview={false} />
      <ModalTitle title={'Name : Lee Seung Jin'} level={4} />
      <ModalTitle title={'Email : dltmdwls154@gmail.com'} level={4} />
      <ModalTitle title={'Phone : +82) 010-5574-2436'} level={4} />
    </InfoBox>
  )
}

export default Info

const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 14px;
  padding: 10px 10px;
  & div {
    padding-bottom: 1rem;
    margin: 0;
  }
  .image {
    border-radius: 14px;
    width: 200px;
    padding: 0;
    margin-bottom: 1rem;
  }
`
