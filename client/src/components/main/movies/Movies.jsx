import React from 'react'
import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import TextField from '@mui/material/TextField';

function Movies() {

  return (
    <div>
      <h1 className='display-6'>Movies</h1>
      <div className='d-flex'>
        <Link className='text-decoration-none ms-2' to='/main/movies/allmovies'>
          <Card>
            <Card.Body className='p-1 display-6 fs-5'>All Movies</Card.Body>
          </Card>
        </Link>
        <Link className='text-decoration-none mx-2' to='/main/movies/addmovie'>
          <Card>
            <Card.Body className='p-1 display-6 fs-5'>Add movie</Card.Body>
          </Card>
        </Link>
        <Card>
        <TextField id="outlined-basic" label="Find Movie: " variant="outlined" />
        </Card>
      </div>
      <Outlet />
    </div>
  )
}

export default Movies