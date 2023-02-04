const jsonfile = require('jsonfile');
const file = './data/permissions.json';

// Get all permissions
const getAllPermissions = async () => {
    const permissions = await jsonfile.readFile(file);
    return permissions;
};

// Update permissions file
const setPermission = async (obj)=>{
    await jsonfile.writeFile(file,obj)
    return 'Done'
};

// Get permission by id 
const getPermission = async (id) => {
    const permissions = await getAllPermissions();
    const permission = await permissions.find((per) => per.id === id);
    return permission;
}

// Create permission
const createPermission = async (obj) => {
    const permissions = await getAllPermissions();
    permissions.push(obj);
    const data =  permissions ;
    const result = await setPermission(data);
    return result;
}

// Delete permission
const deletePermission = async (id) => {
    const permissions = await getAllPermissions();
    const index = permissions.findIndex((permission) => permission.id === id);
    if (index !== -1) {
        permissions.splice(index, 1);
        const result = await setPermission(permissions);
        return result;
    }
    return "User wasn't found";
}

// Update permissions 
const updatePermission = async (obj) => {
    const permissions = await getAllPermissions();
    const index = permissions.findIndex((permission) => permission.id === obj.id);
    if (index !== -1) {
        permissions[index] = obj;
        const result = await setPermission(permissions);
        return result;
    }
    return "User wasn't found";
};

module.exports = {getAllPermissions, getPermission, createPermission, deletePermission, updatePermission };