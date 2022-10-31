import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

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
      </div>
      <Outlet />
    </div>
  )
}

export default Movies