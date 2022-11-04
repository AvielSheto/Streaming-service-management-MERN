import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
// mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ManageUsers() {
  const navigate = useNavigate()
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/main/usermangement/users')
    } else {
      navigate('/main/usermangement/adduser')
    }
  };

  return (
    <div className=''>
      <Box sx={{ width: '100%' }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where each tab needs to be selected manually">
          <Tab label="All Users" />
          <Tab label="Add User" />
        </Tabs>
      </Box>
      <Outlet />
    </div>
  )
}
