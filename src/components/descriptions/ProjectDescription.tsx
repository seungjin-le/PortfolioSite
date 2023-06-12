import {Descriptions} from 'antd'
import React from 'react'
import SkillTag from '../tags/SkillTag'
import {labelsAndColors} from '../../utility/listItems'
import styled from 'styled-components'
import {ProjectDescriptionProps} from 'lodash'
import Title from '../texts/Title'
import DescriptionMarkDown from '../texts/DescriptionMarkDown'

const ProjectDescription = ({item}: ProjectDescriptionProps) => {
  return (
    <DescriptionBox>
      <Title title={item?.company} level={3} />
      <CustomAntdDescription bordered>
        <Descriptions.Item label='프로젝트 이름' span={1}>
          {item?.projectName}
        </Descriptions.Item>
        <Descriptions.Item label='개발 기간' span={2}>
          {item?.date?.start} ~ {item?.date?.end}
        </Descriptions.Item>
        <Descriptions.Item label='프로젝트 유형' span={1}>
          {item?.projectType}
        </Descriptions.Item>
        <Descriptions.Item label='팀 구성' span={2}>
          <div>Frontend : {item?.team?.front} 명</div>
          <div>Backend : {item?.team?.back} 명</div>
        </Descriptions.Item>
        <Descriptions.Item label='사용 스킬' span={3}>
          {labelsAndColors?.map((v, i) => {
            if (item.skills.indexOf(v.label)) return <SkillTag name={v.label} color={v.color} key={i} />
          })}
        </Descriptions.Item>
        <Descriptions.Item label='상세 설명' span={3} className={'description'}>
          <DescriptionMarkDown description={item.description} />
        </Descriptions.Item>
      </CustomAntdDescription>
    </DescriptionBox>
  )
}

export default ProjectDescription

const DescriptionBox = styled.div``

const CustomAntdDescription = styled(Descriptions)`
  border: 1px solid #00203f !important;
  border-radius: 14px;
  overflow: hidden;
  & > div {
    border: none !important;
  }
  & tr th {
    background: #00203f !important;
    border-top: 1px solid #adefd1;
    color: #adefd1 !important;
  }
  & tr td {
    background: #adefd1 !important;
    border-top: 1px solid #00203f;
    color: #00203f !important;
  }
  & tr:first-child th,
  & tr:first-child td {
    border-top: none !important;
  }
`
