import axios from 'axios';
const API_URL = 'http://localhost:5000/api/users/';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Create user
const createUser = async(userData) =>{
  const response = await axios.post('http://localhost:5000/api/users/create', userData)
  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Logout user
const logout = ()=>{
  localStorage.removeItem('user')
}

// Get User 
const getUser = async (userId)=>{
  const response = await axios.get(API_URL + userId)
  return response.data;
}

const authService = {
  register,
  createUser,
  login,
  logout,
  getUser
}

export default authService
