import React from 'react'
import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// mui
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

export default function Home() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }

  }, [user, navigate])
  return (
    <div className='pt-2'>
      <div className='d-flex justify-content-center'>
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}>
              
            <BottomNavigationAction href='/main/movies/allmovies' label="Movies" icon={<MovieCreationOutlinedIcon />} />
            <BottomNavigationAction href='/main/subscription' label="Subscription" icon={<SubscriptionsOutlinedIcon />} />
            <BottomNavigationAction href='/main/usermangement/users' label="User Management" icon={<ManageAccountsOutlinedIcon />} />
          </BottomNavigation>
        </Box>
      </div>
      <Outlet />
    </div>
  )
}
