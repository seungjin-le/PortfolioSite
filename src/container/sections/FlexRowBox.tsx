import {memo} from 'react'
import {SectionFlexBoxProps} from 'lodash'

import Title from '../../components/texts/Title'

const FlexRowBox = ({title, left, right}: SectionFlexBoxProps) => {
  return (
    <div className={'p-8 relative flex flex-col justify-center items-center w-full h-full transition-all'}>
      <div className={'w-full flex items-start mb-8'}>
        <Title title={title} color={'#eee'} level={1} />
      </div>
      <div className={'relative w-full flex flex-row items-center lg:flex-col'}>
        <div className={'flex-1 py-0 px-12 lg:w-full h-auto md:w-full '}>{left}</div>
        <div className={'flex-1 py-0 px-12 lg:w-full '}>{right}</div>
      </div>
    </div>
  )
}

export default memo(FlexRowBox)
