import {Card} from 'antd'
import {styled} from 'styled-components'
import React, {useState} from 'react'
// {title,texts}
const DescriptionsBox = () => {
  const [onClick, setOnClick] = useState(false)

  return (
    <CustomAntdCardBox
      title='안녕하세요, 신입 프론트엔드 개발자 이승진입니다.'
      onClick={() => setOnClick(!onClick)}
      style={{maxHeight: onClick ? '1900px' : '700px', transition: 'maxHeight 4s ease-in-out'}}
    >
      <div>
        고등학교 3학년부터 취업을 시작해 반도체 업계에서 약 4년간 근무한 경험을 바탕으로, 힘든 상황에서도 빠르게
        적응하고 문제를 해결할 수 있는 능력을 갖추 게 되었습니다.
      </div>
      <br />
      <div>
        반도체 업계에서 생산관리 프로그램을 개발하는 개발자들의 열정에 영감을 받아, 프론트엔드 개발자로의 여정을
        시작하였습니다.
      </div>
      <br />
      <div>
        이후로 꾸준히 프론트엔드 기술을 습득하고 알고리즘 문제를 통해 코드 품질을 개 선하는 능력을 발전시키고 있습니다.
      </div>
      <br />
      {onClick ? (
        <div>
          고등학교 3학년부터 산업체로 취업을 나가 반도체 업계에서 약 4년간 근무한 경험을 바탕으로, 힘든 상황에서도
          빠르게 적응하고 문제를 해결할 수 있는 능력을 갖추 게 되었습니다. <br />
          <br />
          반도체 업계에서 생산관리 프로그램을 개발하는 개발자들의 열정에 영감을 받아, 프론트엔드 개발자로의 여정을
          시작하였습니다.
          <br />
          <br />
          이후로 꾸준히 프론트엔드 기술을 습득하고 알고리즘 문제를 통해 코드 품질을 개 선하는 능력을 발전시키고
          있습니다.
          <br />
          <br /> 새로운 기술을 배우고 성장하는 데 큰 즐거움을 느끼며, 다양한 경험을 통해 어떤 환경에도 적응할 수 있는
          유연함을 키웠습니다.
          <br />
          <br /> 배운 것을 기록하고 공유하기 위해 블로그에 글을 작성하며, 지식을 체계적으로 관 리하여 필요할 때 쉽게
          참고할 수 있도록 노력하고 있습니다.
          <br />
          <br /> 비전공자로서 아직은 모르는 것이 많지만, 그것을 부끄러워하지 않고 오히려 모르는 것을 인정하며 끊임없이
          질문 하는 자세를 유지하고 있습니다. <br />
          <br />
          이러한 접근을 통해 실력을 빠르게 향상시키며 성장하고 있으며. 앞으로도 끊임없는 도전과 성장을 통해 더 나은
          개발자가 되기 위해 노력하고 있습니다.
        </div>
      ) : (
        '....'
      )}
    </CustomAntdCardBox>
  )
}

export default DescriptionsBox

const CustomAntdCardBox = styled(Card)`
  background: rgba(53, 53, 53, 0.5);
  font-size: 1rem;
  border-radius: 1rem;
  padding: 1.5rem;
  border: none;
  width: 100%;
  cursor: pointer;
  overflow: hidden;

  & * {
    color: #eee;
    word-break: keep-all;
    border: none !important;
  }
  & .ant-card-head-title {
    font-size: 1.5rem;
    color: #5d5d5d;
  }
`
