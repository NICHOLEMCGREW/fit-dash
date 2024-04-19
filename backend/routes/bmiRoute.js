// bmiRoute.js

const express = require('express');
const router = express.Router();
const bmiController = require('../controllers/bmiController');

// Route for calculating BMI
router.post('/calculate', bmiController.calculateBMI);

module.exports = router;
