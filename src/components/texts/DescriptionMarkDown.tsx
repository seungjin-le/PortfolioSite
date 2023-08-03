import {useEffect, useRef, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import {DescriptionMarkdownProps} from 'lodash'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'

const DescriptionMarkDown = ({description}: DescriptionMarkdownProps) => {
  const top = useRef<HTMLSpanElement>(null)
  const bottom = useRef<HTMLSpanElement>(null)
  const [isTopRef, setTopRef] = useState(false)
  const [isBottomRef, setBottomRef] = useState(false)
  const [shadow, setShadow] = useState('')
  const ref = useRef(null)
  const {scrollYProgress, scrollY} = useScroll({container: ref})
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [scrollCheck, setScrollCheck] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target.id === 'top') {
            setTopRef(entry.isIntersecting)
          } else if (entry.target.id === 'bottom') {
            setBottomRef(entry.isIntersecting)
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
    if (ref.current) {
      const {scrollHeight, clientHeight} = ref.current
      scrollHeight - clientHeight === 0 && setScrollCheck(false)
    }
  }, [isTopRef, isBottomRef])

  useMotionValueEvent(scrollY, 'change', latest => {
    if (ref.current) {
      const {scrollHeight, clientHeight} = ref.current
      setScrollPercentage(Math.floor((latest / (scrollHeight - clientHeight)) * 100))
    }
  })

  return (
    <div className={'relative '}>
      {scrollCheck && (
        <svg
          id='progress'
          className={
            'z-20 absolute  left-[-120px] top-[20%] w-[100px] h-[100px] rotate-[-90deg] md:top-[100%] md:-translate-y-full md:left-[100%] md:-translate-x-full sm:hidden bg-itemBg rounded-default md:bg-[transparent]'
          }
        >
          <circle cx='50' cy='50' r='30' className=' stroke-text opacity-4 stroke-[15%] fill-none' />
          <motion.circle
            cx='50'
            cy='50'
            r='30'
            className=' stroke-text stroke-[15%] fill-none'
            style={{pathLength: scrollYProgress}}
          />
          <text
            x='50%'
            y='50%'
            textAnchor='middle'
            dy='.4em'
            className={'text-text text-sm'}
            transform='rotate(90 50 50)'
            fill='#eee'
          >
            {scrollPercentage} %
          </text>
        </svg>
      )}
      <div
        ref={ref}
        className={`max-h-[800px] max-w-[800px] mx-auto sm:h-auto overflow-scroll relative scrollbar-hide ${shadow} rounded-default p-4 bg-cardBg transition-all hover:scroll-auto`}
      >
        <span ref={top} className={'w-full h-[1px] block absolute top-3'} id={'top'} />
        <CustomReactMarkdown remarkPlugins={[remarkGfm]} className={'break-keep h-full px-3'}>
          {description}
        </CustomReactMarkdown>
        <span ref={bottom} className={'w-full h-[1px] block'} id={'bottom'} />
      </div>
    </div>
  )
}

export default DescriptionMarkDown

const CustomReactMarkdown = styled(ReactMarkdown)`
  .shadow:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%);
    width: 100%;
    height: 40px;
  }
  ul,
  li {
    list-style-type: disc;
  }

  & p {
    margin: 16px 0;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
  }
  & ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
  }
  & li {
    margin: 16px 0;
  }

  & a {
    color: #0366d6;
    text-decoration: none;
  }

  & h1 {
    font-size: 2rem;
    margin: 0.67em 0;
  }
  & h2 {
    font-size: 1.8rem;
    margin: 0.64em 0;
  }
  & h3 {
    font-size: 1.6rem;
    margin: 0.6em 0;
  }
  & h4 {
    font-size: 1.4rem;
    margin: 0.56em 0;
  }
  & h5 {
    font-size: 1.2rem;
    margin: 0.52em 0;
  }
  & blockquote {
    border-radius: 10px;
    border-left: 3px solid #ddd;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.2rem 0.5rem;
  }
  & hr {
    margin: 1rem 0;
  }
  & em {
    color: #939393;
  }
`
