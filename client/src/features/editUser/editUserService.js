import axios from 'axios';
const API_URL_USERS_JSON = 'http://localhost:5000/users/'
const API_URL_PERMISSIONS_JSON = 'http://localhost:5000/permissions/'
const API_URL_USERS_DB = 'http://localhost:5000/api/users/'

// Update user
const updateUser = async (obj) => {
    const { id, firstName, lastName, userName, createdDate, sessionTimeOut, permissions } = obj;

    // Update user full name data
    const { data: usersRes } = await axios.put(API_URL_USERS_JSON + obj.id, { id, firstName, lastName, userName, createdDate, sessionTimeOut });

    // Update user permissions
    const { data: permissionsRes } = await axios.put(API_URL_PERMISSIONS_JSON + id, { id, permissions });

    // Update username in DB
    const { data: userNameRes } = await axios.put(API_URL_USERS_DB + id, { userName });

    return { usersRes, permissionsRes, userNameRes };
}

const userEditService = {
    updateUser,
}

export default userEditService;