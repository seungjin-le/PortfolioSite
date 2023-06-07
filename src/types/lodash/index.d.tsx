import {ReactNode} from 'react'

// lodash 모듈의 타입 선언 확장
declare module 'lodash' {
  // 페이지 레이아웃 타입 정의
  export interface PageLayoutProps {
    children: ReactNode
  }
  export interface HeaderTitleProps {
    title: string
  }
}
