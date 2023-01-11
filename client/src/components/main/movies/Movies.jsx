import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSubscriptions } from '../../../features/subscription/subscriptionSlice';
import { getMovies, reset } from '../../../features/movie/movieSlice';
import { toast } from 'react-toastify';
import Loading from '../../loading/Loading';
import Movie from './Movie';
// Scss
import '../../../style/_movies.scss';
// Mui 
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// bootstrap
import Row from 'react-bootstrap/Row';

function Movies() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState();

  const { movies, isLoading, isError, message } = useSelector(
    (state) => state.movie
  )

  // Get movies
  useEffect(() => {
    dispatch(getMovies());

    if (isError) {
      toast.error(message);
    }

    return () => {
      dispatch(reset())
    }
  }, [dispatch, navigate]);

  // Get subscriptions
  const { subscriptions, isSubscriptionLoading, isSubscriptionError, subscriptionMessage, isSubscriptionSuccess } = useSelector(
    (state) => state.subscription
  );

  useEffect(() => {
    dispatch(getSubscriptions());
    
    if (isSubscriptionError) {
      toast.error(subscriptionMessage);
    }
  }, [isSubscriptionError, subscriptionMessage]);

  const restSearch = (obj) => {
    setSearch(obj);
  }

  if (isLoading || isSubscriptionLoading) {
    return <Loading />
  }

  return (
    <div className='movies'>
      <div className='d-flex justify-content-center mt-1'>
        <Paper
          component="form"
          sx={{ p: '2px 5px', display: 'flex', alignItems: 'center', width: 400, marginY: '10px', borderRadius: "25px" }}>
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
        <div className='col-11 col-md-10'>
          <Row xs={1} lg={2} >
            {movies?.filter(filtered => {
              if (!search) {
                return filtered
              }
              else {
                return filtered?.name.toLowerCase().startsWith(search.toLowerCase())
              }
            }).map((movie) => {
              return (
                <Movie key={movie._id} movie={movie} subscriptions={subscriptions.filter((subscription) => subscription.movie === movie.name)} callback={(searchRest) => restSearch(searchRest)} />
              )
            })}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Movies