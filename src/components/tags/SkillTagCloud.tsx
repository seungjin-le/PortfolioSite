import {TagCloudOptions} from 'TagCloud'

import TagCloud from '@frank-mayer/react-tag-cloud'
import {skillSet} from '../../utility/listItems'

const SkillTagCloud = () => {
  return (
    <div className={'flex text-text w-full items-center justify-center p-8'}>
      <TagCloud
        options={(w: Window): TagCloudOptions => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'fast',
        })}
        onClickOptions={{passive: true}}
      >
        {skillSet}
      </TagCloud>
    </div>
  )
}

export default SkillTagCloud
