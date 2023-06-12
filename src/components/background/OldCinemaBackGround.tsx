import React from 'react'
import styled from 'styled-components'
import {PageLayoutProps} from 'lodash'
import {ScrollPage} from 'react-scroll-motion'

const OldCinemaBackGround = ({children}: PageLayoutProps) => {
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

export default OldCinemaBackGround

const CustomScrollPage = styled(ScrollPage)`
  position: relative;
  width: 100%;
  height: 100%;

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
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/662025/scratch.png') repeat center center;
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
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/662025/grain.jpg') repeat center center;
    -webkit-animation: grain 0.5s steps(1) infinite;
    animation: grain 0.5s steps(1) infinite;
  }

  /* Film Animations */
  // Grain
  @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0, 0);
    }

    10% {
      transform: translate(-1%, -1%);
    }

    20% {
      transform: translate(1%, 1%);
    }

    30% {
      transform: translate(-2%, -2%);
    }

    40% {
      transform: translate(3%, 3%);
    }

    50% {
      transform: translate(-3%, -3%);
    }

    60% {
      transform: translate(4%, 4%);
    }

    70% {
      transform: translate(-4%, -4%);
    }

    80% {
      transform: translate(2%, 2%);
    }

    90% {
      transform: translate(-3%, -3%);
    }
  }

  // Quick Scratches
  @keyframes scratch {
    0%,
    100% {
      transform: translateX(0);
      opacity: 0.075;
    }

    10% {
      transform: translateX(-1%);
    }

    20% {
      transform: translateX(1%);
    }

    30% {
      transform: translateX(-2%);
      opacity: 0.09;
    }

    40% {
      transform: translateX(3%);
    }

    50% {
      transform: translateX(-3%);
      opacity: 0.05;
    }

    60% {
      transform: translateX(8%);
    }

    70% {
      transform: translateX(-3%);
    }

    80% {
      transform: translateX(10%);
      opacity: 0.02;
    }

    90% {
      transform: translateX(-2%);
    }
  }

  // Long Scratches
  @keyframes inner-scratch {
    0% {
      transform: translateX(0);
      opacity: 0.08;
    }

    10% {
      transform: translateX(-1%);
    }

    20% {
      transform: translateX(1%);
    }

    30% {
      transform: translateX(-2%);
    }

    40% {
      transform: translateX(3%);
    }

    50% {
      transform: translateX(-3%);
      opacity: 0.06;
    }

    60% {
      transform: translateX(8%);
    }

    70% {
      transform: translateX(-3%);
    }

    80% {
      transform: translateX(10%);
      opacity: 0.03;
    }

    90% {
      transform: translateX(20%);
    }

    100% {
      transform: translateX(30%);
    }
  }
`
