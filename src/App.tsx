import React from 'react'
import MainLayout from './container/layout/MainLayout'
import MainPage from './pages/home/MainPage'
import CustomScrollBar from './components/scroll/CustomScrollBar'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/*' element={<MainPage />} />
      </Routes>
      <CustomScrollBar />
    </MainLayout>
  )
}

export default App
