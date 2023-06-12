import React from 'react'
import {Tag} from 'antd'
import {SkillTagProps} from 'lodash'
import styled from 'styled-components'

const SkillTag = ({name, color}: SkillTagProps) => {
  return (
    <CustomAntdTag bordered={false} color={color}>
      {name}
    </CustomAntdTag>
  )
}

export default SkillTag

const CustomAntdTag = styled(Tag)`
  margin-bottom: 1rem;
`
