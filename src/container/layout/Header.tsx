import {Col, Row} from 'antd'
import React from 'react'
import Title from '../../components/header/Title'
import styled from 'styled-components'
import ProfileDropdownMenu from '../../components/header/ProfileDropdownMenu'

const Header = () => {
  return (
    <CustomAntdRow>
      <Col span={4} />
      <Col span={16}>
        <Title title={'Front-end'} />
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
  background-color: #fff;
  text-align: center;
  justify-content: center;
  align-items: center;
  & > .ant-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
