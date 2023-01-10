import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
// mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createMember, reset } from '../../../features/member/memberSlice';
import Loading from '../../loading/Loading';

function AddMember() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
  });

  const { name, email, city, } = formData;

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.member
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      navigate('/main/subscriptionsnav/subscriptions')
    }

    return () => {
      dispatch(reset())
    }
  }, [isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const memberData = {
      name,
      email,
      city,
    }
    dispatch(createMember(memberData))
  };

  if (isLoading) {
    return <Loading />
  };

  return (
    <div>
      <Container className='form' maxWidth="xs">
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <h1 className='display-3'>Add Member</h1>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Full Name"
              type="text"
              onChange={onChange}
              value={name}
              autoComplete="username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="text"
              onChange={onChange}
              value={email}
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="city"
              label="City"
              type="text"
              onChange={onChange}
              value={city}
              autoComplete="city"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Add Member</Button>
            <Grid container>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default AddMember