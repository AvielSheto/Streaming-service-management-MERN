import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function Users() {
  const [users, setUsers] = useState()
  const [permissions, setPermissions] = useState()

  const getAllUsers = async () => {
    const { data } = await axios.get('http://localhost:5000/users/');
    setUsers(data);
  }

  const getPermission = async () => {
    const { data } = await axios.get('http://localhost:5000/permissions/')
    setPermissions(data)
  }
  console.log(permissions);

  useEffect(() => {
    getAllUsers()
    getPermission()

  }, [])

  return (
    <div>
      <h1>users</h1>
      <table class="table table-hover table-dark">
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
                    {permissions?.find((per)=>per.id === user.id).permissions?.map((item)=>{
                      return <li>{item}</li>
                    })}
                 
                  </ul>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>


    </div>
  )
}

export default Users