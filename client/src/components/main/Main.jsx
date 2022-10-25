import React from 'react'
import { Link, Outlet } from 'react-router-dom';
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function home() {
  return (
    <div>
      <h1>main</h1>
      <button>manage users</button>
      <button>movies</button>
      <button>subscription</button>
      <button></button>
      
        <Outlet/>
    </div>
  )
}
