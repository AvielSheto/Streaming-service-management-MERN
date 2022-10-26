import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function ManageUsers() {
  return (
    <div className='p-2'>
      <h1 className='display-5'>Users</h1>
      <div className='d-flex '>
        <Link className='text-decoration-none ms-2' to='/main/usermangement/users'>
          <Card>
            <Card.Body className='p-1 display-6 fs-5'>All Users</Card.Body>
          </Card>
          <a href=""></a>
        </Link>

        <Link className='text-decoration-none ms-2' to='/main/usermangement/adduser'>
          <Card>
            <Card.Body className='p-1 display-6 fs-5'>Add User</Card.Body>
          </Card>
        </Link>
      </div>


      <Outlet />
    </div>
  )
}
