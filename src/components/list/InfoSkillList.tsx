import React from 'react'
// import {Collapse} from 'antd'
import styled from 'styled-components'
import Title from '../texts/Title'
//import {collapseListItem} from '../../utility/listItems'
import SkillTagCloud from '../tagCloud/SkillTagCloud'
//<Collapse accordion={true} items={collapseListItem || []} defaultActiveKey={['1']} />
const InfoSkillList = () => {
  return (
    <InfoSkillListBox className={'123123123123123123 '}>
      <Title level={3} title={'Skill'} color={'#adefd1'} />
      <SkillTagCloud />
    </InfoSkillListBox>
  )
}

export default InfoSkillList

const InfoSkillListBox = styled.div`
  height: 100%;
  width: 100%;
  & .slick-track div {
    height: 100%;
  }
  & .slick-slide.slick-active.slick-current {
    height: 100%;
    width: 100%;
    background: red !important;
  }

  & > div {
    max-width: 400px;
  }
  & * {
    height: 100%;
    width: 100%;
  }
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
