import {memo, useEffect, useRef, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import {DescriptionMarkdownProps} from 'lodash'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'

const DescriptionMarkDown = ({description}: DescriptionMarkdownProps) => {
  const top = useRef<HTMLSpanElement>(null)
  const bottom = useRef<HTMLSpanElement>(null)
  const [isTopRef, setTopRef] = useState(false)
  const [isBottomRef, setBottomRef] = useState(false)
  const [shadow, setShadow] = useState('')
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
  }, [isTopRef, isBottomRef])

  return (
    <div
      className={`max-h-[800px] overflow-scroll relative scrollbar-hide ${shadow} rounded-default p-4 bg-itemBg transition-all `}
    >
      <span ref={top} className={'w-full h-[1px] block absolute top-3'} id={'top'} />
      <CustomReactMarkdown remarkPlugins={[remarkGfm]} className={'break-keep'}>
        {description}
      </CustomReactMarkdown>
      <span ref={bottom} className={'w-full h-[1px] block mb-4'} id={'bottom'} />
    </div>
  )
}

export default memo(DescriptionMarkDown)

const CustomReactMarkdown = styled(ReactMarkdown)`
  .shadow:after {
    content: '';
    position: absolute;
    z-index: 99;
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
    font-size: 14px;
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
  & blockquote {
    border-radius: 10px;
    border-left: 3px solid #ddd;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.2rem 0.5rem;
  }
  & hr {
    margin: 1rem 0;
  }
`
