import React from 'react'
import "./Footer.css"
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
      </div>
      <ul>
        <li>Audio decsription</li>
        <li>Help center</li>
        <li>gift cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>privacy</li>
        <li>Legal notes</li>
        <li>Cookies preference</li>
        <li>Corporate information</li>
        <li>Contact us</li>
      </ul>
      <p className="copyright-text">
        @netflix-1990 all rights reserved
      </p>
    </div>
  )
}

export default Footer
