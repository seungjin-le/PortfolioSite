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
  const scrollBottomLine = React.useRef<HTMLDivElement>(null)
  const scrollTopLine = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const {isIntersecting, target} = entry
          const scrollTop = scrollTopLine.current
          const scrollBottom = scrollBottomLine.current

          if (target === scrollBottom) setScrollBottom(!isIntersecting)
          if (target === scrollTop) setScrollTop(!isIntersecting)
        })
      },
      {threshold: 1.0},
    )

    if (scrollBottomLine.current) observer.observe(scrollBottomLine.current)
    if (scrollTopLine.current) observer.observe(scrollTopLine.current)

    return () => {
      if (scrollBottomLine.current) observer.unobserve(scrollBottomLine.current)
      if (scrollTopLine.current) observer.observe(scrollTopLine.current)
    }
  }, [])

  const smoothScrollTo = (element: HTMLDivElement, top: number) => {
    const start = element.scrollTop
    const change = top - start
    const startTime = performance.now()

    const animateScroll = (currentTime: any) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / 400, 1)
      element.scrollTop = start + change * progress
      if (progress < 1) window.requestAnimationFrame(animateScroll)
    }

    window.requestAnimationFrame(animateScroll)
  }

  const scrollMove = (text: string) => {
    const element = scrollRef.current
    if (!element) return
    if (text === 'up') {
      smoothScrollTo(element, 0)
      setScrollBtnClick('')
    } else if (text === 'down') {
      smoothScrollTo(element, element.scrollHeight)
      setScrollBtnClick('')
    }
  }
  useEffect(() => {
    scrollMove(scrollBtnClick)
  }, [scrollBtnClick])

  return (
    <div>
      <DescriptionTitleBox>
        <img src={item?.logo} alt='' />
        <Title title={item?.company} level={3} color={'#eee'} />
      </DescriptionTitleBox>
      <DescriptionBox ref={scrollRef}>
        <CustomAntdDescription bordered>
          <Descriptions.Item label='프로젝트 이름' span={2}>
            <ScrollLine ref={scrollTopLine} className={'top'} />
            {item?.projectName}
          </Descriptions.Item>
          <Descriptions.Item label='개발 기간' span={1}>
            {item?.date?.start} ~ {item?.date?.end}
          </Descriptions.Item>
          <Descriptions.Item label='프로젝트 유형' span={2}>
            {item?.projectType}
          </Descriptions.Item>
          <Descriptions.Item label='팀 구성' span={1}>
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
            <ScrollLine ref={scrollBottomLine} className={'bottom'} />
          </Descriptions.Item>
        </CustomAntdDescription>
      </DescriptionBox>
    </div>
  )
}

export default memo(ProjectDescription)

const ScrollLine = styled.div`
  position: absolute;
  left: 0;
  width: 100% !important;
  height: 1px !important;
  &.top {
    top: 1px;
  }
  &.bottom {
    top: 100%;
    transform: translateY(-300%);
  }
`

const DescriptionTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: auto !important;
  height: auto !important;
  & img {
    margin-bottom: 1rem;
    margin-right: 1rem;
    height: 50px;
    max-width: 200px;
    border-radius: 14px;
  }
`

const DescriptionBox = styled.div`
  max-height: 550px;
  position: relative;
  border: 1px solid #161616 !important;
  border-radius: 14px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const CustomAntdDescription = styled(Descriptions)`
  width: 400px;
  height: 400px;
  & > div {
    border: none !important;
  }
  & tr th {
    background: rgba(22, 22, 22, 0.5) !important;
    border-top: 1px solid #eee;
    color: #eee !important;
  }
  & tr td {
    background: rgba(238, 238, 238, 0.5) !important;
    border-top: 1px solid #161616;
    color: #161616 !important;
  }
  & tr:first-child th,
  & tr:first-child td {
    border-top: none !important;
  }
  & tr:first-child {
    & th {
      width: 12%;
    }
    & td {
      width: 34%;
    }
  }
  & tr:last-child td {
    position: relative;
  }
`
