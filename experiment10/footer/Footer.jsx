import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo6}  className="logo" alt='logo' />
                <p>PlateUp — Your smart way to skip the queue and enjoy your meal fresh and fast.</p>
                <p>Your time matters. Skip the queue, not your meal</p>
        
                <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                   <h2>COMPANY</h2>
                   <ul>
                    <li>Home</li>
                    <li>About-Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                   </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>243-2232-434-343</li>
                    <li>contact@plateup.com </li>
                    <li>Anjuman Islams Kalsekar Technical Campus</li>
                    </ul>
            </div>
        </div>
        <hr />
        <p className="footer-cpy">
            Copyright 2025 @PlateUp.com - All Right 
        </p>
    </div>
  )
}

export default Footer