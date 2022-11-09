const express = require('express');
const router = express.Router();

const usersBLL = require('../BLL/usersJSON_BLL');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await usersBLL.getUsers()
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json(e)
    }
})

// Get user
router.get('/:id', async (req, res) => {
    try {
        const user = await usersBLL.getUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;

