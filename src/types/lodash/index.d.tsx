import {ReactNode} from 'react'

declare module 'TagCloud' {
  // 타입 선언 내용
}

// lodash 모듈의 타입 선언 확장
declare module 'lodash' {
  // 페이지 레이아웃 타입 정의
  export interface PageLayoutProps {
    children: ReactNode
  }
  export interface HeaderTitleProps {
    title: string
  }
  export interface SectionFlexBoxProps {
    title: string
    left: ReactNode
    right: ReactNode
  }
  export type CustomScrollPageProps = {
    gradientDirection: true | false
  }
}
