import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// mui 
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
      <Navbar className='py-1' collapseOnSelect expand="md" bg="black" variant="dark">
        <Container>
          <Navbar.Brand className='border-0' >
            <Link className='text-decoration-none display-6 text-danger' to='/'>Netflix</Link>
          </Navbar.Brand>
          <Navbar.Toggle className='border-0' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav >
                {user ? (
                  <Nav>
                    <Nav.Link href="/" onClick={onLogout}>
                      <div className='d-flex align-items-center'><LogoutIcon className='me-2'/>Logout</div>
                    </Nav.Link>
                    <Nav.Link href="/">{user.username}</Nav.Link>
                    <Avatar className='m-1' sx={{ bgcolor: deepOrange[500] }}>{user.username[0]}</Avatar>
                  </Nav>
                ) : (
                  <Nav >
                    <Nav.Link href="/login">
                      <div className='d-flex align-items-center'><ExitToAppIcon className='me-2'/>Login</div>
                    </Nav.Link>
                    <Nav.Link href="/register">
                      <div className='d-flex align-items-center'> <AccountCircleIcon className='me-2'/>Register</div>
                    </Nav.Link>
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
