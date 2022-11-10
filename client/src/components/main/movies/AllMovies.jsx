import React, { useState, useEffect } from 'react';
import "./_movies.scss";
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getMovies, reset } from '../../../features/movie/movieSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../../loading/Loading';
// Mui 
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
// Search bar
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// Movie card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AllMovies() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState();

  const { movies, isLoading, isError, message } = useSelector(
    (state) => state.movie
  )

  useEffect(() => {
    dispatch(getMovies())

    if (isError) {
      console.log(message)
    }

    return () => {
      dispatch(reset())
    }
  }, [isError, message, navigate, dispatch])

  if (isLoading) {
    return <Loading />
  }

  const handleClick = (movieId, action) => {
    if (action === 'Edit') {
      navigate(`/main/editmovie/${movieId}`);
    }

    if (action === 'Delete') {
      dispatch(deleteMovie(movieId))
      setSearch('');
    }
  }

  const actions = [
    { icon: <EditIcon />, name: 'Edit' },
    { icon: <DeleteOutlineIcon />, name: 'Delete' },
  ];

  return (
    <>
      <div className='d-flex justify-content-center my-3'>

        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search movie name"
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={(e) => { setSearch(e.target.value) }}

          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>

        </Paper>

      </div>
      <div className='d-flex justify-content-center'>
        <div className='col-11 col-md-11'>
          <Row xs={2} md={3} lg={4}>
            {movies?.filter(filtered => {
              if (!search) {
                return filtered
              }
              else {
                return filtered?.name.toLowerCase().startsWith(search.toLowerCase())
              }
            }).map((movie) => {
              return (
                <Col key={movie._id}>
                  <Card className='m-1' >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image={movie.image}
                      height="200"
                    />
                    <CardContent sx={{ height: 140 }}>
                      <h1 className='display-6 fs-5 fw-normal'>{movie.name}</h1>
                      <h1 className='display-6 fs-6 fw-light'><strong className='fs-6 fw-normal'>premiered: </strong>{movie.premiered}</h1>
                      <h1 className='display-6 fs-6 fw-light'><strong className=''>genres: </strong>{movie.genres.join()}</h1>
                    </CardContent>
                    <CardActions>
                      <Box sx={{ height: 25, transform: 'translateZ(0px)', flexGrow: 1 }}>
                        <SpeedDial
                          ariaLabel="SpeedDial basic example"
                          sx={{ position: 'absolute', bottom: 2, right: 2 }}
                          icon={<SpeedDialIcon />}
                        >
                          {actions.map((action) => (
                            <SpeedDialAction
                              onClick={() => { handleClick(movie._id, action.name) }}
                              key={action.name}
                              icon={action.icon}
                              tooltipTitle={action.name}
                              id={movie.id}
                            />
                          ))}
                        </SpeedDial>
                      </Box>
                    </CardActions>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </>
  )
}

export default AllMovies