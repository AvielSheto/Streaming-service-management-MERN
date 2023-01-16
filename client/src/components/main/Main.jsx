import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../style/_main.scss';
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
  const [subscriptions, setSubscriptions] = useState(false);
  const [movies, setMovies] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const getPermissions = async () => {
    const { data } = await axios.get("https://netflix-server.onrender.com"+"/permissions/"+ user._id);
    if (data.permissions.userManagement === true) {
      setManagement(true)
    };
    if (data.permissions.updateSubscription === true) {
      setSubscriptions(true)
    };
    if (data.permissions.updateMovie === true) {
      setMovies(true)
    };
  };

  useEffect(() => {
    getPermissions()
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('')
    }
  }, [user, navigate]);

  return (
    <div className='pt-1'>
      <div className='d-flex justify-content-center'>
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              if (newValue === 0) {
                navigate('/main/moviesnav/movies')
              } else if (newValue === 1) {
                navigate('/main/subscriptionsnav/subscriptions')
              } else {
                navigate('/main/usermanagement/managementnav/users')
              }
            }}>
            {movies && <BottomNavigationAction label="Movies" icon={<MovieCreationOutlinedIcon />} />}
            {subscriptions && <BottomNavigationAction label="Subscriptions" icon={<SubscriptionsOutlinedIcon />} />}
            {management && <BottomNavigationAction label="User Management" icon={<ManageAccountsOutlinedIcon />} />}
          </BottomNavigation>
        </Box>
      </div>
      <div className='d-flex justify-content-center'>
        <hr className='col-11 col-md-10 text-center m-1' />
      </div>
      <Outlet />
    </div>
  )
}
