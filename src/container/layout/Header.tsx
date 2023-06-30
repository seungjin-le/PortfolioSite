import React, {memo, useEffect, useState} from 'react'
import Title from '../../components/texts/Title'
import {Link, useLocation} from 'react-router-dom'
import CursorPointer from 'components/cursor/CursorPointer'

const Header = () => {
  const nav = useLocation()
  const [state, setState] = useState('/projects')

  useEffect(() => {
    if (nav.pathname.includes('projects')) {
      setState('/')
    } else {
      setState('/projects')
    }
  }, [nav.pathname])

  return (
    <div className={'w-full text-center flex flex-row py-4 px-0 items-center fixed left-0 z-[3] bg-header'}>
      <div className={'flex flex-row w-full h-full max-h-[200px] items-center justify-center'}>
        <div className={'flex-1'} />
        <div className={'flex-1'}>
          <Title title={'Front-end Lee Seung Jin'} color={'#eee'} level={2} />
        </div>
        <div className={'flex-1 text-text h-full'}>
          <Link
            className={'bg-itemBg p-4 transition-all inline-block rounded-default hover:scale-110 relative'}
            to={state}
          >
            {state === '/' ? 'Home' : 'Projects'}
            <CursorPointer />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
