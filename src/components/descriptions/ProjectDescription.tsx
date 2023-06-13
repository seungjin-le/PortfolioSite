import {Descriptions} from 'antd'
import React, {memo, useEffect} from 'react'
import SkillTag from '../tags/SkillTag'
import {labelsAndColors} from '../../utility/listItems'
import styled from 'styled-components'
import {ProjectDescriptionProps} from 'lodash'
import Title from '../texts/Title'
import DescriptionMarkDown from '../texts/DescriptionMarkDown'

const ProjectDescription = ({
  item,
  setScrollTop,
  setScrollBottom,
  scrollBtnClick,
  setScrollBtnClick,
}: ProjectDescriptionProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const scrollMove = (text: string) => {
    const element = scrollRef.current
    if (!element) return
    if (text === 'up') return (element.scrollTop = 0), setScrollBtnClick('')
    if (text === 'down') return (element.scrollTop = element.scrollHeight), setScrollBtnClick('')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef?.current) return

      const {scrollTop, clientHeight, scrollHeight} = scrollRef.current
      const pos = scrollTop + clientHeight
      scrollTop !== 0 ? setScrollTop(true) : setScrollTop(false)
      pos !== scrollHeight ? setScrollBottom(true) : setScrollBottom(false)
    }
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  useEffect(() => {
    scrollMove(scrollBtnClick)
  }, [scrollBtnClick])

  return (
    <div>
      <Title title={item?.company} level={3} />
      <DescriptionBox ref={scrollRef}>
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
    </div>
  )
}

export default memo(ProjectDescription)

const DescriptionBox = styled.div`
  max-height: 550px;
  overflow: scroll;
  position: relative;
  border: 1px solid #00203f !important;
  border-radius: 14px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const CustomAntdDescription = styled(Descriptions)`
  // .description

  &:hover tr.ant-descriptions-row:last-child {
  }
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
