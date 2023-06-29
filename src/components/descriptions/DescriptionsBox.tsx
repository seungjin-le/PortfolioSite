import {memo} from 'react'
import CursorPointer from '../cursor/CursorPointer'
import Title from 'components/texts/Title'

const DescriptionsBox = () => {
  return (
    <div className={`bg-itemBg w-full h-full relative rounded-default cursor-pointer p-6 transition-all break-keep`}>
      <Title title={'안녕하세요, 신입 프론트엔드 개발자 이승진입니다.'} level={3} color={'#5d5d5d'} />
      <div className={'text-text text-base transition-all'}>
        <div>
          안녕하세요, 신입 프론트엔드 개발자 이승진입니다. 고등학교 3학년부터 취업을 나와 산업체에서 근무하며, 힘든
          상황에서도 빠르게 적응하고 문제를 해결하는 능력을 키웠습니다.
          <br />
          <br />
          반도체 업계에서 근무하던중 생산관리 프로그램을 개발하러온 개발자들의 열정을 보고 프론트엔드 개발자로의 전환을
          결심했습니다.
          <br />
          <br />
          그 후로 여러 시행착오를 겪으며 프론트엔드로 진로를 정한 후 기술을 꾸준히 학습하고, 알고리즘 문제를 통해 코드
          품질을 개선하는 능력을 발전시키고 있습니다.
          <br />
        </div>
        <br />
        <div className={'transition-all'}>
          새로운 기술을 배우고 성장하는 것에 즐거움을 느끼며, 다양한 경험을 통해 어떤 환경에도 적응할 수 있는 유연함을
          키웠습니다. 또한, 배운 것을 기록하고 공유하기 위해 블로그에 글을 작성하며, 지식을 체계적으로 관리하고
          있습니다.
          <br />
          <br />
          비전공자로서 아직은 모르는 것이 많지만, 그것을 부끄러워하지 않고 오히려 모르는 것을 인정하며 끊임없이 질문하는
          자세를 유지하고 있습니다. 이러한 접근을 통해 실력을 빠르게 향상시키며 성장하고 있습니다.
          <br />
          <br />
          앞으로도 끊임없는 도전과 성장을 통해 더 나은 개발자가 되기 위해 노력할 것이며, 어떤 프로젝트든 최선을 다해
          참여하겠습니다. 감사합니다.
        </div>
      </div>
      <CursorPointer />
    </div>
  )
}

export default memo(DescriptionsBox)
