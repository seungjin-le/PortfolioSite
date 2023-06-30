import {ScrollPage} from 'react-scroll-motion'
import {PageLayoutProps} from 'lodash'

const CustomScrollPage = ({children}: PageLayoutProps) => {
  return (
    <ScrollPage className={'w-full h-full flex flex-col items-center justify-center relative mx-auto'}>
      {children}
    </ScrollPage>
  )
}

export default CustomScrollPage
