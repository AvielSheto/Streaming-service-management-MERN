import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../home/_home.scss'

function Home() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      navigate('/main/movies/allmovies')
    }

  }, [user, navigate]);

  return (
    <div className='home'>Home</div>
  )
}

export default Home