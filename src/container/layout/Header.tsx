import {Col, Row} from 'antd'
import React from 'react'
import styled from 'styled-components'
//import ProfileDropdownMenu from '../../components/header/ProfileDropdownMenu'
//<ProfileDropdownMenu />
import Title from '../../components/texts/Title'

const Header = () => {
  return (
    <CustomAntdRow>
      <div>
        <Col span={4} />
        <Col span={16}>
          <Title title={'Front-end'} color={'#eee'} level={1} />
        </Col>
        <Col span={4}></Col>
      </div>
    </CustomAntdRow>
  )
}

export default Header

const CustomAntdRow = styled(Row)`
  max-height: 200px;
  height: 100%;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  position: fixed;
  z-index: 3;
  left: 0;
  & > div {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    position: fixed;
    max-height: 200px;
    background: linear-gradient(0deg, hsla(0, 0%, 9%, 0), #161616);
    height: 100%;

    width: 100%;
    top: 0;
    z-index: 2;
    & > .ant-col {
      height: 100%;
      display: flex;
      align-items: start;
      justify-content: center;

      & h1 {
        margin: 0 !important;
      }
    }
  }
`
