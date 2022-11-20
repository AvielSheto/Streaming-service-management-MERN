const express = require('express');
const router = express.Router();
const usersBLL = require('../BLL/usersBLL');

// GET
// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await usersBLL.getUsers();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json(e);
    }
})

// Get user
router.get('/:id', async (req, res) => {
    try {
        const user = await usersBLL.getUser(req.params.id);
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json(e);
    }
})

// POST
// Create user
router.post('/', async (req, res) => {
    try {
        const user = req.body;
        const status = await usersBLL.createUser(user);
        res.status(201).json(status);
    } catch (e) {
        res.status(500).json(e);
    }
})

// PUT
// Update user 
router.put('/:id', async (req, res) => {
    try {
        const user = req.body;
        const status = await usersBLL.updateUser(user);
        res.status(201).json(status);
    } catch (e) {
        res.status(500).json(e);
    }
})

// DELETE
// Delete user
router.delete('/:id', async (req, res)=>{
    try {
        const status = await usersBLL.deleteUser(req.params.id);
        res.status(200).json(status)
    } catch (e) {
        res.status(500).json(e);
    }
})

module.exports = router;

