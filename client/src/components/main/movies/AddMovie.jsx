import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createMovie, reset } from '../../../features/movie/movieSlice';
import { toast } from 'react-toastify';
import Loading from '../../loading/Loading';
// mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';

function AddMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    genres: [],
    image: '',
    premiered: ''
  });
  const { name, genres, image, premiered } = formData;

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.movie
  )

  // Add movie
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate('/main/moviesnav/movies');
    }

    dispatch(reset())
  }, [isError, isSuccess, message, navigate, dispatch]);


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      name,
      genres,
      image,
      premiered
    }
    dispatch(createMovie(movieData));
  };

  const addGenres = (value) => {
    genres.length = 0
    {
      value.InputProps.startAdornment?.map((genre) => {
        return (
          genres.push(genre.props.label)
        )
      })
    }
  };

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

  if (isLoading) {
    return <Loading />
  };

  return (
    <Container maxWidth="xs">
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
            options={allGenres}
            filterSelectedOptions
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                required
                onChange={addGenres({ ...params })}
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
            value={image}
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
  )
}

export default AddMovie;


