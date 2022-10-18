const usersFile = require('../DAL/usersFile');

const getUsers = async () => {
    const { users } = await usersFile.getUsers()
    return users;
}

const addUser = async (obj) => {
    const users = await usersFile.getUsers();
    users.push(obj);
    const data = { users };
    const result = await usersFile.setUser(data);
    return result;
}

module.exports = { getUsers, addUser }