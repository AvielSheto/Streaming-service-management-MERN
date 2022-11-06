import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./_movies.scss"
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../../features/movie/movieSlice'
// Mui 
import TextField from '@mui/material/TextField';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function AllMovies() {
  const dispatch = useDispatch()
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

  return (
    <div className=''>
      <div className='my-2'>
        <TextField onChange={(e) => { setSearch(e.target.value) }} label='Find Movie: ' variant="outlined" size="small" />
      </div>
      <div className='d-flex justify-content-center'>
        <div className='col-11 col-md-10'>
          <Row xs={2} md={4}>
            {movies?.filter(filtered => {
              if (search === undefined) {
                return filtered
              }
              else {
                return filtered?.name.toLowerCase().startsWith(search.toLowerCase())
              }
            }).map((movie) => {
              return (
                <Col className='movie p-2' key={movie._id}>
                  <div>
                    <DropdownButton title={<SettingsOutlinedIcon />} className='float-end m-0'>
                      <Dropdown.Item eventKey="1" href='/main/editmovie'>Edit</Dropdown.Item>
                      <Dropdown.Item onClick={() => dispatch(deleteMovie(movie._id))} eventKey="2">Delete</Dropdown.Item>
                    </DropdownButton>
                    <h1 className='display-6 fs-3'>{movie.name}</h1>
                    <h1 className='display-6 fs-6 fw-light float-start'><strong className='fs-5 fw-light'>premiered: </strong>{movie.premiered}</h1>
                    <h1 className='display-6 fs-6 fw-light float-start'><strong className='fs-5 fw-light'>genres: </strong>{movie.genres.join()}</h1>
                    <img className='w-75' src={movie.image} alt="show" />
                  </div>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default AllMovies