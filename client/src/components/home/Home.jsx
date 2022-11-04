import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../home/_home.scss'
// mui 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Home() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      navigate('/main/movies/allmovies')
    }

  }, [user, navigate]);

  return (
    <div>

      <div className='home d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex flex-column align-items-center col-10 col-md-6'>
          <h1 className='display-1 fw-normal text-white text-center'>Unlimited movies, TV shows, and more.</h1>
          <h3 className='display-6 fw-normal text-white text-center'>Watch anywhere. Cancel anytime.</h3>
          <h6 className='display-6 fs-4 fw-normal text-white text-center'>Ready to watch? Enter your email to create or restart your membership.</h6>
          <div className='d-flex flex-column align-items-center col-6'>
            <TextField
              className='bg-light'
              variant="filled"
              margin="normal"
              required
              size='small'
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              // onChange={onChange}
              // value={email}
              autoComplete="current-email"
            />
            <Button variant="contained" color='error' className='col-8'>Get Started</Button>
          </div>
        </div>
      </div>


      <div className='home-main d-flex flex-column justify-content-center pt-5'>

        <h1 className='display-4 fw-normal text-white text-center'>Enjoy on your TV.</h1>

        <h1 className='display-6 fw-normal text-white text-center'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h1>

        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />





      </div>






    </div>
  )
}

export default Home