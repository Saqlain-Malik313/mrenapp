import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Sign from './pages/Sign'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Error from './pages/Error'
import Logout from './pages/Logout'
import Profile from './pages/Profile'

const App = () => {
  return <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Sign/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='*' element={<Error/>}/>        
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
}
export default App
