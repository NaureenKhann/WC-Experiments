import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div className='appdown' id='appdown'>
    <p>For Better Experience Download <br />PlateUp App</p>
    <div className='appdown-platform'>
    <img src={assets.play_store} alt="" />
    <img src={assets.app_store} alt="" /> 
    </div>
    </div>
  )
}

export default AppDownload