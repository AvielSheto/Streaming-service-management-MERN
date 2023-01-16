import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div>
      <Navbar className='py-1' collapseOnSelect expand="md" bg="black" variant="dark">
        <Container>
          <Navbar.Brand className='border-0' >
            <Link className='text-decoration-none display-6 text-danger' to='/'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAAB8CAMAAADXRDUkAAAAb1BMVEUAAADjCRTmCRTRCBLfCRPpCRTtCRUuAQTwCRW3CBCgBg4tAgReAwgQAQFcBAhDAwXWCBJvBAqpBw9nBAmWBg2PBg0gAQLHCBEyAgS8BxA7AgV1BAqxBxBNAweIBQwJAAAnAQN8BQsbAQNTAwf5Chbd5grsAAAE30lEQVR4nO2Z25aiOhBAISQYaLFBQOQiis7/f+OQKsK9z6Cdbtc6q/aLCQbilqRSAcsiCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCOIrTruW81XXzqp6g3IA5RE31Wp+sD353p84btwevMLBj+usS2waqOJ9VFYM55rADx3H4VFXq1UtPEL5wJ0pnurTWcDj9nAaTg+G1cmyPuAKWTHtMcCmD1WOoRzuu68eeG5tyO3oMsZE1tVSVXM9KO8lmyCyj/aoYHOk+mN8d9Y4b912cIXwc+YGl7APqvzpqIpb6R8DX/0JLDMchd0iCu2mKp2bKo9g4MbsOS64ielB4an7JlVx4QaX4ODWnSdx2D5C9ZWoLEOgG0vf5PaAisRRmOJvORh2y+7vcbMcBpdWxSveNjWaTbrZfP+VG9fY4KYrw3dicOND43yjWwRtbHWNEoulKTXtJpJ1N+aUseag5jgWEwH/dqTK0Vm7ieO+b/wItrmdsHu/LWbwRXg37cbCYN0NbtaCCNy8IaCBm5tMW21xwzNZWFgxjvDUkJjVu9kS1psVt/PaWeA2nhmvu8UwvmVpVRixDXkptBtG3qfcmPcdN71en2AoiuwMkcQ9GvJSaDebqx/6i259pMfIL7pIa2wBsEZudmO9x+2EywoaevPk8zv0bkwNyne4Wd6wNrLGjBUyuIWXVbfb2lkG51ubm8heLTQj1TGMSbdZXd+aCCgn2fy6G8t84OgX/3Yb7tst08mONLUDmLupzcDXeYkdjc9ad7OZQNjlGTcr6bI7Zt9+wA26+3P7r3xykgqh23x96+HPuV3C7t+djWkjbgwyVtd/zm2xdr/qZuU4KLnJBUC7CZ+D4bvcYuiKeWbV0M314YPH9dJN76S3jEnhIuLxnFuNE8PYpnTilpRwI5KlW//QZEMsYXmdAvXuKbc7BkpYhcy7+YWacSxLVtbuAJkkDOtu81iw1a3p1gDX7BKg3TALZ7lYuq2dZTQvCXRiwhxTT4EQ7dYMweC33Yq+azlr+k20m2W/za0a0gez0aR3G/Xwy/uA0fLBjT0HUvRuB/kmtwQXAAyVRqNJ7/bhsCfdzDxTOHdP8TCM5eaeBI3chtRi833b6Da7wmyPU0LVjUpMFYzvu8Et4utuwf2++3yUdZLeXnKzeZhleeUndfkYuXUS1xwT2vMnPnk1mS4Pbne9jZrlJW0mJaV0Xenspm4bxyRMJqHSMcmDhdsF2ohUZ+32j7j1g3KeT+ofOHpU+aSbJrwu3HDdVsl1BE1k/CNuhVxz61m4Lcbkes41usLSrcAeYV0bvRow7maFbLubfsem3WS73ZbPu/n4HgdCaYqT4PEjbnjxNTe1yXGdkZvLOOfV4NZ4VVXls9cUO6lmKkzWdt/T/h0LtzPM8XbjCM2hQ4PRZOx2mY5JqX6OCnNh6KhIl76SNFxPxWUft1HWr/Ish1ii/ilhwxoAWyvb7eYY5uvrq84rjN1ObTxuu5U51C750U/rJtpfCpMLanvTmzr1fdirhVLdUG0TsbHp9xm7WYl0eVb5ePHArNEqh32TVJl+dVM4oy2WAY4w8roxbvKB9SskIbeFMPYuP/H8tImLfzf8De6XfZn6nqk3p6dfGHlPEhjd6BAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDE/4y/31FZd+0oHp8AAAAASUVORK5CYII=" alt="freepnglogos" width={100} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle className='border-0' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav >
                {user ? (
                  <Nav>
                    <Link></Link>
                    <Nav.Link href="/" onClick={onLogout}>
                      <div className='d-flex align-items-center'><LogoutIcon className='me-2' />Logout</div>
                    </Nav.Link>
                    <Nav.Link href="/">{user.username}</Nav.Link>
                    <Avatar className='m-1' sx={{ bgcolor: deepOrange[500] }}>{user.username[0]}</Avatar>
                  </Nav>
                ) : (
                  <Nav >
                    <Nav.Link>
                      <Link to={'/login'} className='text-decoration-none text-slate-300 hover:text-red-500'>
                        <div className='d-flex align-items-center '><ExitToAppIcon className='me-2' />Login</div>
                      </Link>
                    </Nav.Link>

                    <Nav.Link >
                      <Link to={'/register'} className='text-decoration-none text-slate-300 hover:text-red-500'>
                        <div className='d-flex align-items-center'> <AccountCircleIcon className='me-2' />Register</div>
                      </Link>
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
