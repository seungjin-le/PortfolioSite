import React, {memo} from 'react'
import {SkillListProps} from 'lodash'
import CursorPointer from '../cursor/CursorPointer'

const SkillDescription = ({title, index, onClick}: SkillListProps) => {
  return (
    <div
      className={
        'max-w-[200px] p-5 m-2 bg-itemBg text-xl cursor-pointer w-full relative rounded-default text-center border-none text-subTitleText'
      }
      onClick={() => onClick(index)}
    >
      <CursorPointer />
      <p>{title}</p>
    </div>
  )
}

export default memo(SkillDescription)
