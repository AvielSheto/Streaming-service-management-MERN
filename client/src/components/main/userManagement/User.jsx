import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../loading/Loading';
import { toast } from 'react-toastify'
// Mui 
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { deleteUser, reset } from '../../../features/user/userSlice';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
// bootstrap
import Col from 'react-bootstrap/Col';

function User(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState();

  // Delete user
  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.user
  )
  useEffect(() => {
    getPermissions()
    if (isError) {
      toast.error(message)
    }
  }, [isError, message]);

  const handleEdit = (id) => {
    navigate(`/main/usermanagement/edituser/${id}`);
    dispatch(reset())
  }

  const handleDelete = async (id) => {
    dispatch(deleteUser(id));
  }

  const getPermissions = async () => {
    const { data } = await axios.get('http://localhost:5000/permissions/');
    setPermissions(data.filter((per) => per.id === props.user.id)[0].permissions)
  }

  if (isLoading) {
    <Loading />
  }

  return (
    <div className="mx-auto right-0 m-1 w-60 mb-3">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width={32} height={32} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z" /></svg>
          <p className="pt-2 text-lg font-semibold text-gray-50">{props.user.firstName} {props.user.lastName}</p>
          <p className="text-sm text-gray-100">Created Date: {props.user.createdDate}</p>
          <div className="mt-4">
            <a className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              <a onClick={() => handleEdit(props.user.id)}><ModeEditOutlineOutlinedIcon /></a>
            </a>
            <a className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              <a onClick={() => handleDelete(props.user.id)}><DeleteOutlineOutlinedIcon /></a>
            </a>
          </div>
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