import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/footer/Footer'
import Login from './components/loginpop/Login'
import About from './components/About/About'
const App = () => {
  const [showLogin,setShowLogin] = React.useState(false);
  return (
    <>
    {showLogin? <Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>
        <Route path='/aboutus-container' element={<About/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}
export default App