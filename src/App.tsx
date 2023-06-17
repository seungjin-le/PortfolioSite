import React from 'react'
import MainLayout from './container/layout/MainLayout'
import MainPage from './pages/home/MainPage'
import CustomScrollBar from './components/scroll/CustomScrollBar'

function App() {
  return (
    <MainLayout>
      <MainPage />
      <CustomScrollBar />
    </MainLayout>
  )
}

export default App
