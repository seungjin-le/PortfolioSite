import {useCallback, useRef, useState} from 'react'
import styled from 'styled-components'
import Title from '../texts/Title'
import {allIngredients} from '../../utility/listItems'
import {Carousel} from 'antd'
import {CarouselRef} from 'antd/es/carousel'
import CursorPointer from '../cursor/CursorPointer'
import {useInView} from 'framer-motion'
import {Link} from 'react-router-dom'

const SiteLinks = () => {
  const [selectedTab, setSelectedTab] = useState(allIngredients[0])
  const slider = useRef<CarouselRef | null | undefined>()
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  const handleSliderOnChange = useCallback(
    (num: number) => {
      setSelectedTab(() => allIngredients[num])
      const {current} = slider
      if (!current) return
      current.goTo(num)
    },
    [slider],
  )

  return (
    <div className={'w-full h-full flex flex-col justify-center items-end'}>
      <div className={'w-full text-left'}>
        <Title title={'Sites'} color={'#eee'} />
      </div>
      <div className={'px-8 w-full flex justify-center'} ref={ref}>
        <LinkBox
          className={'max-w-[1000px] max-h-[600px] min-w-[350px] min-h-[290px] rounded-default overflow-hidden'}
          style={{
            transform: isInView ? 'none' : 'translateX(-400px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <nav>
            <ul>
              {allIngredients.map((item, index) => {
                return (
                  <li
                    key={item.label}
                    className={item.label === selectedTab.label ? 'selected' : ''}
                    onClick={() => handleSliderOnChange(index)}
                  >
                    <img src={item.icon} alt='' style={{width: '20px', height: '20px'}} /> <h2>{item.label}</h2>
                    <CursorPointer />
                  </li>
                )
              })}
            </ul>
          </nav>
          <main className={'relative w-full h-full'}>
            <Carousel dots={false} ref={ref => (slider.current = ref)}>
              {allIngredients.map((v, i) => {
                return (
                  <Link key={i} className={'cursor-pointer h-full w-full'} to={selectedTab.link}>
                    <img className={'h-full w-full'} src={v.image} alt={v.image} />
                  </Link>
                )
              })}
            </Carousel>
          </main>
        </LinkBox>
      </div>
    </div>
  )
}

export default SiteLinks

const LinkBox = styled.div`
  box-shadow: 3px 1px 1px hsl(0deg 0% 0% / 0.175), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.375),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);

  & > div {
    padding: 0 2rem;
  }
  nav {
    background: rgba(53, 53, 53, 0.5);
    border-radius: 10px 10px 0 0;
    height: 44px;
  }

  main {
    & * {
      outline: none;
    }
    & div {
      height: 100%;
      width: 100%;
    }
    & div.slick-slide {
      width: 100%;
      height: 100%;
      &:active {
        border: none;
      }
    }
  }

  ul {
    display: flex;
    width: 100%;
    height: 100%;
    & li {
      border-radius: 5px 5px 0 0;
      width: 100%;
      height: 100%;
      padding: 20px 30px;
      position: relative;
      color: #eee;
      background: rgba(53, 53, 53, 0.5);
      overflow: hidden;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      user-select: none;
      &.selected {
        background: rgba(103, 103, 103, 0.8);
      }
    }
  }
`
