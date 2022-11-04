import React, { useState } from 'react'
import {  Outlet, useNavigate } from 'react-router-dom';
// mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Movies() {
  const navigate = useNavigate()
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/main/movies/allmovies')
    } else {
      navigate('/main/movies/addmovie')
    }
  };

  return (
    <div className=''>
      <Box sx={{ width: '100%' }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where each tab needs to be selected manually">
          <Tab label="All Movies" />
          <Tab label="Add movie" />
        </Tabs>
      </Box>
      <Outlet />
    </div>
  )
}

export default Movies