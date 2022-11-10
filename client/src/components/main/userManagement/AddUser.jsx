import React from 'react'
import { useState, useEffect } from 'react'
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


function AddUser() {
  const [session, setSession] = useState(dayjs('2022-04-07'));
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    viewSubscription: false,
    createSubscription: false,
    deleteSubscription: false,
    updateSubscription: false,
    viewMovie: false,
    createMovie: false,
    deleteMovie: false,
    updateMovie: false,
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };

  const { firstName, lastName, userName, viewSubscription, createSubscription, deleteSubscription, updateSubscription, viewMovie, createMovie, deleteMovie, updateMovie } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const sessionTime = session.$m
    const userData = {
      firstName,
      lastName,
      userName,
      sessionTime,
      viewSubscription,
      createSubscription,
      deleteSubscription,
      updateSubscription,
      viewMovie,
      createMovie,
      deleteMovie,
      updateMovie
    }
    console.log(userData);
  }

  return (
    <div>
      <Container className='form' maxWidth="xs">
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <h1 className='display-3'>Add User</h1>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="firstName"
              label="First Name"
              type="text"
              onChange={onChange}
              value={firstName}
              autoComplete="firstName"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              type="text"
              onChange={onChange}
              value={lastName}
              autoComplete="lastName"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="userName"
              label="User Name"
              type="text"
              onChange={onChange}
              value={userName}
              autoComplete="userName"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack className='mt-3'>
                <TimePicker
                  ampmInClock
                  views={["minutes"]}
                  inputFormat="mm"
                  mask="__"
                  label="Session time out (Minutes)"
                  value={session}
                  name="sessionTime"
                  onChange={(newValue) => {
                    setSession(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <h1 className='display-6 fs-2 mt-1'>Permissions</h1>
            <div>
              <FormControl component="fieldset" variant="standard">
                <FormGroup >
                  <div className='d-flex'>
                    <div className='d-flex flex-column'>
                      <FormControlLabel
                        control={
                          <Switch checked={formData.viewSubscription} onChange={handleChange} name="viewSubscription" />
                        }
                        label="View Subscription"
                      />
                      <FormControlLabel
                        control={
                          <Switch checked={formData.createSubscription} onChange={handleChange} name="createSubscription" />
                        }
                        label="Create Subscription"
                      />
                      <FormControlLabel
                        control={
                          <Switch checked={formData.deleteSubscription} onChange={handleChange} name="deleteSubscription" />
                        }
                        label="Delete Subscription"
                      />
                      <FormControlLabel
                        control={
                          <Switch checked={formData.updateSubscription} onChange={handleChange} name="updateSubscription" />
                        }
                        label="Update Subscription"
                      />
                    </div>

                    <div className='d-flex flex-column'>
                      <FormControlLabel
                        control={
                          <Switch checked={formData.viewMovie} onChange={handleChange} name="viewMovie" />
                        }
                        label="View Movie"
                      />
                      <FormControlLabel
                        control={
                          <Switch checked={formData.createMovie} onChange={handleChange} name="createMovie" />
                        }
                        label="Create Movie"
                      />
                      <FormControlLabel
                        control={
                          <Switch checked={formData.deleteMovie} onChange={handleChange} name="deleteMovie" />
                        }
                        label="Delete Movie"
                      />
                      <FormControlLabel
                        control={
                          <Switch checked={formData.updateMovie} onChange={handleChange} name="updateMovie" />
                        }
                        label="Update Movie"
                      />
                    </div>
                  </div>
                </FormGroup>
              </FormControl>
            </div>

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Add User</Button>
            <Grid container>

            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default AddUser