import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Mui 
import TextField from '@mui/material/TextField';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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


  return (
    <div className='d-flex justify-content-center'>
      <div className='col-10 '>
        <TextField onChange={(e) => { setSearch(e.target.value) }} className='my-2' id="outlined-basic" label='Find Movie: ' variant="outlined" size="small" />
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
              <Col className='movie p-3'>
                <div key={movie._id}>
                <DropdownButton title={<SettingsOutlinedIcon/>} className='float-end'>
                  <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Delete</Dropdown.Item>
                </DropdownButton>
                  <h1 className='display-6 fs-3'>{movie.name}</h1>
                  <h1 className='display-6 fs-6 fw-normal float-start'><strong className='fs-5 fw-light'>premiered: </strong>{movie.premiered}</h1>
                  <h1 className='display-6 fs-6 fw-normal float-start'><strong className='fs-5 fw-light'>genres: </strong>{movie.genres.join()}</h1>
                  <img src={movie.image} alt="show" />
                </div>
              </Col>

            )
          })}
        </Row>
      </div>
    </div>)
}

export default AllMovies