import React from 'react'
import './Login.css'
import { assets } from '../../assets/frontend_assets/assets';

const Login = ({setShowLogin}) => {
    const [currentState,setCurrentState] = React.useState("Sign-Up");
  return (
    <div className='login'>
       <form action="" className='login-container'>
        <div className="login-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
            {currentState==="Login"?<></>: <input type="text" placeholder='Your name' required/>}
            <input type="text" placeholder='Your email' required/>
            <input type="text" placeholder='Password' required/>

        </div>
        <button>{currentState==="Sign-Up"?"Create account":"Login"}</button>
        <div className='login-condition'>
            <input type="checkbox" required/>
            <p>By continuing,I agree to the terms of use and privacy policy.</p>
        </div>
        {currentState==="Login"? <p>Create a new account?
             <span onClick={()=>setCurrentState("Sign-Up")}>Click Here</span></p> :<p>Already have an account ? 
                <span onClick={()=> setCurrentState("Login")}>Login here</span></p>
                }
       
        
       </form>
    </div>
  )
}
export default Login