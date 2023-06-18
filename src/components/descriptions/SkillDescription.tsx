import {styled} from 'styled-components'
import React, {memo} from 'react'
import {SkillListProps} from 'lodash'
import CursorPointer from '../cursor/CursorPointer'

const SkillDescription = ({title, index, onClick}: SkillListProps) => {
  return (
    <CustomAntdCollapseBox onClick={() => onClick(index)}>
      <CursorPointer />
      <p>{title}</p>
    </CustomAntdCollapseBox>
  )
}

export default memo(SkillDescription)

const CustomAntdCollapseBox = styled.div`
  position: relative;
  background: rgba(53, 53, 53, 0.5);
  font-size: 1rem;
  border-radius: 1rem;
  padding: 1.5rem;
  border: none;
  width: 100%;
  cursor: pointer;
  transition: 0.3s !important;
  max-width: 200px;
  text-align: center;
  width: 100%;
  margin: 1rem;
  color: #5d5d5d;
  font-size: 1.3rem;
`
