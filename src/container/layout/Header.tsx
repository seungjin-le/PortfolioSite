import {memo, useCallback, useEffect} from 'react'
import Title from '../../components/texts/Title'
import {Link, useLocation} from 'react-router-dom'
import CursorPointer from 'components/cursor/CursorPointer'
import styled, {IStyledComponent} from 'styled-components'

const Header = () => {
  const nav = useLocation()

  const moveToScroll = useCallback((): void => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [])

  useEffect((): void => {
    moveToScroll()
  }, [nav.pathname])

  return (
    <div className={'w-full text-center flex flex-row py-4 px-0 items-center fixed left-0 z-[3] bg-header sm:p-0'}>
      <div className={'flex flex-row w-full h-full max-h-[200px] items-center justify-center'}>
        <div className={'flex-1 sm:hidden md:pl-4'}>
          <Link to={'/'}>
            <Title title={'Front-end Lee Seung Jin'} color={'#eee'} size={'3xl'} margin={'mb-0'} />
          </Link>
        </div>
        <div className={'flex-1 text-text h-full flex items-center justify-center'}>
          <HeaderTabItem
            className={`${
              nav.pathname === '/' ? 'bg-selected' : 'bg-itemBg'
            } rounded-default mr-3 sm:flex-1 sm:m-0 sm:rounded-[0]`}
            to={'/'}
          >
            <CursorPointer />
            Home
          </HeaderTabItem>
          <HeaderTabItem
            className={`${
              nav.pathname === '/projects' ? 'bg-selected' : 'bg-itemBg'
            } rounded-default sm:flex-1 sm:h-full sm:rounded-[0]`}
            to={'/projects'}
          >
            Projects
            <CursorPointer />
          </HeaderTabItem>
        </div>
      </div>
    </div>
  )
}

export default memo(Header)

const HeaderTabItem: IStyledComponent<any, any> = styled(Link)`
  position: relative;
  padding: 0.75rem;
  overflow: hidden;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`
