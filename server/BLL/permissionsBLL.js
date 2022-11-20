const permissionsFile = require('../DAL/permissionsFile');

// Get all permissions
const getAllPermissions = async () => {
    const permissions = await permissionsFile.getAllPermissions()
    return permissions;
}

// Get permission by id 
const getPermission = async (id) => {
    const permissions = await permissionsFile.getAllPermissions();
    const permission = permissions.find((per) => per.id === id);
    return permission;
}

// Create permission
const createPermission = async (obj) => {
    const permissions = await getAllPermissions();
    permissions.push(obj);
    const data =  permissions ;
    const result = await permissionsFile.setPermission(data);
    return result;
}

// Delete permission
const deletePermission = async (id) => {
    const permissions = await permissionsFile.getAllPermissions();
    const index = permissions.findIndex((permission) => permission.id === id);
    if (index !== -1) {
        permissions.splice(index, 1);
        const result = await permissionsFile.setPermission(permissions);
        return result;
    }
    return "User wasn't found";
}

// Update permissions 
const updatePermission = async (obj) => {
    const permissions = await permissionsFile.getAllPermissions();
    const index = permissions.findIndex((permission) => permission.id === obj.id);
    if (index !== -1) {
        permissions[index] = obj;
        const result = await permissionsFile.setPermission(permissions);
        return result;
    }
    return "User wasn't found";
}

module.exports = { getAllPermissions, getPermission, createPermission, updatePermission, deletePermission }