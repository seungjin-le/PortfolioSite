import React from 'react'
import styled from 'styled-components'
import {ScrollPage} from 'react-scroll-motion'
import {PageLayoutProps} from 'lodash'

const OriginBackground = ({children}: PageLayoutProps) => {
  return (
    <CustomScrollPage className={'backgroundBox'}>
      <div className='outer-scratch'>
        <div className='background grain'>
          <div>{children}</div>
        </div>
      </div>
    </CustomScrollPage>
  )
}

export default OriginBackground

//background: #00203f;
//   //#ADEFD1;

const CustomScrollPage = styled(ScrollPage)`
  position: relative;
  width: 100%;
  height: 100%;
  background: #161616;

  & .grain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > div {
      width: 100%;
      z-index: 1;
    }
  }
  .outer-scratch {
    padding: 2rem 3rem;
  }
  .inner-scratch,
  .background,
  .outer-scratch,
  .backgroundBox {
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  .outer-scratch,
  .inner-scratch {
    height: inherit;
  }

  .outer-scratch:after,
  .inner-scratch:after {
    content: '';
    width: 120%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 100px;
    opacity: 0.08;

    -webkit-animation: scratch 0.45s steps(1) infinite;
    animation: scratch 0.45s steps(1) infinite;
  }

  .inner-scratch:after {
    left: 30%;
    -webkit-animation: inner-scratch 2s infinite;
    animation: inner-scratch 2s infinite;
  }

  .grain:after {
    content: '';
    width: 110%;
    height: 110%;
    position: absolute;
    top: -5%;
    left: -5%;
    opacity: 0.17;

    -webkit-animation: grain 0.5s steps(1) infinite;
    animation: grain 0.5s steps(1) infinite;
  }
`
