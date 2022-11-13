const permissionsFile = require('../DAL/permissionsFile');

// Get all permissions
const getAllPermissions = async () => {
    const { permissions } = await permissionsFile.getAllPermissions()
    return permissions
}

// Get permission by id 
const getPermission = async (id) => {
    const { permissions } = await permissionsFile.getAllPermissions()
    const permission = permissions.find((per) => per.id === id)
    return permission
}

// Create permission
const createPermission = async (obj) => {
    const permissions = await getAllPermissions()
    permissions.push(obj);
    const data = { permissions };
    const result = await permissionsFile.createPermission(data);
    return result;
}

module.exports = { getAllPermissions, getPermission, createPermission }