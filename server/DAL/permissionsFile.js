const jsonFile = require('jsonfile');

const file = require('../data/permissions.json');


const getPermissions = () => {
    return jsonFile.readFile(file);
};

const setPermission = async (obj) => {
    await jsonFile.writeFile(file, obj);
    return 'Done'
};

module.exports = { getPermissions, setPermission };