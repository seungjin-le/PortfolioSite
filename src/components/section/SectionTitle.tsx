import React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import {HeaderTitleProps} from 'lodash'

const SectionTitle = ({title}: HeaderTitleProps) => {
  return <CustomAntdTypography level={1}> {title}</CustomAntdTypography>
}

export default SectionTitle

const CustomAntdTypography = styled(Typography.Title)`
  margin: 2em 0 !important;
`
