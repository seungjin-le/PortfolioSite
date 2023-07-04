import {memo, useCallback, useEffect} from 'react'
import Title from '../../components/texts/Title'
import {Link, useLocation} from 'react-router-dom'
import CursorPointer from 'components/cursor/CursorPointer'

const Header = () => {
  const nav = useLocation()
  const moveToScroll = useCallback(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [])

  useEffect(() => {
    moveToScroll()
  }, [nav.pathname])

  return (
    <div className={'w-full text-center flex flex-row py-4 px-0 items-center fixed left-0 z-[3] bg-header sm:p-0'}>
      <div className={'flex flex-row w-full h-full max-h-[200px] items-center justify-center'}>
        <div className={'flex-1 sm:hidden md:pl-4'}>
          <Title title={'Front-end Lee Seung Jin'} color={'#eee'} size={'3xl'} margin={'mb-0'} />
        </div>
        <div className={'flex-1 text-text h-full flex items-center justify-center'}>
          <Link
            className={
              'bg-itemBg p-3 transition-all inline-block rounded-default hover:scale-110 relative mr-3 sm:flex-1 sm:m-0 sm:rounded-[0] overflow-hidden'
            }
            to={'/'}
          >
            <CursorPointer />
            Home
          </Link>
          <Link
            className={
              'bg-itemBg p-3 transition-all inline-block rounded-default hover:scale-110 relative sm:flex-1 sm:h-full sm:rounded-[0] overflow-hidden'
            }
            to={'/projects'}
          >
            Projects
            <CursorPointer />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
