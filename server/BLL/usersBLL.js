const usersFile = require('../DAL/usersFile');

// Get all users
const getUsers = async () => {
    const { users } = await usersFile.getUsers()
    return users;
}

// Get user  
const getUser = async (id) => {
    const { users } = await usersFile.getUsers();
    const user = users.find((per) => per.id === id);
    return user;
}

// Create
const createUser = async (obj) => {
    const users = await getUsers();
    users.push(obj);
    const data = { users };
    const result = await usersFile.setUser(data);
    return result;
}

module.exports = { getUsers, getUser, createUser }