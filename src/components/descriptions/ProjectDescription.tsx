import React, {memo, useCallback, useEffect} from 'react'
import SkillTag from '../tags/SkillTag'
import {labelsAndColors} from '../../utility/listItems'
import {ProjectDescriptionProps} from 'lodash'
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
        entries.forEach(({isIntersecting, target}) => {
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

  const smoothScrollTo = useCallback((element: HTMLDivElement, top: number) => {
    const start = element.scrollTop
    const change = top - start
    const duration = 400
    let startTime: any = null

    const animateScroll = (currentTime: any) => {
      if (!startTime) startTime = currentTime
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      element.scrollTop = start + change * progress
      if (progress < 1) setTimeout(animateScroll, 20, performance.now())
    }

    setTimeout(animateScroll, 20, performance.now())
  }, [])

  const scrollMove = useCallback((text: string) => {
    const element = scrollRef.current
    if (!element) return
    if (text === 'up') {
      smoothScrollTo(element, 0)
      setScrollBtnClick('')
    } else if (text === 'down') {
      smoothScrollTo(element, element.scrollHeight)
      setScrollBtnClick('')
    }
  }, [])

  useEffect(() => {
    scrollMove(scrollBtnClick)
  }, [scrollBtnClick])

  return (
    <div className={'shadow-slate-100'}>
      <div className={'w-full min-h-[60px] flex flex-row mb-6'}>
        <img className={'max-h-[60px] rounded-default mr-6'} src={item?.logo} alt='' />
        <div className={'w-full flex items-center justify-start text-subTitleText text-3xl'}>{item?.company}</div>
      </div>
      <div>
        <div
          ref={scrollRef}
          className={
            'w-full max-h-[600px] flex flex-col text-text overflow-scroll overflow-x-hidden scrollbar-hide border border-solid border-text rounded-default '
          }
        >
          <div className='h-auto p-4 '>
            <span ref={scrollTopLine} className={'w-full h-[1px]'} />
            <div
              className={'my-6 flex flex-row md:flex-col border-solid border-b-text border-b md:border-none md:my-0'}
            >
              <div className='flex-1 px-2 py-3 md:border-solid md:border-b-text md:border-b '>
                <dt className='text-2xl '>Project Name</dt>
                <dd className='mt-2 ml-2 text-base '>{item.projectName}</dd>
              </div>
              <div className='flex-1 px-2 py-3 md:border-solid md:border-b-text md:border-b'>
                <dt className='text-2xl '>Project Period</dt>
                <dd className='mt-2 ml-2 text-base '>
                  {item.date.start} ∼ {item.date.end}
                </dd>
              </div>
            </div>
            <div
              className={
                'my-6 flex flex-row md:flex-col h-auto border-solid border-b-text border-b md:border-none md:my-0'
              }
            >
              <div className='flex-1 px-2 py-3 md:border-solid md:border-b-text md:border-b '>
                <dt className='text-2xl '>Project Type</dt>
                <dd className='mt-2 ml-2 text-base '>{item.projectType}</dd>
              </div>
              <div className='flex-1 px-2 py-3 md:border-solid md:border-b-text md:border-b'>
                <dt className='text-2xl '>Team Member</dt>
                <dd className='flex flex-col mt-2 ml-2 text-md'>
                  <span>FrontEnd : {item.team.front}</span>
                  <span>BackEnd : {item.team.back}</span>
                </dd>
              </div>
            </div>
            <div>
              <div className='px-2 py-3 my-6 border-b border-solid border-b-text md:my-4 md:pb-4'>
                <dt className='text-2xl '>Skills</dt>
                <dd className='flex flex-wrap mt-2 ml-2 text-base '>
                  {labelsAndColors?.map((v, i) => {
                    if (item.skills.indexOf(v.label)) return <SkillTag name={v.label} color={v.color} key={i} />
                  })}
                </dd>
              </div>
              <div className='px-4 py-6 '>
                <dt className='text-2xl '>Detailed Description</dt>
                <dd className='p-3 mt-2 ml-2 text-base'>
                  <DescriptionMarkDown description={item.description} />
                </dd>
                <span ref={scrollBottomLine} className={'w-full h-[1px]'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ProjectDescription)
