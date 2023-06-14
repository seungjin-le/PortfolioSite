import React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import {TitleProps} from 'lodash'

const Title = ({title, level, color}: TitleProps) => {
  return (
    <CustomAntdTypography style={{color: color ? color : 'black'}} level={level ? level : 2}>
      {title}
    </CustomAntdTypography>
  )
}

export default Title

const CustomAntdTypography = styled(Typography.Title)`
  margin-bottom: 1em !important;
  font-family: JalnanTtf, JalnanOTF, sans-serif;
  font-weight: bold !important;
`
