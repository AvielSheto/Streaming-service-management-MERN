import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
// mui
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Movies() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where each tab needs to be selected manually"
        >
          <Tab label="All Movies" />
          {/* href="/main/movies/allmovies" */}
          <Tab label="Add movie" />
          {/* href="/main/movies/addmovie" */}
        </Tabs>
      </Box>


      <Outlet />
    </div>
  )
}

export default Movies