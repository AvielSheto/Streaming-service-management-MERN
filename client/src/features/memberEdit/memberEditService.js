import axios from 'axios';
const API_URL = 'http://localhost:5000/api/members/';

// Get member
const getMember = async (id) => {
    const response = await axios.get(API_URL + id);
    return response.data
}

const memberEditService ={
    getMember,
}

export default memberEditService