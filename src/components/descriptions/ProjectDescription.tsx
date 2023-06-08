import React, {useState} from 'react'

import styled from 'styled-components'
import {AnimatePresence, motion, wrap} from 'framer-motion'
import Title from '../header/Title'

export const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const ProjectDescription = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }
  return (
    <ProjectBox>
      <Title title={'Projects'} />
      <Containers>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: {type: 'spring', stiffness: 300, damping: 30},
              opacity: {duration: 0.2},
            }}
            drag='x'
            dragConstraints={{left: 0, right: 0}}
            dragElastic={1}
            onDragEnd={(e, {offset, velocity}) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          />
        </AnimatePresence>
        <div className='next' onClick={() => paginate(1)}>
          {'‣'}
        </div>
        <div className='prev' onClick={() => paginate(-1)}>
          {'‣'}
        </div>
      </Containers>
    </ProjectBox>
  )
}

export default ProjectDescription

const ProjectBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  & .team + td span {
    display: flex;
    justify-content: space-between;
  }
`
const Containers = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
  .example-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .next,
  .prev {
    top: calc(50% - 20px);
    position: absolute;
    background: white;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
  }

  .next {
    right: 10px;
  }

  .prev {
    left: 10px;
    transform: scale(-1);
  }

  img {
    position: absolute;
    max-width: 100vw;
  }

  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`
// <CustomAntDescriptions title='User Info' bordered>
//         <Descriptions.Item label='Project'>Cloud Database</Descriptions.Item>
//         <Descriptions.Item label='Period' span={2}>
//           2019-04-24 ~ 2019-04-24
//         </Descriptions.Item>
//         <Descriptions.Item label='Status' span={1}>
//           <Badge status='processing' text='Running' />
//         </Descriptions.Item>
//         <Descriptions.Item label='Team' span={2} className={'team'}>
//           <span>Front : 2</span>
//           <span>Back : 3</span>
//         </Descriptions.Item>
//         <Descriptions.Item label='Project Description'>
//           Data disk type: MongoDB
//           <br />
//           Database version: 3.4
//           <br />
//           Package: dds.mongo.mid
//           <br />
//           Storage space: 10 GB
//           <br />
//           Replication factor: 3
//           <br />
//           Region: East China 1
//           <br />
//         </Descriptions.Item>
//       </CustomAntDescriptions>
