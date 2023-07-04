import {FieldTimeOutlined} from '@ant-design/icons'
import {TimeLineItemProps} from 'lodash'

const TimeLineItem = ({item}: TimeLineItemProps) => {
  return (
    <li className='relative flex flex-row mb-0 md:flex-row '>
      <div className='flex flex-col items-center w-16'>
        <div className='z-10 flex items-center justify-center p-3 text-xl rounded-full hover:scale-150 transition-default bg-pageBg'>
          <FieldTimeOutlined />
        </div>
        <div className={`h-full w-[1px] ${!item.last && 'bg-text'}`} />
      </div>
      <div className='w-full pr-4 mt-3 mb-8'>
        <h3 className='text-lg text-subTitleText '>{item.title}</h3>
        <time className='block mb-2 text-sm leading-none text-subTitleText '>
          {!item.date.end ? item.date.start : `${item.date.start} ~ ${item.date.end}`}
        </time>
        <p className='text-base text-text'>{item.description}</p>
      </div>
    </li>
  )
}

export default TimeLineItem
