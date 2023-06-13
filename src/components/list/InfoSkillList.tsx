import React from 'react'
import {Collapse} from 'antd'
import styled from 'styled-components'
import Title from '../texts/Title'
import {CollapseListItem} from '../../utility/listItems'

const InfoSkillList = () => {
  return (
    <InfoSkillListBox>
      <Title level={3} title={'Skill'} color={'#adefd1'} />
      <Collapse accordion items={CollapseListItem} defaultActiveKey={['1']} />
    </InfoSkillListBox>
  )
}

export default InfoSkillList

const InfoSkillListBox = styled.div`
  height: 100%;
  & .ant-collapse-header-text {
    color: #adefd1;
  }
  & .ant-collapse-content {
    background-color: transparent;
    & * {
      color: #adefd1;
    }
  }
`
