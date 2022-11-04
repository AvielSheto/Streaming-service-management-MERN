import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


function AddMember() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    city: '',
  })

  const { username, email, city,  } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      username,
      email,
      city,
    }
  }



  return (
    <div>
      <Container className='form' maxWidth="xs">
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <h1 className='display-3'>Add Member</h1>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="Full Name"
              type="text"
              id="username"
              onChange={onChange}
              value={username}
              autoComplete="username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="text"
              id="email"
              onChange={onChange}
              value={email}
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="city"
              label="City"
              type="text"
              id="city"
              onChange={onChange}
              value={city}
              autoComplete="city"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Add Member</Button>
            <Grid container>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default AddMember