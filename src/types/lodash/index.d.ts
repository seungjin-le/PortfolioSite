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
  export interface AnimatorProps {
    children: ReactNode
    animation: ReactNode[] | Animation | any
  }
  export interface TitleProps {
    title: string
    size?: string | undefined
    color?: string
    margin?: string
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
    onClick: (index: any) => void
  }
  export interface SliderBtnProps {
    onClick: () => void
    direction: string
    className?: string
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
  export interface ProjectDescriptionSectionProps {
    item: ProjectItemProps
  }
  export interface SectionNumProps {
    sectionNum: number
  }
  export interface TimeLineItem {
    title: string
    date: {
      start: string
      end: string
    }
    description: string
    last: boolean
  }
  export interface TimeLineItemProps {
    item: TimeLineItem
  }

  export interface ThreeScrollPos {
    position: number[]
    scale: number[]
    rotation: number[]
  }

  export interface SiteItemProps {
    icon: string
    label: string
    image: string
    link: string
  }

  export interface SkillDirection {
    key: number
    label: string
    icons: string
    texts: string
  }

  export type CustomScrollPageProps = {
    gradientDirection: true | false
  }
}
