import {memo} from 'react'
import {TitleProps} from 'lodash'

const Title = ({title, size, color, margin}: TitleProps) => {
  return (
    <span
      className={`${size ? `text-${size}` : 'text-3xl'}  ${margin ? margin : 'mb-8'} inline-block`}
      style={{color: color ? color : '#eee'}}
    >
      {title}
    </span>
  )
}

export default memo(Title)
