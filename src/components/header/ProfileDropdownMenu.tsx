import React from 'react'
import {Dropdown, MenuProps, Typography} from 'antd'
import styled from 'styled-components'

const ProfileDropdownMenu = () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <ListItem level={5} style={{margin: 0}} onClick={() => window.open('https://github.com/seungjin-le')}>
          GitHub
        </ListItem>
      ),
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <ListItem level={5} style={{margin: 0}} onClick={() => window.open('https://seungjin-le.github.io/')}>
          Blog
        </ListItem>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <ListItem level={5} style={{margin: 0}} onClick={() => window.open('https://realdeveloper.pro/bibbibig')}>
          Resume
        </ListItem>
      ),
      key: '2',
    },
  ]
  return (
    <CustomAntdDropdown menu={{items}} trigger={['click']} placement='bottomRight'>
      <Btn className='ham-menu'>
        <span className='line line1' />
        <span className='line line2' />
        <span className='line line3' />
      </Btn>
    </CustomAntdDropdown>
  )
}

export default ProfileDropdownMenu

const CustomAntdDropdown = styled(Dropdown)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  &.ant-dropdown-open {
    .line1 {
      display: block;
      transform: translateX(21%) rotate(45deg);
    }
    .line2 {
      opacity: 0;
    }
    .line3 {
      display: block;
      transform: translateX(21%) rotate(-45deg);
    }
  }
`
const Btn = styled('div')`
  height: 3rem;
  width: 3rem;
  top: 8rem;
  left: 8rem;
  padding: 0.5rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border-radius: 50%;
  cursor: pointer;
  & .line {
    background-color: #eee;
    border-radius: 1em;
    width: 2rem;
    height: 0.25rem;
  }

  & .line1 {
    transform-origin: 0% 0%;
    transition: transform 200ms ease-in-out;
  }

  & .line3 {
    transform-origin: 0% 100%;
    transition: transform 200ms ease-in-out;
  }
`
const ListItem = styled(Typography.Title)`
  padding: 0.3rem 1rem;
`
