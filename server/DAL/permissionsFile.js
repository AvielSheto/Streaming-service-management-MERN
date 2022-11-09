const jsonfile = require('jsonfile');
const file = './data/permissions.json'

// Get all permissions
const getAllPermissions = () => {
    return jsonfile.readFile(file);
};

module.exports = { getAllPermissions };