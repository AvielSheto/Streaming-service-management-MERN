const jsonfile = require('jsonfile');
const file = './data/permissions.json'

// Get all permissions
const getAllPermissions = () => {
    return jsonfile.readFile(file);
};

// Create permissions 
const createPermission = async (obj)=>{
    await jsonfile.writeFile(file,obj)
    return 'Done'
}

module.exports = { getAllPermissions, createPermission };