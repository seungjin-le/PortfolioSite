import {SkillTagProps} from 'lodash'
import CursorPointer from 'components/cursor/CursorPointer'

const SkillTag = ({name, color}: SkillTagProps) => {
  return (
    <span
      style={{backgroundColor: color}}
      className={`text-text p-2 rounded-tags  m-1 my-1 text-sm bg-itemBg relative overflow-hidden`}
    >
      {name}
      <CursorPointer />
    </span>
  )
}

export default SkillTag
