import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

  const navref = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navref.current.classList.add('nav-dark');
      }
      else{
          navref.current.classList.remove('nav-dark');
      }
    })
  })

  return (
    <div ref={navref} className='navbar'>

      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>Home</ul>
        <ul>TV Shows</ul>
        <ul>Movies</ul>
        <ul>New and Popular</ul>
        <ul>My List</ul>
        <ul>Browse By Languages</ul>
      </div>

      <div className="navbar-right">
       <img src={searchIcon} alt="" className='icons' />
         <p>Children</p>
       <img src={bell} alt="" className='icons' />
       <div className="navbar-profile">
       <img src={profile_icon} alt="" className='profile'/>
       <img src={caret} alt=""  />
       <div className="dropDown">
        <p onClick={()=>{logout()}}>Sign out of Netflix</p>
       </div>
       </div>
      </div>

    </div>
  )
}

export default Navbar
