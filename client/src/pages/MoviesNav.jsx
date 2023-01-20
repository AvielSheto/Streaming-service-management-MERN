import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function MoviesNav() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/main/moviesnav/movies')
    } else {
      navigate('/main/moviesnav/addmovie')
    }
  };

  return (
    <>
      <div className='d-flex justify-content-center'>
        <Box className='col-11 col-md-10 '>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where each tab needs to be selected manually">
            <Tab label="All Movies" />
            <Tab label="Add movie" />
          </Tabs>
        </Box>
      </div>
      <Outlet />
    </>
  )
}

export default MoviesNav;