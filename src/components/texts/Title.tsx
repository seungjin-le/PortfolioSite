import React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import {TitleProps} from 'lodash'

const Title = ({title, level}: TitleProps) => {
  return <CustomAntdTypography level={level ? level : 2}> {title}</CustomAntdTypography>
}

export default Title

const CustomAntdTypography = styled(Typography.Title)`
  margin-bottom: 1em !important;
`
