const jsonfile = require('jsonfile');
const file = './data/users.json';

// Get all users
const getUsers = () => {
    return jsonfile.readFile(file);
};

// Create user
const setUser = async (obj) => {
    await jsonfile.writeFile(file, obj);
    return 'Done'
};

module.exports = { getUsers, setUser };