import {Col, Row} from 'antd'
import React from 'react'
import styled from 'styled-components'
import ProfileDropdownMenu from '../../components/header/ProfileDropdownMenu'
import Title from '../../components/texts/Title'

const Header = () => {
  return (
    <CustomAntdRow>
      <Col span={4} />
      <Col span={16}>
        <Title title={'Front-end'} color={'#00203f'} level={1} />
      </Col>
      <Col span={4}>
        <ProfileDropdownMenu />
      </Col>
    </CustomAntdRow>
  )
}

export default Header

const CustomAntdRow = styled(Row)`
  max-height: 70px;
  background: #adefd1;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  & > .ant-col {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & h1 {
      margin: 0 !important;
    }
  }
`
