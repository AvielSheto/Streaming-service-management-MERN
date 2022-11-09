const usersFile = require('../DAL/usersFile');

// Get users
const getUsers = async () => {
    const { users } = await usersFile.getUsers()
    return users;
}

const getUser = async (id) => {
    const { users } = await usersFile.getUsers();
    const user = users.find((per) => per.id === id);
    return user;
}

const addUser = async (obj) => {
    const users = await usersFile.getUsers();
    users.push(obj);
    const data = { users };
    const result = await usersFile.setUser(data);
    return result;
}

module.exports = { getUsers, getUser, addUser }