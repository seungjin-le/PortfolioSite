import {ProjectItemProps, SiteItemProps, SkillDirection, ThreeScrollPos, TimeLineItem} from 'lodash'

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

export const skillListItems: SkillDirection[] = [
  {
    key: 1,
    label: 'JavaScript',
    icons: 'images/logos/javascript.png',
    texts:
      'JavaScript를 기반으로 여러 웹 개발 프로젝트를 진행하였고, 특히 React.js를 활용한 경험이 많습니다. JavaScript의 타입 관련 문제를 해결하기 위해 TypeScript를 도입하였고, 이를 통해 코드 품질을 향상시키는 방법을 배웠습니다. 또한, ES6 문법에 대한 깊은 이해를 바탕으로 최신 JavaScript 기능을 효과적으로 사용하였습니다.',
  },
  {
    key: 2,
    label: 'React',
    icons: 'images/logos/react.png',
    texts:
      'React의 중요 기능인 Hooks, Router등을 활용하여 여러 회사( (주) 오케이포스, 펫틱 )의 관리자페이지를 새로 개발하거나 이미 개발된 레거시 프로젝트를 수정을하였고 이 회사들은 지금도 서비스중입니 다. 또한 펫틱은 이미 개발된 레거시 프로젝트에 참여하여 기존의 코드를 분석하고 리팩토링하여 기존에 기능을 수정하거나 최신 라이브러리를 교체하거나 새로 개발하기도 했습니다.',
  },
  {
    key: 3,
    label: 'NextJs',
    icons: 'images/logos/NextJs.png',
    texts:
      '서버 사이드 렌더링(SSR)에 대한 이해를 하기 위해, 개인 프로젝트에서 Next.js와 TypeScript를 활용하여 영화 리스트를 구현해본 경험이 있으며, 이 과정에서 SSR의 원리와 장점을 실질적으로 경험하며, 이로인해 SSR이 어떤것인지 CSR과 어떤게 다른지 와 사용하는 방법에 대해 배울 수 있었습니다.',
  },
  {
    key: 4,
    label: 'TypeScript',
    icons: 'images/logos/TypeScript.png',
    texts:
      'React를 활용한 JavaScript 개발 과정에서, JavaScript의 느슨한 타입으로 인한 에러를 여러번 경험하였고, 이를 해결하기 위해 TypeScript의 타입 시스템을 학습하고 적용하였고, 이를 통해 데이터 타입 관련 에러를 효과적으로 해결하였습니다. 또한, 외주 프로젝트에서 TypeScript를 활용한 개발 경험도 있습니다. ES6 문법에 대해서도 충분히 이해하고 있으며, 이를 효과적으로 활용할 수 있습니다',
  },
  {
    key: 5,
    label: 'React-Redux',
    icons: 'images/logos/redux.png',
    texts:
      'Redux를 활용하여 외주 프로젝트의 상태 관리를 진행하였습니다. 이 과정에서 Redux의 핵심 개념인 액션, 리듀서, 스토어를 이해하고, 이를 통해 상태 변화를 예측 가능하고 일관된 방식으로 관리하였습니다. 이러한 경험을 통해 코드의 구조를 간결하게 유지하면서도, 높은 유지보수성을 확보할 수 있었습니다. 이를 바탕으로, 프로젝트의 확장성과 재사용성을 높이는 데 기여하였습니다.',
  },
  {
    key: 6,
    label: 'React-Router',
    icons: 'images/logos/reactRouter.png',
    texts:
      'React 애플리케이션에서 라우팅을 처리하기 위해 프로젝트에서 React-Router를 광범위하게 사용했습니다. 저는 기본 라우팅과 동적 라우팅등 React-Router를 사용하는데 익숙합니다.',
  },
  {
    key: 7,
    label: 'REST API',
    icons: 'images/logos/restapi.png',
    texts:
      'REST API를 사용하여 외주 프로젝트를 진행한 경험이 있습니다. REST의 원칙을 이해하고 있으며 현제는 비동기로 HTTP 요청을 위해 Axios 라이브러리를 사용하고 있습니다.',
  },
  {
    key: 8,
    label: 'Axios',
    icons: 'images/logos/axios.png',
    texts:
      '자바스크립트용 프라미스 기반 HTTP 클라이언트인 Axios에 익숙합니다. 저는 비동기 API 호출을 만들기 위해 다양한 프로젝트에서 Axios를 사용해 왔으며 오류 처리뿐만 아니라 요청 및 응답 처리에 대해 알고 있습니다.',
  },
  {
    key: 9,
    label: 'Git & Hub & Lab',
    icons: 'images/logos/git.png',
    texts:
      '외주 프로젝트를 진행하면서 다른 개발자 들과 서로 진행 상황을 작성하거나, 주기적으로 회의를 통 해 개발 중인 프로젝트의 라이브러리를 삭제, 변경하거나 세로 규칙을 세워 프로젝트의 버전 관리를 했었습니다.',
  },
  {
    key: 10,
    label: 'Prettier',
    icons: 'images/logos/prettier.png',
    texts:
      '모든 프로젝트에서 일관된 코드 형식을 유지하기고 코드베이스의 가독성과 위생을 유지하기 위해 Prettier를 필수적으로 사용합니다.',
  },
  {
    key: 11,
    label: 'ESlint',
    icons: 'images/logos/eslint.png',
    texts:
      '모든 프로젝트에서 ESLint를 사용하여 오류를 포착하고 일관된 코딩 스타일을 적용하기 위해 ESlint를 필수적으로 사용합니다. TypeScript로 프로젝트를 진행중 TypeScript를 지원하지 않는 라이브러리의 경우 해당 라이브러리를 예외처리 하기도 하였습니다.',
  },
  {
    key: 12,
    label: 'Slack',
    icons: 'images/logos/slack.png',
    texts:
      '외주 개발로 팀 프로젝트를 진행하면서 여러 명의 개발자들과 함께 커밋 규칙을 세우고 진행 상황을 공유하며 이슈가 생겼을 때 해결해 본 경험이 있습니다. 외주 프로젝트를 진행하면서 다른 개발자 들과 서로 진행 상황을 작성하거나, 주기적으로 회의를 통 해 개발 중인 프로젝트의 라이브러리를 삭제, 변경하거나 세로 규칙을 세워 프로젝트의 버전 관리를 했었습니다.',
  },
  {
    key: 13,
    label: 'Notion',
    icons: 'images/logos/notion.jpeg',
    texts:
      '외주 개발로 팀 프로젝트를 진행하면서 다른 페이지를 개발하는 프론트엔드 개발자들과 서로 진행 과정과 이슈 상황 등을 공유한 경험이 있습니다.',
  },
  {
    key: 14,
    label: 'Tailwind CSS',
    icons: 'images/logos/tailwindCSS.png',
    texts:
      'TailwindCSS를 활용하는데 익숙하며, 응답성이 뛰어난 반응형 인터페이스 제작하는데 활용할 수 있습니다. 또한 현제 보고계신 포트폴리오 사이트는 TailwindCSS로 개발하였습니다.',
  },
]

export const allIngredients: SiteItemProps[] = [
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
    link: 'https://www.rallit.com/resumes/70839@dltmdwls154/%EC%9D%B4%EC%8A%B9%EC%A7%84',
  },
]

export const aboutMeText: string = `
### *안녕하세요, 신입 프론트엔드 개발자 이승진입니다.*
  
고등학교 3학년부터 취업을 나와 산업체에서 근무하며, 힘든상황에서도 빠르게 적응하고 문제를 해결하는 능력을 키웠습니다.
          
반도체 업계에서 근무하던중 생산관리 프로그램을 개발하러온 개발자들의 열정을 보고 프론트엔드 개발자로의 전환을 결심했습니다.
          
그 후로 여러 시행착오를 겪으며 프론트엔드로 진로를 정한 후 기술을 꾸준히 학습하고, 알고리즘 문제를 통해 코드품질을 개선하는 능력을 발전시키고 있습니다.
          
새로운 기술을 배우고 성장하는 것에 즐거움을 느끼며, 다양한 경험을 통해 어떤 환경에도 적응할 수 있는 유연함을 키웠습니다. 또한, 배운 것을 기록하고 공유하기 위해 블로그에 글을 작성하며, 지식을 체계적으로 관리하고 있습니다.
          
비전공자로서 아직은 모르는 것이 많지만, 그것을 부끄러워하지 않고 오히려 모르는 것을 인정하며 끊임없이 질문하는 자세를 유지하고 있습니다. 이러한 접근을 통해 실력을 빠르게 향상시키며 성장하고 있습니다.
          
앞으로도 끊임없는 도전과 성장을 통해 더 나은 개발자가 되기 위해 노력할 것이며, 어떤 프로젝트든 최선을 다해 참여하겠습니다. 감사합니다.
`

export const projectsInfo: ProjectItemProps[] = [
  {
    company: '그라노',
    logo: 'images/logos/grano.png',
    projectName: '그라노팜 개발과제 테스트',
    date: {
      start: '2023/05/11',
      end: '2023/05/17',
    },
    projectType: '과제 테스트',
    team: {
      front: 1,
      back: 0,
    },
    skills: [
      'React',
      'Javascript',
      'Typescript',
      'Prettier',
      'ESLint',
      'RESTAPI',
      'Axios',
      'Ant-design',
      'React-Redux',
      'React-Router',
      'Web3-react',
      'Ethers.js',
      'Styled-Components',
      'Jazzicon',
      'Git',
      'GitLab',
      'RESTAPI',
    ],
    description: `
##### *이 프로젝트는 그라노팜의 개발 과제 테스트로 진행되었으며, 총 5일 동안 단독으로 수행하였습니다.*

---
### 주요 과제 내용은 다음과 같습니다
1. Web3를 사용하여 메타마스크 지갑과 연동하기
2. 지갑의 잔액 표시하기
3. 탭 이동 기능 구현하기

JavaScript 라이브러리인 React를 사용하여 UI 컴포넌트를 구성하였습니다.
다른 개발자와 협업을 위해 Git Commit Message를 알기 쉽도록 작성하였으며,
후에 팀에 합류할 개발자를 위해 프로젝트의 구조와 사용 방법을 상세히 기술한 README.md 문서를 작성하였습니다.

Redux라이브러리를 사용하여 효육적인 상태관리와 JavaScript의 정적 타입 언어인 TypeScript로 코드의 안정성 또한 확보하였으며, 
ESlint와 Prettier를 사용하여 코드의 일관성을 유지하기 위해 노력하였습니다.

프로젝트 진행도중 퀄리티의 부족함을 느껴 사용자의 브라우저가 메타마스크를 지원하는지 확인 하는 기능을 구현하고
스크롤을 내릴시 데이터가 추가되는 무한스크롤을 추가로 구현하였습니다.

프로젝트의 모든 개발 단계를 마치고 Netlify를 통해 웹에 배포하였고
이를 통해 처음부터 끝까지 독립적인 프로젝트 수행 능력과 협업을 위한 필요한 문서 작성 능력을 갖추었습니다.

---  

### Link
#### [GitHub](https://github.com/seungjin-le/Granopharm_Coding_Test)
#### [배포한 과제 URL](https://granopam.netlify.app)
`,
  },
  {
    company: '(주)OKPOS',
    logo: 'images/logos/okpos.png',
    projectName: '(주)OKPOS Web Admin Page 개발',
    date: {
      start: '2022/10/01',
      end: '2023/04/31',
    },
    projectType: '외주 개발',
    team: {
      front: 3,
      back: 3,
    },
    skills: [
      'JavaScript',
      'React',
      'TypeScript',
      'React-Redux',
      'AWS S3',
      'Axios',
      'Styled-Components',
      'Chart.js',
      'React-Quill',
      'CoreUI',
      'React-Router',
      'AntDesign',
      'Git',
      'GitLab',
      'Prettier',
      'ESLint',
      'RESTAPI',
    ],
    description: `
##### *해당 업체와 보안 유지 계약으로 인해 이미지와 코드 등을 공유할 수 없는점 양해 부탁드립니다.*

---

#### 프로젝트 참여 계기
  - 이전에 외주 전문팀 SoftSquared에 참여하여 개발한 프로젝트에 사용했던 스킬과 현제 SoftSquared에서 모집하고 있는 스킬이 같고 이전에 제가 보여줬던 성실함에 연락을 주셔서 참여하여 개발하게 되었습니다.

#### 담당한 기능
  - 오케이 포스의 관리자 페이지를 React.js로 개발하는 역할을 맡아, 고객과 대리점을 관리하는 파트너 센터와 제품 판매 공식몰 중 파트너 센터 전체를 담당하였습니다.

#### 주요 성과
- ##### 컴포넌트 재사용성 향상 
  - 페이지, 리스트, 상세 모달을 템플릿으로 만들어 데이터를 Props로 전달하는것으로 데이터를 출력하는 컴포넌트 개발, REST API요청 함수를 모듈화를 하여 재사용성 향상
- #### 구조화 및 유지보수성 향상
  - Props를 활용해 템플릿 컴포넌트의 기능을 제어하는 코드 작성(검색기능 사용 유무, CRUD기능 사용 유무 등)
- #### 사용성 향상
  - 리스트의 검색 기능 개발(특정 기간, 제목, 이름, 번호 등), Chart.js를 활용한 특정 데이터를 그래프로 만들어 데이터를 시각화

#### 공통 컴포넌트 개발
  - CoreUI 라이브러리를 사용하여 회원 및 제품 리스트를 템플릿으로 제작하여 데이터를 Props로 전달하는 것으로 리스트가 출력되도록 설계하였습니다, 이렇게 제작한 템플릿은 오케이포스의 다른 페이지를 개발하는 프런트엔드 개발자들를 모든 페이지에서 사용하였습니다.
  - CoreUI를 사용하여 만든 리스트 템플릿으로 출력한 리스트에서 데이터를 클릭시 고객 및 제품의 상세데이터를 출력하는 모달의 틀과 기본기능(CRUD)을 템플릿으로 제작하여 함수나 데이터를 Props로 전달하는 것으로 사용할 수 있도록 재사용성을 높였습니다.
  - 상세모달의 CRUD기능을 사용하지 않는 페이지는 CRUD함수를 Props로 전달하지 않으면 해당 기능이 동작하지 않도록 설계하여 컴포넌트의 재사용성과 유지보수성을 높였습니다.
  - 리스트 템플릿에 특정기간, 제목, 이름, 제품번호 등을 검색할 수 있는 기능을 개발하였습니다. 그리고 검색 기능을 사용하지 않는 리스트에서는 boolean값을 Props로 전달하여 검색기능이 동작하지 않도록 처리하여 컴포넌트의 재사용성을 높였습니다.

---

#### 개발한 기능 및 페이지
- 회원 관리
  - 오케이포스의 고객들의 정보를 관리하고, 고객정보를 CRUD가 가능하도록 기능을 개발하였습니다.
- 탈퇴 회원 관리 페이지
  - 탈퇴한 고객들의 정보를 관리하고, 탈퇴한 고객들의 탈퇴 사유를 분류하고 통계를 내 수치화하고 Chart.js라이브러리를 사용해 그래프로 출력하여 통계를 시각화, 또한 탈퇴 회원 정보를 검색, 수정, 삭제할 수 있는 기능을 개발하였습니다.
- 공지사항 관리 페이지
  - 오케이포스의 공지사항을 관리하고, 공지사항의 제목 및 날자 등을 검색하거나 공지사항의 CRUD하는 기능을 개발하 였고, React-Quill에디터를 사용해 클라이언트가 작성한 공지사항의 폰트 크기, 색상, 종류등 자유롭게 지정할 수 있도록 하였고 에디터에 추가한 이미지만 AWS S3에 업로드를 하였습니다.
- 영업 대리점 관리 페이지
  - 오케이포스와 계약한 대리점들의 정보를 관리하고, 현제 계약된 대리점들의 정보를 검색, CRUD하는 기능을 개발하였고 대리점들의 사업자 등록증을 AWS S3에서 다운로드를 하는 기능을 개발하였습니다.
- 자료실 관리 페이지
  - 오케이포스의 제품, 서비스 등 여러정보를 관리하고, 등록된 개시글을 검색, CRUD하는 기능을 개발하였고 제품이나 서비스에 대한 가이드 파일을 AWS S3에 업로드하는 기능을 개발하였습니다.
- 발주 신청 관리(배송 데이터 수정 및 추가 가능)기능
  - 오케이포스의 고객이 발주를 신청한 제품 데이터를 관리하고, 신청한 발주의 데이터를 검색, CRUD하는 기능을 개발하였고 신청한 발주의 배송 데이터를 CRUD하고 배송 상황을 검색하는 기능을 개발하였습니다.
- 제품 유지보수 신청 관리 페이지
  - 오케이포스의 고객이 신청한 제품 유지보수 데이터를 관리하고, 유지보수 일정 및 제품 데이터를 검색, CRUD하는 기능을 개발하였습니다.
- 교육 일정 관리 페이지
  - 오케이포스와 계약한 대리점이 신청한 제품 교육일정 데이터를 관리하고, 교육일정 및 교육인원 등 검색, CRUD하는 기능을 개발하였습니다.
- 교육 신청 관리 페이지
  - 오케이포스와 계약한 대리점이 신청한 제품 교육신청 데이터를 관리하고, 신청한 교육일정, 교육인원 등 검색, CRUD하는 기능을 개발하였습니다.
- 교육 신청서 리스트 관리 페이지
  - 오케이포스와 계약한 대리점이 신청한 교육 신청서 데이터를 관리하고, 교육 신청서를 검색, AWS S3에 업로드, 삭제 수정 등 기능을 개발하였습니다.
`,
  },
  {
    company: 'Pettick',
    logo: 'images/logos/pettick.png',
    projectName: 'Pettick Web Admin Page 개발',
    date: {
      start: '2022/05',
      end: '2022/08',
    },
    projectType: '외주 개발',
    team: {
      front: 2,
      back: 2,
    },
    skills: [
      'JavaScript',
      'React',
      'React-Bootstrap-Table',
      'Axios',
      'RESTAPI',
      'React-Router',
      'CoreUI',
      'Styled-Components',
      'Git',
      'GitLab',
      'Prettier',
      'ESLint',
    ],
    description: `
##### *해당 업체와 보안 유지 계약으로 인해 이미지와 코드 등을 공유할 수 없는점 양해 부탁드립니다.*

---

#### 프로젝트 참여 계기
  -  외주 전문팀 SoftSquared에서 React.js개발자 모집글을 보고 신청하여 잠시나마 팀에 합류해 개발하게 되었습니다.

#### 담당한 기능
  - 기존 기능을 분석하여 수정하거나 새로운 기능을 추가하고 새로운 페이지를 개발했습니다.

#### 주요 성과
  - 상품 상세페이지 개선 : 기존의 데이터를 출력하는 로직을 수정하여 사용성 향상.
  - 상품 옵션 기능 강화 : 상품 옵션을 CRUD하는 기능 개발하여 상품관리 효율성 증대.
  - 쿠폰 페이지 UI 개선 : 클라이언트가 사용했던 기존의 쿠폰 페이지 UI의 불편했던 수정하여 사용자 경험 향상.
  - 제품 형태별 리스트 관리 페이지 추가 : 제품을 형태별( ex) 알약, 물약, 가루, 영양제 등)로 관리하는 페이지를 추가하여 제품 관리 효율성 증가.
  - 제품 주문 현황 페이지 개선 : 클라이언트가 사용했던 기존의 주문현황 UI 및 데이터 CRUD 로직 수정 및 배송추적 기능 추가로 서비스 개선.
  - 제품 주문취소/교환/환불처리 페이지 개선 : 클라이언트가 사용했던 기존의 주문취소/교환/환불처리 페이지의 UI및 데이터 CRUD 로직 수정하여 편의성 개선

---

#### 개발한 기능 및 페이지
- 상품 상세페이지 상품 리스트 데이터 출력 로직 수정  
  - 문제 : 데이터 출력이 안되는 문제 발생
  - 해결 방법 : 불필요한 변수를 제거하고 API를 State에 저장하여 불변성 유지
  - 배운 것 : React의 불변성의 중요함을 배웠습니다. 
- 상품 상세페이지 옵션 기능 UI 및 옵션 CRUD 기능 추가 및 API 연동
  - 문제 : 클릭 시 해당 옵션 체크하는 기능 구현 중 문제 발생
  - 해결 방법 : 객체 배열에 고유 key 값을 부여
  - 배운 것 : React-Bootstrap-Table 활용법, 데이터마다 고유한 옵션 부여 방법 
- 쿠폰 페이지 UI 수정
  - 배운 것 : 이미 구성된 Component 사용법 및 재활용 방법 
- 제품 형태(캡슐, 가루, 물약 등) 리스트 관리 페이지 추가
  - 페이지 추가 후 Router 연결
  - 제품 상세 모달 구현(수정, 생성)
  - 제품 형태 리스트 데이터 수정, 추가, 삭제 등 CRUD 구현 
- 제품 주문 현황 페이지 UI 및 로직 수정
  - React-bootstrap-table 라이브러리를 사용해 유저 데이터 출력 택배사 리스트 모달 UI 퍼블리싱
  - 제품 주문한 유저의 운송장, 택배사 수정 API 연동 및 배송추적 연동
  - 문제: 스마트 택배(스윗 트레커) API 연동 중 문제 발생
  - 해결 방법 : https://info.sweettracker.co.kr로 수정
  - 배운 것 : Open API의 http와 https 지원 여부확인
- 제품 주문-취소/교환/환불
  - 유저 결제방식에 따른 계좌번호, 예금주, 은행 데이터 출력 모달 UI 퍼블리싱 
  - 유저 결제 방식에 따라 적절한 데이터를 출력하고, 취소/교환/환불 처리를 위한 API 연동을 구현
      `,
  },
]

export const scroll: ThreeScrollPos[] = [
  {
    position: [1, -1, 1],
    scale: [0.8, 0.8, 0.8],
    rotation: [0, -0.6, 0],
  },
  {
    position: [0, -1, 0],
    scale: [0.8, 0.8, 0.8],
    rotation: [0, 0, 0],
  },
  {
    position: [0, 0.5, 0],
    scale: [0.7, 0.7, 0.7],
    rotation: [0, -1, 0],
  },
  {
    position: [0, -1, -1],
    scale: [1, 1, 2],
    rotation: [0, 0, 0],
  },
  {
    position: [-0.5, 0, 0],
    scale: [1, 1, 1],
    rotation: [1, 1, -1],
  },
  {
    position: [-1, 1, 1],
    scale: [0.7, 0.7, 0.7],
    rotation: [0, 0, 0],
  },
  {
    position: [0, 0.5, 0],
    scale: [0.4, 0.4, 0.4],
    rotation: [1, 0, 0],
  },
]

export const timeLineItem: TimeLineItem[] = [
  {
    title: '(주)성보산업 입사',
    date: {
      start: '2014/08',
      end: '',
    },
    description: '고등학교 3학년 여름에 산업체로 취업을 나갔습니다.',
    last: false,
  },
  {
    title: '대전 공업고등학교 졸업',
    date: {
      start: '2015/02',
      end: '',
    },
    description: '산업체에서 복무하면서 대전 공업고등학교 졸업하였습니다',
    last: false,
  },
  {
    title: '(주)성보산업 산업체 대체복무 완료',
    date: {
      start: '2019/05',
      end: '',
    },
    description: '약 5년간에 산업체 대체복무 후 개발자가 되기위해 퇴사하였습니다.',
    last: false,
  },
  {
    title: '아르바이트(인테리어, 목공)',
    date: {
      start: '2022/07',
      end: '2022/11',
    },
    description:
      '컴퓨터 학원을 다니면서 생활비 수급 목적으로 아르바이트를 하였습니다. 하지만 학원에서 너무 많은 분야(C, C#, Python, Java, Spring, JavaScript, MySQL .....)를 단기에 가르쳐 주었기에 비전공자 아무것도 이해하지 못하고 중간에 그만두었습니다.',
    last: false,
  },
  {
    title: '패스트 캠퍼스 프론트앤드 개발자 완주반 수료',
    date: {
      start: '2021/02',
      end: '2021/04',
    },
    description:
      '학원에서 알게된 것 중 JavaScript가 여러 분야(Web, App, Server, DB)에서 사용할 수 있다는 게 마음에 들어서 JavaScript를 공부하기 시작했습니다.',
    last: false,
  },
  {
    title: 'SoftSquared 라이징캠프 2기 웹과정 수료',
    date: {
      start: '2021/10',
      end: '2021/12',
    },
    description:
      '다른 아르바이트를 하며 혼자 공부하는 것에 벽을 느껴 SoftSquared의 웹 과정을 신청해 React를 집중적으로 공부하였습니다.',
    last: false,
  },
  {
    title: '건설 근로자(배관공)',
    date: {
      start: '2021/12',
      end: '2022/10',
    },
    description: '생활비를 벌기 위해 한동안 건설 현장에서 배관공 보조로 근무하였습니다.',
    last: false,
  },
  {
    title: '첫 외주 개발( Pettick )',
    date: {
      start: '2022/05',
      end: '2022/08',
    },
    description:
      '2021년 웹 과정을 공부한 SoftSquared에서 React 외주 개발 인원 모집 글을 보고 신청 후 합격하여 낮에는 건설 현장에서 일하면서 퇴근 후 Pettick(애완동물 사료, 용품, 간식 등 애완동물 관련 쇼핑몰)의  Admin Page의 기능 구현(추가, 수정)을 하였습니다.',
    last: false,
  },
  {
    title: '두번째 외주 개발( (주)OKPOS )',
    date: {
      start: '2022/10',
      end: '2022/04',
    },
    description:
      '취업 준비를 위해 아르바이트로 그만두자 첫 외주 개발을 진행했던 SoftSquared에서 프로젝트 참여 연락이와 OKPOS의  두 번째 외주 개발을 진행했었습니다.',
    last: true,
  },
]
