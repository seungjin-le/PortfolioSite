import React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import {HeaderTitleProps} from 'lodash'

const ModalTitle = ({title}: HeaderTitleProps) => {
  return <CustomAntdTypography level={2}> {title}</CustomAntdTypography>
}

export default ModalTitle

const CustomAntdTypography = styled(Typography.Title)`
  margin-bottom: 1em !important;
`
