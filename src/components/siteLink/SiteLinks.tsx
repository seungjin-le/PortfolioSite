import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import Title from '../texts/Title'
import {allIngredients} from '../../utility/listItems'
import {Carousel} from 'antd'
import {CarouselRef} from 'antd/es/carousel'
import CursorPointer from '../cursor/CursorPointer'

const SiteLinks = () => {
  const [selectedTab, setSelectedTab] = useState(allIngredients[0])
  const slider = useRef<CarouselRef | null | undefined>()

  const handleSliderOnChange = (num: number) => {
    setSelectedTab(() => allIngredients[num])
    const {current} = slider
    if (!current) return
    current.goTo(num)
  }
  return (
    <Box>
      <Title title={'Sites'} color={'#eee'} level={1} />
      <SiteBox>
        <LinkBox>
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
          <main>
            <Carousel dots={false} ref={ref => (slider.current = ref)}>
              {allIngredients.map((v, i) => {
                return (
                  <div key={i} className={'imgBox'} onClick={() => window.open(selectedTab.link, '_blank')}>
                    <img className={'siteImage'} src={v.image} alt={v.image} />
                  </div>
                )
              })}
            </Carousel>
          </main>
        </LinkBox>
      </SiteBox>
    </Box>
  )
}

export default SiteLinks

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  & > h1 {
    margin: 0 auto;
  }
`

const SiteBox = styled.div`
  padding: 0 2rem;
  max-width: 1000px;
  min-width: 400px;
  width: 100%;
  height: 100%;
`

const LinkBox = styled.div`
  width: 100%;
  max-height: 600px;
  min-width: 300px;
  height: 100%;
  border-radius: 10px;
  background: rgba(16, 16, 16, 0);
  overflow: hidden;
  box-shadow: 3px 1px 1px hsl(0deg 0% 0% / 0.175), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.375),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  display: flex;
  flex-direction: column;

  & > div {
    padding: 0 2rem;
  }
  nav {
    background: rgba(53, 53, 53, 0.5);
    border-radius: 10px 10px 0 0;
    height: 44px;
  }

  main {
    position: relative;
    height: 100%;
    width: 100%;
    max-height: 535px;

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
    .imgBox {
      cursor: pointer;
      .siteImage {
        width: 100%;
        height: 100%;
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
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      min-width: 0;
      user-select: none;
      &.selected {
        background: rgba(103, 103, 103, 0.8);
      }
    }
  }
`
