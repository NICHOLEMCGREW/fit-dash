// weightRoute.js
const express = require('express');
const router = express.Router();
const weightController = require('../controllers/weightController');

router.post('/track', weightController.trackWeight);

module.exports = router;
