const usersFile = require('../DAL/usersFile');

// Get all users
const getUsers = async () => {
    const users = await usersFile.getUsers();
    return users;
}

// Get user  
const getUser = async (id) => {
    const users = await usersFile.getUsers();
    const user = users.find((per) => per.id === id);
    return user;
}

// Create user
const createUser = async (obj) => {
    const users = await getUsers();
    users.push(obj);
    const data = users;
    const result = await usersFile.setUser(data);
    console.log(obj);
    return result;
}

// Delete user
const deleteUser = async (id) => {
    const users = await usersFile.getUsers();
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        const result = await usersFile.setUser(users);
        return result;
    }
    return "User wasn't found";
}

// Update user 
const updateUser = async (obj) => {
    const users = await usersFile.getUsers();
    const index = users.findIndex((user) => user.id === obj.id);
    if (index !== -1) {
        users[index] = obj;
        const result = await usersFile.setUser(users);
        return result;
    }
    return "User wasn't found";
}

module.exports = { getUsers, getUser, createUser, deleteUser, updateUser }