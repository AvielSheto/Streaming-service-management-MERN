import axios from 'axios';
const API_URL = 'http://localhost:5000/api/members/';

// Get member
const getMember = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL + id, config);
    return response.data
}

const memberEditService = {
    getMember,
}

export default memberEditService