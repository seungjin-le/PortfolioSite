import React from 'react'
import styled from 'styled-components'
import {Card, Layout} from 'antd'
import Meta from 'antd/es/card/Meta'
import Title from '../../components/texts/Title'

const Footer = () => {
  return (
    <CustomFooterLayout>
      <ContactCardBox>
        <Title title={'CONTACT'} level={2} />
        <Card
          hoverable
          cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
          className={'card'}
        >
          <Meta title='Name :' description='Lee Seung Jin' />
          <Meta title='Email :' description='dltmdwls154@gmail.com' />
          <Meta title='Phone :' description='+82) 010-5574-2436' />
          <Meta title='Email :' description='dltmdwls154@gmail.com' />
        </Card>
      </ContactCardBox>
    </CustomFooterLayout>
  )
}

export default Footer
const CustomFooterLayout = styled(Layout)`
  width: 100%;

  background: #adefd1;
  padding: 2rem 0;
`
const ContactCardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.ant-card {
    width: 400px;
    box-sizing: border-box;
    max-height: 450px;
    height: 100%;
  }
  & .ant-card-cover {
    height: 100px;
    background: #00203f;
    padding: 10px 20px;

    & img {
      width: 80px;
      border-radius: 50%;
    }
  }

  & .ant-card-body {
    width: 100%;
    height: 300px;
    background: #00203f;
  }
  & .ant-card-meta > div {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;

    & * {
      font-size: 19px;
      color: #adefd2;
    }
    & .ant-card-meta-description {
      margin-left: 14px;
    }
  }
`
