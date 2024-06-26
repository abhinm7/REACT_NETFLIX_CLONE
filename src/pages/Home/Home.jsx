import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '/hero_banner.jpg'
import hero_title from '/hero_title.png'
import play_icon from '/play_icon.png'
import info_icon from '/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-image'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quos harum nisi, corrupti obcaecati hic! Harum error quibusdam consectetur nisi</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards category={"now_playing"}/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Only on netflix"} category={"top_rated"}/>
      <TitleCards title={"Tops picks for you"} category={"popular"}/>
      <TitleCards title={"BlockBuster"} category={"upcoming"}/>
      <TitleCards title={"Upcoming"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
