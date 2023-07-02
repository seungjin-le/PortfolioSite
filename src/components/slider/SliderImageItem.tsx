import {SliderImageProps} from 'lodash'
import {Image} from 'antd'
import styled from 'styled-components'
import {memo} from 'react'

const SliderImageItem = ({src, alt}: SliderImageProps) => {
  return (
    <ImageBox className={'imgBox'}>
      <CustomAntdImage src={src} alt={alt} />
    </ImageBox>
  )
}

export default memo(SliderImageItem)

const ImageBox = styled.div`
  & div > div {
    text-align: center;
  }
`

const CustomAntdImage = styled(Image)`
  width: 100%;
  height: 100%;
  text-align: center;
`
