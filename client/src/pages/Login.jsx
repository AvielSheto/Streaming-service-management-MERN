import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Loading from '../components/loading/Loading';
// mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinkMui from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../style/_login.scss';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/main/moviesnav/movies')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            username,
            password
        }
        dispatch(login(userData))
    };

    if (isLoading) {
        return <Loading />
    };

    return (
        <div className='logIn'>
            <Container className='form p-5 mt-sm-3 mt-2' maxWidth="xs">
                <Box
                    sx={{
                        paddingY: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: 'blueGrey' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="user name"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={onChange}
                            value={username}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={onChange}
                            value={password}
                            autoComplete="current-password"
                        />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
                        <Grid container>
                            <Grid item xs>
                                <LinkMui href="#" variant="body2">
                                    Forgot password?
                                </LinkMui>
                            </Grid>
                            <Grid item>
                                <Link to={'/register'}>Don't have an account? Sign Up</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Login