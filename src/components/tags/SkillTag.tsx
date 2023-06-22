import React from 'react'
import {SkillTagProps} from 'lodash'

const SkillTag = ({name, color}: SkillTagProps) => {
  return (
    <span style={{backgroundColor: color}} className={`text-text p-1 rounded-tags  m-1 my-1 text-sm`}>
      {name}
    </span>
  )
}

export default SkillTag
