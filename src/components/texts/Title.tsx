import {memo} from 'react'
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

export default memo(Title)

const CustomAntdTypography = styled(Typography.Title)`
  font-weight: bold !important;
`
