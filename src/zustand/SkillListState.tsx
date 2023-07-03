import create from 'zustand'

interface SkillState {
  activeIndex: number
  // eslint-disable-next-line no-unused-vars
  setActiveIndex: (index: number) => void
}

const SkillListState = create<SkillState>(set => ({
  activeIndex: 0,
  setActiveIndex: index => set(() => ({activeIndex: index})),
}))

export default SkillListState
