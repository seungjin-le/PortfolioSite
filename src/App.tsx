import MainLayout from './container/layout/MainLayout'
import MainPage from './pages/home/MainPage'
import CustomScrollBar from './components/scroll/CustomScrollBar'
import {Route, Routes} from 'react-router-dom'
import 'styles/tailwind.css'
import ProjectsPage from 'pages/home/ProjectsPage'

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/*' element={<MainPage />} />
      </Routes>
      <CustomScrollBar />
    </MainLayout>
  )
}

export default App
