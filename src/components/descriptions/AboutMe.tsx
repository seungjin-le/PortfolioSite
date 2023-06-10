import React from 'react'
import styled from 'styled-components'

const AboutMe = () => {
  return (
    <AboutTextBox>
      <div>안녕하세요, 신입 프론트엔드 개발자 이승진입니다. </div>
      <div>
        고등학교 3학년부터 취업을 시작해 반도체 업계에서 약 4년간 근무한 경험을 바탕으로, 힘든 상황에서도 빠르게
        적응하고 문제를 해결할 수 있는 능력을 갖추 게 되었습니다.
      </div>
      <div>
        반도체 업계에서 생산관리 프로그램을 개발하는 개발자들의 열정에 영감을 받아, 프론트엔드 개발자로의 여정을
        시작하였습니다.
      </div>
      <div>
        이후로 꾸준히 프론트엔드 기술을 습득하고 알고리즘 문제를 통해 코드 품질을 개 선하는 능력을 발전시키고 있습니다.
      </div>
    </AboutTextBox>
  )
}

export default AboutMe

const AboutTextBox = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  line-height: 25px;
  padding: 2.5rem;
  border-radius: 17px;
  transition: 0.5s;

  & div {
    padding: 0.7rem 0;
    word-break: keep-all;
  }
`
