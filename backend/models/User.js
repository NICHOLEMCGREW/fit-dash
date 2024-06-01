// User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    // Add other user information fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
