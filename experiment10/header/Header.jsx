import React from 'react'
import './Header.css'
import { assets } from '../../assets/frontend_assets/assets'

const Header = () => {
  return (
    <div className='header'>
    <div className='header-contents' >
       <h2>Canteen PreOrder System</h2>
       <p>Skip the Queue, Order Your Meal in Advance!</p>
       <button>View Menu</button>
    </div>
    </div>
  )
}

export default Header