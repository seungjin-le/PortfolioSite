import React from 'react'
import {Badge, Descriptions} from 'antd'
import styled from 'styled-components'

const ProjectDescription = () => {
  //{title,description}
  return (
    <CustomAntDescriptions title='User Info' bordered>
      <Descriptions.Item label='Project'>Cloud Database</Descriptions.Item>
      <Descriptions.Item label='Period' span={2}>
        2019-04-24 ~ 2019-04-24
      </Descriptions.Item>
      <Descriptions.Item label='Status' span={1}>
        <Badge status='processing' text='Running' />
      </Descriptions.Item>
      <Descriptions.Item label='Team' span={2} className={'team'}>
        <span>Front : 2</span>
        <span>Back : 3</span>
      </Descriptions.Item>
      <Descriptions.Item label='Project Description'>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </Descriptions.Item>
    </CustomAntDescriptions>
  )
}

export default ProjectDescription

const CustomAntDescriptions = styled(Descriptions)`
  width: 100%;
  display: flex;
  flex-direction: column;
  & .team + td span {
    display: flex;
    justify-content: space-between;
  }
`
