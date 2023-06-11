import React from 'react'
import {CollapseProps} from 'antd'

export const skillSet: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'NextJs',
  'TypeScript',
  'Redux',
  'React-Router-Dom',
  'Scss',
  'ES6',
  'Git',
  'GitHub',
  'GitLab',
  'Axios',
  'RESTAPI',
]
export const TagItems: any = {
  JavaScript: {
    title: 'JavaScript',
    description:
      'JavaScript를 활용한 여러 웹 개발 경험을 보유하고 있으며, React.js 라이브러리를 사용하여 다양한 프로젝트를진행하였습니다. JavaScript의 느슨한 타입 체계로 인한 데이터 타입 관련 에러를 경험하였고, 이를 해결하기 위해TypeScript의 타입 시스템을 습득하고 적용하였습니다. TypeScript를 활용하여 외주 프로젝트를 개발한 경험이 있어,타입 안정성을 확보하며 코드 품질을 높이는 데 능숙합니다. ES6 문법에 대한 깊이 있는 이해를 바탕으로, 최신JavaScript 기능을 효율적으로 활용할 수 있습니 다.',
  },
  React: {
    title: 'React',
    description:
      'React의 중요 기능인 Hooks, Router등을 활용하여 여러 회사( (주) 오케이포스, 펫틱 )의 관리자페이 지를 개발하거나이미 개발된 레거시 프로젝트를 수정을하였고 이 회사들은 지금도 서비스중입니 다. 또한 펫틱은 이미 개발된 레거시프로젝트에 참여하여 기존의 코드를 분석하고 리펙토링하여 기존에 긴능을 수정하거나 최신 라이브러리를 사용하여 새로개발하기도 했습니다.',
  },
  NextJs: {
    title: 'NextJs',
    description:
      '서버 사이드 렌더링( SSR )을 이해하기 위해 사이드 프로젝트로 Next.js와 TS를 이용해서 영화 리스 트를 서버 사이드렌더링을 사용하여 개발을 하였습니다.',
  },
  Redux: {
    title: 'Redux',
    description:
      'Redux를 사용하여 외주 프로젝트의 상태 관리를 효율적으로 수행하였으며, 이를 통해 간결한 코드 구조와 높은 유지보수성을 확보하였습니다.',
  },
  GitHub: {
    title: 'GitHub',
    description:
      '외주 개발로 팀 프로젝트를 진행하면서 여러 명이 함께 커밋 규칙을 세우고 진행 상황을 공유하며 이슈가 생겼을 때 해결해 본 경험이 있습니다.',
  },
}
export const CollapseListItem: CollapseProps['items'] = [
  {
    key: '1',
    label: 'JavaScript',
    children: (
      <p>
        JavaScript를 활용한 여러 웹 개발 경험을 보유하고 있으며, React.js 라이브러리를 사용하여 다양한 프로젝트를
        진행하였습니다. JavaScript의 느슨한 타입 체계로 인한 데이터 타입 관련 에러를 경험하였고, 이를 해결하기 위해
        TypeScript의 타입 시스템을 습득하고 적용하였습니다. TypeScript를 활용하여 외주 프로젝트를 개발한 경험이 있어,
        타입 안정성을 확보하며 코드 품질을 높이는 데 능숙합니다. ES6 문법에 대한 깊이 있는 이해를 바탕으로, 최신
        JavaScript 기능을 효율적으로 활용할 수 있습니 다.
      </p>
    ),
  },
  {
    key: '2',
    label: 'React',
    children: (
      <p>
        React의 중요 기능인 Hooks, Router등을 활용하여 여러 회사( (주) 오케이포스, 펫틱 )의 관리자페이 지를 개발하거나
        이미 개발된 레거시 프로젝트를 수정을하였고 이 회사들은 지금도 서비스중입니 다. 또한 펫틱은 이미 개발된 레거시
        프로젝트에 참여하여 기존의 코드를 분석하고 리펙토링하여 기존에 긴능을 수정하거나 최신 라이브러리를 사용하여 새로
        개발하기도 했습니다.
      </p>
    ),
  },
  {
    key: '3',
    label: 'NextJs',
    children: (
      <p>
        서버 사이드 렌더링( SSR )을 이해하기 위해 사이드 프로젝트로 Next.js와 TS를 이용해서 영화 리스 트를 서버 사이드
        렌더링을 사용하여 개발을 하였습니다.
      </p>
    ),
  },
  {
    key: '4',
    label: 'TypeScript',
    children: (
      <p>
        JavaScript의 라이브러리인 React.js를 개발하면서 종종 JS의느슨한 타입이슈로 인해 데이터 타입의 에러가 발생하였고,
        그러한 문제를 해결할 수 있는 TS의 타입 시스템에 대해 이해를 하고있고 TS를 사용하 여 외주 개발한 경험도 있습니다,
        ES6의 문법들 또한 충분히 이해하고 활용할 수 있습니다.
      </p>
    ),
  },
  {
    key: '5',
    label: 'Redux',
    children: (
      <p>
        Redux를 사용하여 외주 프로젝트의 상태 관리를 효율적으로 수행하였으며, 이를 통해 간결한 코드 구조와 높은 유지
        보수성을 확보하였습니다.
      </p>
    ),
  },
  {
    key: '6',
    label: 'Git & GitHub',
    children: (
      <p>
        외주 프로젝트를 진행하면서 다른 개발자 들과 서로 진행 상황을 작성하거나, 주기적으로 회의를 통 해 개발 중인
        프로젝트의 라이브러리를 삭제, 변경하거나 세로 규칙을 세워 프로젝트의 버전 관리를 했었습니다.
      </p>
    ),
  },
  {
    key: '7',
    label: 'Slick',
    children: (
      <p>
        외주 개발로 팀 프로젝트를 진행하면서 여러 명이 함께 커밋 규칙을 세우고 진행 상황을 공유하며 이슈가 생겼을 때
        해결해 본 경험이 있습니다. 외주 프로젝트를 진행하면서 다른 개발자 들과 서로 진행 상황을 작성하거나, 주기적으로
        회의를 통 해 개발 중인 프로젝트의 라이브러리를 삭제, 변경하거나 세로 규칙을 세워 프로젝트의 버전 관리를
        했었습니다.
      </p>
    ),
  },
]

export const allIngredients = [
  {
    icon: '/images/icons/github.png',
    label: 'GitHub',
    image: '/images/sites/github.png',
    link: 'https://github.com/seungjin-le',
  },
  {
    icon: '/images/icons/blogging.png',
    label: 'Blog',
    image: '/images/sites/blog.png',
    link: 'https://seungjin-le.github.io/',
  },
  {
    icon: '/images/icons/man.png',
    label: 'Info',
    image: '/images/sites/info.png',
    link: 'https://realdeveloper.pro/bibbibig',
  },
]
