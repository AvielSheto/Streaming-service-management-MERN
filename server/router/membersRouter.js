const express = require('express');
const router = express.Router();
const { getMembers, createMember, updateMember, deleteMember, getMember } = require('../controllers/memberControllers');

router.get('/', getMembers);
router.get('/:id', getMember);
router.post('/', createMember);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

module.exports = router;