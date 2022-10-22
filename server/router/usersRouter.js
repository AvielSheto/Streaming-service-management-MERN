const express = require('express');
const router = express.Router();
// const usersBLL = require('../BLL/usersDB_BLL');

const { registerUser, loginUser, getMe } = require('../controllers/userControllers')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router;
