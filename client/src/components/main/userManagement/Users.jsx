import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers, deleteUser, reset } from '../../../features/user/userSlice';
import { toast } from 'react-toastify';
// Mui 
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// bootstrap
import Table from 'react-bootstrap/Table';
import Loading from '../../loading/Loading';

function Users() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState();

  const { users, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.user
  )

  // console.log(users);
  
  // Get users
  useEffect(() => {
    dispatch(getUsers())
    getPermissions();

    if (isError) {
      toast.error(message)
    }

    return () => {
      dispatch(reset())
    }

  }, [isError, message, navigate, dispatch]);


  const getPermissions = async () => {
    const { data } = await axios.get('http://localhost:5000/permissions/');
    setPermissions(data);
  }

  const handleDelete = async (id) => {
    dispatch(deleteUser(id));
  }

  const handleEdit = (id) => {
    navigate(`/main/usermanagement/edituser/${id}`);
    dispatch(reset())
  }

  if (isLoading) {
    <Loading />
  }

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='col-10 '>
          <h1 className='ps-2'>Users</h1>
          <Table striped bordered hover size="md">
            <thead>
              <tr>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Created date</th>
                <th scope="col">Permissions</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
             { users?.map((user, index) => {
                return (
                  <tr key={index}>
                    <td >{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.createdDate}</td>
                    <td>
                      <pre>
                        <code>
                          {JSON.stringify(permissions?.filter((per) => per.id === user.id)[0].permissions, null, 2)}
                        </code>
                      </pre>
                    </td>
                    <td className='text-center'>
                      <DropdownButton title={<SettingsOutlinedIcon />} className='float-end m-0'>
                        <Dropdown.Item onClick={() => handleEdit(user.id)}>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDelete(user.id)}>Delete</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>
                )
              })}
              {/* {users.length > 1 ? (
              ) : (
                <h1>There is no users or you not connect to the server</h1>
              )} */}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default Users