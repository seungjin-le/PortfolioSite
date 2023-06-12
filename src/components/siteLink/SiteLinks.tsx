import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components'
import {allIngredients} from '../../utility/listItems'
import Title from '../texts/Title'

const SiteLinks = () => {
  const [selectedTab, setSelectedTab] = useState(allIngredients[0])
  return (
    <>
      <Title title={'Sites'} color={'#adefd1'} level={1} />
      <Box>
        <LinkBox>
          <nav>
            <ul>
              {allIngredients.map(item => (
                <li
                  key={item.label}
                  className={item === selectedTab ? 'selected' : ''}
                  onClick={() => setSelectedTab(item)}
                >
                  <img src={item.icon} alt='' style={{width: '20px', height: '20px'}} /> <h2>{item.label}</h2>
                </li>
              ))}
            </ul>
          </nav>

          <main>
            <AnimatePresence>
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{x: '100%', opacity: 0}}
                animate={{x: 0, opacity: 1}}
                className={'imgBox'}
                onClick={() => window.open(selectedTab.link)}
              >
                {selectedTab && <img className={'siteImage'} src={selectedTab.image} alt='site' />}
              </motion.div>
            </AnimatePresence>
          </main>
        </LinkBox>
      </Box>
    </>
  )
}

export default SiteLinks

const Box = styled.div`
  padding: 0 2rem;
`

const LinkBox = styled.div`
  width: 100%;
  max-height: 600px;
  height: 100%;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  box-shadow: 3px 1px 1px hsl(0deg 0% 0% / 0.175), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.375),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  display: flex;
  flex-direction: column;

  & > div {
    padding: 0 2rem;
  }
  nav {
    background: #fdfdfd;
    border-radius: 10px 10px 0 0;
    border: 1px solid #eeeeee;
    height: 44px;
  }

  .tabs {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-wrap: nowrap;
    width: 100%;
  }

  main {
    position: relative;
    height: 100%;
    width: 100%;
    max-height: 535px;
    .imgBox {
      width: 100%;
      height: 100%;
      .siteImage {
        width: 100%;
        height: 100%;
      }
    }
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
  }

  ul {
    display: flex;
    width: 100%;
  }

  li {
    border-radius: 5px 5px 0 0;
    width: 100%;
    padding: 20px 30px;
    position: relative;
    background: white;
    cursor: pointer;
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    min-width: 0;
    user-select: none;
  }
  .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--accent);
  }

  li.selected {
    background: #eee;
  }

  li button {
    width: 20px;
    height: 20px;
    border: 0;
    background: #fff;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    stroke: #000;
    margin-left: 10px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
  }

  .add-item {
    width: 30px;
    height: 30px;
    background: #eee;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    align-self: center;
  }

  .add-item:disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
  }

  & .imgBox {
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  & .siteImage {
    width: 100%;
    height: 100%;
  }
`
