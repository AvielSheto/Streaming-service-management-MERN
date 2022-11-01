import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// mui 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <div>
      <Navbar className='p-0' collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
          <Navbar.Brand className='border-0' href="#home">
            <Link className='text-decoration-none display-6 text-danger' to='/'>NETFLIX</Link>
          </Navbar.Brand>
          <Navbar.Toggle className='border-0' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav >
                {user ? (
                  <Nav>
                    <Nav.Link href="/login" onClick={onLogout}><FaSignOutAlt />  Logout</Nav.Link>
                    <Nav.Link href="/">{user.username}</Nav.Link>
                    <Avatar className='m-1' sx={{ bgcolor: deepOrange[500] }}>{user.username[0]}</Avatar>
                  </Nav>
                ) : (
                  <Nav >
                    <Nav.Link href="/login"><FaSignInAlt /> Login</Nav.Link>
                    <Nav.Link href="/register"><FaUser /> Register</Nav.Link>
                  </Nav>
                )}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
