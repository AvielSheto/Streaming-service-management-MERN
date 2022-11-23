import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Movie from './Movie';
import Loading from '../../loading/Loading';
import "./_movies.scss";
import { getMovies, reset } from '../../../features/movie/movieSlice';
import { toast } from 'react-toastify'
// Mui 
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// bootstrap
import Row from 'react-bootstrap/Row';

function AllMovies() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState();

  const { movies, isLoading, isError, message } = useSelector(
    (state) => state.movie
  )

  const restSearch = (obj) => {
    setSearch(obj);
  }

  useEffect(() => {
    dispatch(getMovies());

    if (isError) {
      toast.error(message);
    }
    
    return () => {
      dispatch(reset())
    }

  }, [isError, message, navigate, dispatch]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className='d-flex justify-content-center my-3'>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search movie name"
            inputProps={{ 'aria-label': 'search google maps' }}
            value={search}
            onChange={(e) => { setSearch(e.target.value) }} />
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
                <Movie key={movie._id} movie={movie} callback={(searchRest) => restSearch(searchRest)} />
              )
            })}
          </Row>
        </div>
      </div>
    </>
  )
}

export default AllMovies