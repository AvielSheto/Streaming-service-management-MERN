import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { register, rest } from '../../features/auth/authSlice';
import Loading from './Loading';
// 
import axios from 'axios';
import * as React from 'react';
// mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Register() {
  // const [DBusers, setUsers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: ''
  });

  const { username, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(rest())
    if (isLoading) {
      return <Loading />
    }

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setFormData({ username: data.get('userName'), password: data.get('password'), password2: data.get('password2') })
    if (password !== password2) {
      toast.error('password do not match')
    } else {
      const userData = {
        username,
        password
      }
      dispatch(register(userData))
    }
  };

  return (
    <Container className='form p-5 my-4' maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {showAlert && <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">User name or password not correct</Alert>
          </Stack>}
          <Grid container spacing={2}>


            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userName"
                label="User name"
                name="userName"
                autoComplete="userName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password2"
                label="Password2"
                type="password"
                id="password2"
                autoComplete="new-password"
              />
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={'/signIn'}>Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}