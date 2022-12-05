import axios from 'axios';

// Get User 
const getUser = async (id) => {
    // Get data from database
    const { data: userDataDB } = await axios.get(`http://localhost:5000/api/users/${id}`);
    const userName = userDataDB.username;

    // Get data from users json file 
    const { data: jsonUserData } = await axios.get(`http://localhost:5000/users/${id}`);
    const firstName = jsonUserData.firstName;
    const lastName = jsonUserData.lastName;
    const sessionTimeOut = jsonUserData.sessionTimeOut;
    const createdDate = jsonUserData.createdDate;

    // Get user permissions
    const { data: userPermissions } = await axios.get(`http://localhost:5000/permissions/${id}`);
    const permissions = userPermissions.permissions;

    return { firstName, lastName, userName, sessionTimeOut, createdDate, permissions };
}

const userEditService = {
    getUser
}

export default userEditService;