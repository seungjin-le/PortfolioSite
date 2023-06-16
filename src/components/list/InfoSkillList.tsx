import React from 'react'
import styled from 'styled-components'
import Title from '../texts/Title'
import SkillTagCloud from '../tags/SkillTagCloud'

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
