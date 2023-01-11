const axios = require('axios');

const getMembers = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
}

module.exports = { getMembers };

