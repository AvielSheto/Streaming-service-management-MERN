import axios from 'axios';
const API_URL = "https://netflix-server.onrender.com"+"/api/members/";

// Get members
const getMembers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

// Create movie
const createMember = async (member) => {
    const response = await axios.post(API_URL, member);
    return response.data;
}

// Update member 
const updateMember = async (id, obj) => {
    const response = await axios.put(API_URL + id, obj);
    return response.data;
}

// Delete member
const deleteMember = async (id) => {
    const response = await axios.delete(API_URL + id);
    return response.data;
}

const memberService = {
    getMembers,
    createMember,
    updateMember,
    deleteMember
}

export default memberService;