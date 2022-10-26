import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const USERS_URL = 'http://localhost:5000/api/users/'


function Users() {
  const [users, setUsers] = useState()

  const getAllUsers = async () => {
    const { data } = await axios.get(USERS_URL);
    setUsers(data);
  }

  useEffect(() => {
    getAllUsers()

  }, [])
  console.log(users);


  return (
    <div>
      <h1>users</h1>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}

export default Users