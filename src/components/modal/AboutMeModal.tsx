import React from 'react'
import {Col, Modal, Row} from 'antd'
import {ModalProps} from 'lodash'
import styled from 'styled-components'

import AboutSlider from '../slider/AboutSlider'
import Title from '../texts/Title'

const AboutMeModal = ({showModal, setShowModal}: ModalProps) => {
  return (
    <CustomAntdModal
      className={'aboutModalBox'}
      width={1000}
      centered
      open={showModal}
      onCancel={() => setShowModal(false)}
      footer={null}
    >
      <div className={'modalFlexBox'}>
        <Title title={'프론트엔드 개발자 이승진입니다.'} level={3} color={'#00203f'} />
        <Row className={'aboutBox'}>
          <Col className={'left'} span={12}>
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
              <br /> 새로운기술을배우고성장하는데큰즐거움을느끼며,다양한경험을통해어떤환경에도적응할수있는 유연함을
              키웠습니다.
              <br />
              <br /> 배운 것을 기록하고 공유하기 위해 블로그에 글을 작성하며, 지식을 체계적으로 관 리하여 필요할 때 쉽게
              참고할 수 있도록 노력하고 있습니다.
              <br />
              <br /> 비전공자로서 아직은 모르는 것이 많지만, 그것을 부끄러워하지 않고 오히려 모르는 것을 인정하며
              끊임없이 질문 하는 자세를 유지하고 있습니다. <br />
              <br />
              이러한 접근을 통해 실력을 빠르게 향상시키며 성장하고 있으며. 앞으로도 끊임없는 도전과 성장을 통해 더 나은
              개발자가 되기 위해 노력하고 있습니다.
            </div>
          </Col>
          <Col className={'right'} span={12}>
            <AboutSlider />
          </Col>
        </Row>
      </div>
    </CustomAntdModal>
  )
}

export default AboutMeModal

const CustomAntdModal = styled(Modal)`
  & > .ant-modal-content {
    padding: 2rem 1rem 2rem 2rem;
    background: linear-gradient(to right, #5eb7b7 50%, #1b2a49 50%);
  }

  & .left * {
    color: #eee;
  }
  & .right * {
    color: #eee;
  }
  & .modalFlexBox {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: #fff;

    .aboutBox {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .left,
      .right {
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        &.left {
          padding-right: 2rem;
        }

        &.right {
          padding-left: 1rem;
          padding-right: 0;
        }
      }
    }
  }
`
