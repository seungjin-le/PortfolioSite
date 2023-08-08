import {SectionFlexBoxProps} from 'lodash'

import Title from '../../components/texts/Title'

const FlexRowBox = ({title, left, right}: SectionFlexBoxProps) => {
  return (
    <div className={'relative flex flex-col justify-center items-center w-full h-full transition-all'}>
      <div className={'w-full flex items-start'}>
        <Title title={title} color={'#eee'} />
      </div>
      <div className={'relative w-full flex flex-row items-center lg:flex-col px-4'}>
        <div className={'flex-1 md:w-full h-auto '}>{left}</div>
        <div className={'flex-1 md:w-full'}>{right}</div>
      </div>
    </div>
  )
}

export default FlexRowBox
