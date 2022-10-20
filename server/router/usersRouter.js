const express = require('express');
const router = express.Router();

const usersBLL = require('../BLL/usersDB_BLL');

const { registerUser } = require('../controllers/userControllers')


// GET
// router.get('/', async (req, res) => {
//   try {
//     const users = await usersBLL.getUsers();
//     res.status(200).json(users);
//   } catch (e) {
//     res.status(500).json(e);
//   }
// });

// // POST
// router.post('/', async (req, res) => {
//   try {
//     const user = req.body;
//     const status = await usersBLL.createUser(user);
//     res.status(200).json(status);
//   } catch (e) {
//     res.status(500).json(e);
//   }
// });

module.exports = router;
