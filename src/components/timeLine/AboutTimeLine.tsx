import Title from 'components/texts/Title'
import TimeLineItem from './TimeLineItem'
import {timeLineItem} from 'utility/listItems'
import styled from 'styled-components'
import {useEffect, useRef, useState} from 'react'

const AboutTimeLine = () => {
  const top = useRef<HTMLDivElement>(null)
  const bottom = useRef<HTMLDivElement>(null)
  const [isTopRef, setIsTopRef] = useState(false)
  const [isBottomRef, setIsBottomRef] = useState(false)
  const [shadow, setShadow] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target.id === 'top') {
            setIsTopRef(entry.isIntersecting)
          } else if (entry.target.id === 'bottom') {
            setIsBottomRef(entry.isIntersecting)
          }
        })
      },
      {
        root: null,
        threshold: 0.1,
      },
    )

    if (top.current) observer.observe(top.current)
    if (bottom.current) observer.observe(bottom.current)

    return () => {
      if (top.current) observer.unobserve(top.current)
      if (bottom.current) observer.unobserve(bottom.current)
    }
  }, [])

  useEffect(() => {
    if (isTopRef && !isBottomRef) {
      setShadow('shadow-boxBottom')
    } else if (!isTopRef && !isBottomRef) {
      setShadow('shadow-boxYAll')
    } else if (!isTopRef && isBottomRef) {
      setShadow('shadow-boxTop')
    } else if (isTopRef && isBottomRef) {
      setShadow('')
    }
  }, [isTopRef, isBottomRef])

  return (
    <div className={'w-full h-full flex flex-col items-center justify-center'}>
      <div className={'text-left w-full '}>
        <Title title={'History'} color={'#eee'} />
      </div>
      <div className={'px-4'}>
        <div
          className={`w-full px-4 py-4 max-h-[800px] overflow-scroll scrollbar-hide ${shadow} rounded-default bg-itemBg max-w-[70%] md:max-w-[85%] sm:max-w-[100%]`}
        >
          <ol className={'relative flex flex-col text-text  hover:will-change-scroll max-w-[70%] sm:max-w-[100%]'}>
            <ScrollLine ref={top} className={' top-[10px]'} id={'top'} />
            {timeLineItem.map((v, i) => (
              <TimeLineItem item={v} key={i} />
            ))}
            <ScrollLine ref={bottom} className={'bottom-[10px]'} id={'bottom'} />
          </ol>
        </div>
      </div>
    </div>
  )
}

export default AboutTimeLine

const ScrollLine = styled.div`
  padding-top: 1px;
  width: 100%;
  position: absolute;
`
