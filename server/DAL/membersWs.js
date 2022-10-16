const axios = require('axios');

// const membersUrl = 'https://jsonplaceholder.typicode.com/users';

const getAllMembers = ()=>{
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
}

module.exports = {getAllMembers};

