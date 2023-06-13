import React from 'react'
import ReactMarkdown from 'react-markdown'
import {DescriptionMarkdownProps} from 'lodash'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'

const DescriptionMarkDown = ({description}: DescriptionMarkdownProps) => {
  return <CustomReactMarkdown remarkPlugins={[remarkGfm]}>{description}</CustomReactMarkdown>
}

export default DescriptionMarkDown

const CustomReactMarkdown = styled(ReactMarkdown)`
  max-height: 100%;
  .shadow:after {
    content: '';
    position: absolute;
    z-index: 99;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%);
    width: 100%;
    height: 40px; /* adjust this to change the size of shadow */
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
