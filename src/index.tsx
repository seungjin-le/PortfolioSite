import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/antd.min.js.map'
import GlobalStyleStyled from 'styles/GlobalStyleStyled'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <GlobalStyleStyled />
    <App />
  </>,
)
