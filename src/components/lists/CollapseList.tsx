import React from 'react'
import {Collapse} from 'antd'
import {CollapseListItem} from '../../utility/listItems'

const CollapseList = () => {
  return <Collapse accordion={true} items={CollapseListItem} />
}

export default CollapseList
