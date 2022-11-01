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


function AddUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: ''
  })

  const { firstName, lastName, userName, } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const movieData = {
      firstName,
      lastName,
      userName
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
          <h1 className='display-3'>Add User</h1>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="firsName"
              label="First Name"
              type="text"
              id="firsName"
              onChange={onChange}
              value={firstName}
              autoComplete="firsName"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="LastName"
              label="First Name"
              type="text"
              id="LastName"
              onChange={onChange}
              value={lastName}
              autoComplete="LastName"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="userName"
              label="User Name"
              type="text"
              id="userName"
              onChange={onChange}
              value={userName}
              autoComplete="userName"
            />



            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Add Movie</Button>
            <Grid container>

            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default AddUser