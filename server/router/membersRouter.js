const express = require('express');
const router = express.Router();
const { getMembers } = require('../controllers/memberControllers')

router.get('/', getMembers)

module.exports = router;