import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
// Mui 
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
// bootstrap
import Table from 'react-bootstrap/Table';

function Users() {
  const [users, setUsers] = useState();
  const [permissions, setPermissions] = useState();
  const navigate = useNavigate();

  const getAllUsers = async () => {
    const { data } = await axios.get('http://localhost:5000/users/');
    setUsers(data);
  }

  const getPermission = async () => {
    const { data } = await axios.get('http://localhost:5000/permissions/');
    setPermissions(data);
  }

  const handleDelete = async (id) => {
    // const {data} = await axios.post('');
  }

  const handleEdit = (id) => {
    navigate(`/main/editmovie/${id}`);
  }

  useEffect(() => {
    getAllUsers();
    getPermission();
  }, []);

  return (
    <div className='d-flex justify-content-center'>
      <div className='col-10 '>
        <h1>users</h1>
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
            {users?.map((user, index) => {
              return (
                <tr key={index}>
                  <td >{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.createdDate}</td>
                  <td>
                    <ul>
                      {/* {permissions?.filter((per) => per.id === user.id).permissions?.map((permission, index) => {
                        return (
                          <li key={index}>{permission.createMovie}</li>
                        )
                      })} */}
                    </ul>
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
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Users