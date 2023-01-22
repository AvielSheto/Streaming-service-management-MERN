import axios from 'axios';
const API_URL = "https://netflix-server.onrender.com"+"/subscriptions";

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
    const response = await axios.post("http://localhost:5000/subscriptions", sub);
    return response.data;
}

const subscriptionService = {
    getSubscriptions,
    getSubscription,
    createSubscription,
}


export default subscriptionService;