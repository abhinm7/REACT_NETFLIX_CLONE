import React, { useState } from 'react'
import './Login.css'
import logo from '/logo.png'
import { login,signup } from '../../firebase'
import netflix_spinner from '/netflix_spinner.gif'

const Login = () => {

  const [signState,setSignState]=useState("Sign In");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setloading] = useState(false);

  const user_auth = async(event)=>{
     event.preventDefault();
     setloading(true);
     if(signState==='Sign In'){
      await login(email,password);
     }else{
      await signup(name,email,password);
     }
     setloading(false);
  }


  return (
    loading?
    <div className="loading-spinner">
      <img src={netflix_spinner} alt="" />
    </div>: 
    
    <div className='login'>
      <img src={logo} alt="" className="login-logo"/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState==='Sign Up'?

          <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your name' />:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='email' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password' />

          <button type='submit' onClick={user_auth}>{signState}</button>
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
