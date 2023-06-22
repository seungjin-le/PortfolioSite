import React from 'react'
import Header from './Header'
import {PageLayoutProps} from 'lodash'
import WatchModel from 'components/three/WatchModel'

const MainLayout = ({children}: PageLayoutProps) => {
  return (
    <div className={'w-full h-0 mx-auto my-0 max-w-[1600px] min-w-[400px]'}>
      <Header />
      {children}
      <WatchModel />
    </div>
  )
}
export default MainLayout
