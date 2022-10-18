const express = require('express');
const router = express.Router();
const memberBLL = require('../BLL/membersBLL');

router.get('/', async (req, res) => {
    try {
        const members = await memberBLL.getMembers();
        res.status(200).json(members);
    } catch (e) {
        res.status(500).json(e)
    }
});

module.exports = router;