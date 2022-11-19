import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../loading/Loading';
import { getUser, reset as editReset } from '../../../features/user/userSlice';
import { updateUser, reset } from '../../../features/editUser/editUserSlice';

// mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function EditUser() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        sessionTimeOut: 0,
        createdDate: '',
    })
    const [state, setState] = useState({
        viewSubscription: false,
        createSubscription: false,
        deleteSubscription: false,
        updateSubscription: false,
        viewMovie: false,
        createMovie: false,
        deleteMovie: false,
        updateMovie: false,
    })
    const { firstName, lastName, userName, sessionTimeOut, createdDate } = formData;

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.user
    )

    const { isEditError, isEditSuccess, isEditLoading, editMessage } = useSelector(
        (state) => state.userEdit
    )

    useEffect(() => {
        dispatch(getUser(id))

        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            setState(user?.permissions)
            setFormData(user)
        }

        return () => {
            dispatch(reset())
        }


    }, [isError, isSuccess, message]);


    // Get user data 
    useEffect(() => {
        if (isEditError) {
            toast.error(editMessage)
        }

        if (isEditSuccess) {
            navigate('/main/usermanagement/managementnav/users')
        }

        return () => {
            dispatch(editReset())
        }

    }, [isEditError, isEditSuccess, isEditLoading, editMessage, navigate, dispatch]);


    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {
            id,
            firstName,
            lastName,
            userName,
            createdDate,
            sessionTimeOut,
            permissions: state
        }
        dispatch(updateUser(userData))
        console.log(userData.permissions);
    }

    if (isLoading || isEditLoading) {
        return <Loading />
    }

    return (
        <div>
            <Container className='form' maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <h1 className='display-3'>Edit user</h1>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="firstName"
                            label="First Name"
                            type="text"
                            onChange={onChange}
                            value={firstName}
                            autoComplete="firstName"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            type="text"
                            onChange={onChange}
                            value={lastName}
                            autoComplete="lastName"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="userName"
                            label="User Name"
                            type="text"
                            onChange={onChange}
                            value={userName}
                            autoComplete="userName"
                        />
                        <TextField
                            className='col-12 mt-3'
                            label="Session time"
                            type="number"
                            onChange={(e) => { setFormData({ ...formData, sessionTimeOut: e.target.value }) }}
                            value={sessionTimeOut}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <h1 className='display-6 fs-2 mt-1'>Permissions</h1>
                        <div>
                            <FormControl component="fieldset" variant="standard">
                                <FormGroup >
                                    <div className='d-flex'>
                                        <div className='d-flex flex-column'>
                                            <FormControlLabel
                                                control={
                                                    <Switch checked={state.viewSubscription} onChange={handleChange} name="viewSubscription" />
                                                }
                                                label="View Subscription"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch checked={state.createSubscription} onChange={handleChange} name="createSubscription" />
                                                }
                                                label="Create Subscription"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch checked={state.deleteSubscription} onChange={handleChange} name="deleteSubscription" />
                                                }
                                                label="Delete Subscription"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch checked={state.updateSubscription} onChange={handleChange} name="updateSubscription" />
                                                }
                                                label="Update Subscription"
                                            />
                                        </div>

                                        <div className='d-flex flex-column'>
                                            <FormControlLabel
                                                control={
                                                    <Switch checked={state.viewMovie} onChange={handleChange} name="viewMovie" />
                                                }
                                                label="View Movie"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch checked={state.createMovie} onChange={handleChange} name="createMovie" />
                                                }
                                                label="Create Movie"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch checked={state.deleteMovie} onChange={handleChange} name="deleteMovie" />
                                                }
                                                label="Delete Movie"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch checked={state.updateMovie} onChange={handleChange} name="updateMovie" />
                                                }
                                                label="Update Movie"
                                            />
                                        </div>
                                    </div>
                                </FormGroup>
                            </FormControl>
                        </div>

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Edit user</Button>
                        <Grid container>

                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default EditUser