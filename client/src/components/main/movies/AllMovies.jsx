import React, { useState, useEffect } from 'react'
import axios from 'axios'
// Mui 
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function AllMovies() {
  const [movies, setMovies] = useState()
  const [search, setSearch] = useState()

  const MOVIES_URL = 'http://localhost:5000/api/movies';

  const getMovies = async () => {
    const { data } = await axios.get(MOVIES_URL);
    setMovies(data)
  }

  useEffect(() => {
    getMovies()
  }, [])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <TextField onChange={(e) => { setSearch(e.target.value) }} className='my-2' id="outlined-basic" label='Find Movie: ' variant="outlined" size="small" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {movies?.filter(filtered => {
            if (search === undefined) {
              return filtered
            }
            else{
              return filtered?.name.toLowerCase().startsWith(search.toLowerCase())
            }
          }).map((movie) => {
            return (
              <Grid item xs={2} sm={3} md={3} key={movie._id}>
                <Item>
                  <div key={movie._id}>
                    <h1 className='display-6 fs-3'>{movie.name}</h1>
                    <h1 className='display-6 fs-6 fw-normal float-start'><strong className='fs-5 fw-light'>premiered: </strong>{movie.premiered}</h1>
                    <h1 className='display-6 fs-6 fw-normal float-start'><strong className='fs-5 fw-light'>genres: </strong>{movie.genres.join()}</h1>
                    <img src={movie.image} alt="show" />
                  </div>
                  <ButtonGroup className='my-2' variant="text" aria-label="text button group">
                    <Button> <EditIcon /></Button>
                    <Button>  <DeleteIcon /></Button>
                  </ButtonGroup>
                </Item>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </div>)
}

export default AllMovies