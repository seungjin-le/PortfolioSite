import {Animator} from 'react-scroll-motion'
import {AnimatorProps} from 'lodash'

const CustomAnimator = ({children, animation}: AnimatorProps) => {
  return (
    <Animator animation={animation} className={'w-full flex flex-col items-center justify-center pl-8 pr-8'}>
      {children}
    </Animator>
  )
}

export default CustomAnimator
