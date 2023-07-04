import {ScrollPage} from 'react-scroll-motion'
import {PageLayoutProps} from 'lodash'

const CustomScrollPage = ({children}: PageLayoutProps) => {
  return (
    <ScrollPage className={'w-full h-full min-h-[1500px] min-w-[450px]'}>
      <div className={'w-full h-full flex flex-col items-center justify-center relative max-w-[1600px] mx-auto px-8'}>
        {children}
      </div>
    </ScrollPage>
  )
}

export default CustomScrollPage
