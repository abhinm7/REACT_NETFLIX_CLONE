import React, { useState } from 'react'
import './Login.css'
import logo from '/logo.png'

const Login = () => {
  const [signState,setSignState]=useState("Sign In");
  return (
    <div className='login'>
      <img src={logo} alt="" className="login-logo"/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState==='Sign Up'?<input type="text" placeholder='Your name' />:<></>}
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
            <input type="checkbox" />
             <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
            <div className="form-switch">
              {
              signState==="Sign In"
              ?<p>New to Netflix?<span onClick={()=>{
                setSignState("Sign Up")
              }}>Sign up</span></p>
              :<p>Already have an account?<span onClick={()=>{
                setSignState("Sign In")
              }}>Sign in</span></p>
              }
              
             
            </div>
      </div>
    </div>
  )
}

export default Login
