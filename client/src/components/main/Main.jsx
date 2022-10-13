import React from 'react'
import { Link } from 'react-router-dom';
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
                  <Link to={'/products'} className='link' >Products</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={'/customers'} className='link'>Costumers</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={'/purchased'} className='link'>Purchases</Link>
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
    </div>
  )
}
