import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_date:"",
    Typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGU1ZTQzNWNjMTkwMGMwYTVhYTQ3MmY1OTFhNWM1ZSIsIm5iZiI6MTcxOTU4MzY4MC41NjkzNDMsInN1YiI6IjY2N2VjMWViYjFhYmU0NmUwYjJhNzAxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6MvaADujXw1T8waN2dCl0iT3LoUMzgYhUn0gRx4Wmgo'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  })


  return (
    <div className='player'>
      <img src={back_arrow} onClick={()=>navigate(-2)} alt="" />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height='90%' title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_date}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player
