import React, { useState } from 'react'
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios'
// mui
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

export default function Home() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [management, setManagement] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const getPermissions = async () => {
    const { data } = await axios.get('http://localhost:5000/permissions/' + user._id);
    if (data.permissions.includes('users management')) {
      setManagement(true)
    }
  }

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    getPermissions()
  }, [user, navigate]);

  return (
    <div className='pt-2'>
      <div className='d-flex justify-content-center'>
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              if (newValue === 0) {
                navigate('/main/movies/allmovies')
              } else if (newValue === 1) {
                navigate('/main/subscription/members')
              } else {
                navigate('/main/usermangement/users')
              }
            }}>
            <BottomNavigationAction label="Movies" icon={<MovieCreationOutlinedIcon />} />
            <BottomNavigationAction label="Subscriptions" icon={<SubscriptionsOutlinedIcon />} />
            {management && <BottomNavigationAction label="User Management" icon={<ManageAccountsOutlinedIcon />} />}
          </BottomNavigation>
        </Box>
      </div>
      <Outlet />
    </div>
  )
}
