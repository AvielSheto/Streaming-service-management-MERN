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
      <Navbar style={{ padding:"", display: "flex", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.850)", }} expand="lg" variant="dark">
          <Container >
            <Navbar.Toggle style={{ border: "none" }} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to={'/main/movies'} className='text-text-decoration-none' >Movies</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={'/main/subscriptions'} className='link'>Subscriptions</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={'/main/manageusers'} className='link'>ManageUsers</Link>
                </Nav.Link>
                <NavDropdown style={{ color: "white" }} title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/signIn">Sign In</NavDropdown.Item>
                  <NavDropdown.Item href="/signUp">Sign Up</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item onClick={logout}>log out</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <Outlet/>
    </div>
  )
}
