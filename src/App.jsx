import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HomePages from './pages/home/HomePages'
import PhonesPage from './pages/category/PhonesPage'
import EarbudsPage from './pages/category/EarbudsPage'
import WatchesPage from './pages/category/WatchesPage'
import AccessoriesPage from './pages/collection/accessories/AccessoriesPage'
import Footer from './components/footer/Footer'
import './App.css'

function App() {

  return (
    <>
    <Navbar/>

      <Routes>

      <Route path="/" element={<HomePages />} />
      <Route path="/phones" element={<PhonesPage/>} />
      <Route path="/earbuds" element={<EarbudsPage/>} />
      <Route path="/watches_trackers" element={<WatchesPage/>} />
      <Route path="/accessories_wall" element={<AccessoriesPage/>} />

      </Routes> 

    <Footer/>
  
    </>
  )
}

export default App
