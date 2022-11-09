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

module.exports = { getAllPermissions, getPermission }