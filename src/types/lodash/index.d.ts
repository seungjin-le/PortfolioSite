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
    color?: string
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

  export interface SkillTagProps {
    name: string
    color?: string
  }
  export interface SkillListProps {
    title: string
    index: number
    onClick: (key: any) => void
  }

  export interface DescriptionMarkdownProps {
    description: string
  }
  export interface ProjectItemProps {
    company: string
    logo?: string
    projectName: string
    date: {
      start: string
      end: string
    }
    projectType: string
    team: {
      front: number
      back: number
    }
    skills: string[]
    description: string
  }
  export interface ProjectDescriptionProps {
    item: ProjectItemProps
    setScrollTop: Dispatch<SetStateAction<boolean>>
    setScrollBottom: Dispatch<SetStateAction<boolean>>
    setScrollBtnClick: Dispatch<SetStateAction<string>>
    scrollBtnClick: string
  }

  export interface SectionNumProps {
    sectionNum: number
  }

  export type CustomScrollPageProps = {
    gradientDirection: true | false
  }
}
