import React, {memo} from 'react'
import Title from '../../components/texts/Title'

const Header = () => {
  return (
    <div className={'w-full text-center flex flex-row py-4 px-0 items-center fixed left-0 z-[3] bg-header'}>
      <div className={'flex flex-row w-full h-full max-h-[200px] items-center justify-center'}>
        <div>
          <Title title={'Front-end Lee Seung Jin'} color={'#eee'} level={1} />
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
