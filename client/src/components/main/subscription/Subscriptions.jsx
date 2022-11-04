import React, { useState } from 'react'
import {  Outlet, useNavigate } from 'react-router-dom';
// mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Subscriptions() {
  const navigate = useNavigate()
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/main/subscription/members')
    } else {
      navigate('/main/subscription/addmember')
    }
  };

  return (
    <div className=''>
      <Box sx={{ width: '100%' }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where each tab needs to be selected manually">
          <Tab label="Members" />
          <Tab label="Add Member" />
        </Tabs>
      </Box>
      <Outlet />
    </div>
  )
}

export default Subscriptions