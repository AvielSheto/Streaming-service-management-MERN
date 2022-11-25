const axios = require('axios');

const getSubscriptions = () => {
    return axios.get('http://localhost:5000/subscriptions/')
}

module.exports = { getSubscriptions }