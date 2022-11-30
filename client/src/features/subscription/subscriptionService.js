import axios from 'axios';
const API_URL = 'http://localhost:5000/subscriptions/';

// Get subscriptions
const getSubscriptions = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

// Get subscription by id
const getSubscription = async (id) => {
    const response = await axios.get(API_URL + id)
    return response.data
}

// Create subscription
const createSubscription = async (sub) => {
    const response = await axios.post(API_URL, sub);
    return response.data;
}

const subscriptionService = {
    getSubscriptions,
    getSubscription,
    createSubscription,
}


export default subscriptionService;