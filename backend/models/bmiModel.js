// Import mongoose
const mongoose = require('mongoose');

// Define schema
const bmiSchema = new mongoose.Schema({
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  bmi: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create model
const BMI = mongoose.model('BMI', bmiSchema);

// Export model
module.exports = BMI;
