import React from 'react'
import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

export default function Home() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }

  }, [user, navigate])
  return (
    <div>
      <h1 className='display-6'>main</h1>
      <div className='d-flex'>
        <Link className='text-decoration-none ms-2' to='/main/movies/allmovies'>
          <Card>
            <Card.Body className='p-1 display-6 fs-5'>Movies</Card.Body>
          </Card>
        </Link>
        <Link className='text-decoration-none mx-2' to='/main/subscription'>
          <Card>
            <Card.Body className='p-1 display-6 fs-5'>Subscription</Card.Body>
          </Card>
        </Link>
        <Link className='text-decoration-none' to='/main/usermangement/users'>
          <Card>
            <Card.Body className='p-1 display-6 fs-5'>User Management</Card.Body>
          </Card>
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
