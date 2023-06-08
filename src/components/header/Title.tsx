import {HeaderTitleProps} from 'lodash'
import React from 'react'
import {Typography} from 'antd'
import styled from 'styled-components'

const Title = ({title}: HeaderTitleProps) => {
  return <CustomAntdTypography level={1}>{title}</CustomAntdTypography>
}

export default Title

const CustomAntdTypography = styled(Typography.Title)`
  margin: 0.3em 0 !important;
`
