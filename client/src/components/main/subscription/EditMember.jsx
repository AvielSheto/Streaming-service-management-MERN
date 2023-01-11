import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateMember } from '../../../features/member/memberSlice';
// mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Loading from '../../loading/Loading';

function EditMember() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
  });

  const { name, email, city, } = formData;

  // Set member
  useEffect(() => {
    setFormData(location.state.member)
  }, []);

  // Update member
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.member
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate('/main/subscriptionsnav/subscriptions')
    }

  }, [isError, message, isSuccess, navigate]);

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
    dispatch(updateMember({ id: location.state.member._id, obj: memberData }))
  };

  if (isLoading) {
    return <Loading />
  };

  return (
    <div className='mb-2'>
      <Container className='form' maxWidth="xs">
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <h1 className='display-3'>Edit member</h1>
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
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Edit Member</Button>
            <Grid container>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default EditMember