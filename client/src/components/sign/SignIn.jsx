import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'


import axios from 'axios';
import './_sign.scss'

// mui
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinkMui from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SignIn() {
  // const [DBusers, setUsers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = formData;
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get('http://localhost:8000/users');
  //     setUsers(res.data);
  //   }
  //   fetchData()
  // }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (password) {
      
    }
    setFormData({ username: data.get('userName'), password: data.get('password') })
  };

  return (
    <Container className='form p-5 my-4' maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {showAlert && <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">User name or password not correct</Alert>
          </Stack>}
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User name"
            name="userName"
            autoComplete="userName"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
          <Grid container>
            <Grid item xs>
              <LinkMui href="#" variant="body2">
                Forgot password?
              </LinkMui>
            </Grid>
            <Grid item>
              <Link to={'/signUp'}>Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}