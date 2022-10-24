import axios from 'axios';
const API_URL = 'http://localhost:8000/api/users/';

// Register user 
const register = async (userData)=>{
    const response = await axios.get(API_URL, userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    };
    return response.data
};

const authService = {
    register,
};

export default authService;