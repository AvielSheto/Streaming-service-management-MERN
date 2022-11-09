const jsonfile = require('jsonfile');
const file = './data/users.json'

// Get users
const getUsers = () => {
    return jsonfile.readFile(file);
};

const setUser = async (obj) => {
    await jsonfile.writeFile(file, obj);
    return 'Done'
};

module.exports = { getUsers, setUser };