import {Dispatch, ReactNode, SetStateAction} from 'react'

declare module 'TagCloud' {
  // 타입 선언 내용
}

// lodash 모듈의 타입 선언 확장
declare module 'lodash' {
  // 페이지 레이아웃 타입 정의
  export interface PageLayoutProps {
    children: ReactNode
  }
  export interface TitleProps {
    title: string
    level?: 1 | 5 | 2 | 3 | 4 | undefined
  }
  export interface SectionFlexBoxProps {
    title: string
    left: ReactNode
    right: ReactNode
  }
  export interface TagItem {
    title: string
    description: string
  }
  export interface ModalProps {
    item?: TagItem
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
  }
  export interface SliderImageProps {
    src: string | undefined
    alt: string | undefined
  }
  export type CustomScrollPageProps = {
    gradientDirection: true | false
  }
}
