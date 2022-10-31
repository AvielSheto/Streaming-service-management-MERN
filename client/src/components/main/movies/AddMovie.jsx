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
import Autocomplete from '@mui/material/Autocomplete';

function AddMovie() {
  const [formData, setFormData] = useState({
    name: '',
    genres: [],
    image: '',
    premiered: ''
  })

  const { name, genres, image, premiered } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const movieData = {
      name,
      genres,
      image,
      premiered
    }
    console.log(movieData);
  }

  const addGenres = (value) => {
    // console.log(value.InputProps.startAdornment[0].props.label);
  }

  const allGenres = [
    { title: 'Drama' },
    { title: 'Science-Fiction' },
    { title: 'Thriller' },
    { title: 'Action' },
    { title: 'Crime' },
    { title: 'Horror' },
    { title: 'Romance' },
    { title: 'Adventure' },
    { title: 'Espionage' },
    { title: 'Music' },
    { title: 'Mystery' },
  ];

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
          <h1 className='display-3'>Add Movie</h1>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
              onChange={onChange}
              value={name}
              autoComplete="name"
            />
            <Autocomplete
              multiple
              id="size-small-standard-multi"

              options={allGenres}
              getOptionLabel={(option) => option.title}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  onChange={addGenres(params)}
                  required
                  id="genres"
                  value={genres}
                  name="genres"
                  {...params}
                  label="Genres"
                />
              )}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image URL"
              type="text"
              id="image"
              onChange={onChange}
              autoComplete="image"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="premiered"
              label="Premiered"
              type="text"
              id="premiered"
              onChange={onChange}
              value={premiered}
              autoComplete="premiered"
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

export default AddMovie