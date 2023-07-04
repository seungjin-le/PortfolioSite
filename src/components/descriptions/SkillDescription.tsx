import {memo} from 'react'
import {SkillListProps} from 'lodash'
import CursorPointer from '../cursor/CursorPointer'

const SkillDescription = ({title, index, onClick}: SkillListProps) => {
  return (
    <div
      className={
        'max-w-[200px] max-h-[68px] h-full p-5  m-2 bg-itemBg text-xl cursor-pointer w-full relative rounded-default text-center border-none text-subTitleText overflow-hidden md:p-4 md:max-w-[150px] md:max-h-[65px] md:text-lg flex items-center justify-center'
      }
      onClick={() => onClick(index)}
    >
      <CursorPointer />
      <div className={'overflow-hidden text-ellipsis whitespace-nowrap'}>{title}</div>
    </div>
  )
}

export default memo(SkillDescription)
