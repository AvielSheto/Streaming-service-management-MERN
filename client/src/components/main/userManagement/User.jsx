import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../loading/Loading';
import { toast } from 'react-toastify';
import { deleteUser, reset } from '../../../features/user/userSlice';
// Mui 
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import EditIcon from '@mui/icons-material/Edit';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function User(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState();

  // Delete user
  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    getPermissions()
    if (isError) {
      toast.error(message)
    }
  }, [isError, message]);

  const getPermissions = async () => {
    const { data } = await axios.get( "https://netflix-server.onrender.com+"+"/permissions/");
    setPermissions(data.filter((per) => per.id === props.user.id)[0].permissions)
  };

  if (isLoading) {
    <Loading />
  };

  const handleClick = (id, action) => {
    if (action === 'Edit') {
      navigate(`/main/usermanagement/edituser`, {
        state: {
          user: props.user,
          permissions: permissions
        },
      });
      dispatch(reset())
    };

    if (action === 'Delete') {
      dispatch(deleteUser(id));
    }
  };

  const actions = [
    { icon: <EditIcon />, name: 'Edit' },
    { icon: <DeleteOutlineIcon />, name: 'Delete' },
  ];

  return (
    <div className="mx-auto right-0 m-1 w-60 mb-3">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width={32} height={32} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z" /></svg>
          <p className="pt-2 text-lg font-semibold text-gray-50">{props.user.firstName} {props.user.lastName}</p>
          <p className="text-sm text-gray-100">Created Date: {props.user.createdDate}</p>
          <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
              direction='down'
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', top: -190, right: 2 }}
              icon={<SpeedDialIcon />}>
              {actions.map((action) => (
                <SpeedDialAction
                  onClick={() => { handleClick(props.user.id, action.name) }}
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  id={props.user.id} />
              ))}
            </SpeedDial>
          </Box>
        </div>
        <div className="border-b">
          <h1 className='display-6 fs-5 fw-normal text-center pt-3'>Permissions</h1>
          <div className='d-flex justify-content-center'>
            <hr className='col-10' />
          </div>
          <div className='d-flex justify-content-evenly'>
            <div className='p-2'>
              <h1 className='display-6 fs-5 fw-normal'>Subscriptions:</h1>
              <p><strong className='fw-normal fs-6'>View Subscriptions: </strong>{permissions?.viewSubscription.toString()}</p>
              <p><strong className='fw-normal fs-6'>Create subscriptions:</strong> {permissions?.createSubscription.toString()}</p>
              <p><strong className='fw-normal fs-6'>Delete Subscriptions:</strong>  {permissions?.deleteSubscription.toString()}</p>
              <p><strong className='fw-normal fs-6'>Update subscription:</strong>  {permissions?.updateSubscription.toString()}</p>
            </div>
            <div className='p-2'>
              <h1 className='display-6 fs-5 fw-normal'>Movies:</h1>
              <p>View Movies: {permissions?.viewMovie.toString()}</p>
              <p>Create movies: {permissions?.createMovie.toString()}</p>
              <p>Delete movies: {permissions?.deleteMovie.toString()}</p>
              <p>Update movie: {permissions?.updateMovie.toString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User