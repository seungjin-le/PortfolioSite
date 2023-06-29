import React from 'react'
import {SectionFlexBoxProps} from 'lodash'
import {Animator, MoveIn} from 'react-scroll-motion'
import Title from '../../components/texts/Title'

const FlexRowBox = ({title, left, right}: SectionFlexBoxProps) => {
  return (
    <div className={'p-8 relative flex flex-col justify-center items-center w-full h-full transition-all'}>
      <div className={'w-full flex items-start mb-8'}>
        <Title title={title} color={'#eee'} level={1} />
      </div>
      <div className={'aboutBox relative w-full flex flex-row items-center lg:flex-col transition-all'}>
        <Animator className={'w-[50%] py-0 px-12 lg:w-full h-auto'} animation={MoveIn(0, 800)}>
          {left}
        </Animator>
        <Animator className={'w-[50%] py-0 px-12 lg:w-full '} animation={MoveIn(600, 0)}>
          {right}
        </Animator>
      </div>
    </div>
  )
}

export default FlexRowBox
