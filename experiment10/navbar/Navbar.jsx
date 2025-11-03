import { assets } from '../../assets/frontend_assets/assets'
import React, { useContext } from 'react'
import './Navbar.css'
import About from '../About/About'
import { Link } from 'react-router-dom'
import Login from '../loginpop/Login'
import { Storecontext } from '../../context/Storecontext'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = React.useState("home");
    const {getTotalCartAmount}= React.useContext(Storecontext);
  return (
    <div className='navbar'>
        <img src={assets.logo5} alt="Logo" className='logo' />
        <ul className='navbar-menu'>
            <Link to="/" onClick={()=>setMenu("Home")}  className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#appdown' onClick={()=>setMenu("My-Cart")} className={menu==="My-Cart"?"active":""}>My-cart</a>
            <a href='#footer' onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact-us</a>
            <a href="#about"onClick={()=>setMenu("About-Us")} className={menu==="About-Us"?"active":""} > About-Us </a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} className="search" alt="" />
            <div className='navbar-search-icon'>
                <Link to='/cart'><img src={assets.basket_icon} className='basket' alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}
export default Navbar