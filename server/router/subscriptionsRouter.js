const express = require('express');
const router = express.Router();

const { getSubscriptions, getSubscription, createSubscription } = require('../controllers/subscriptionsControllers')

router.get('/', getSubscriptions)
router.get('/:id', getSubscription)
router.post('/', createSubscription);

module.exports = router;