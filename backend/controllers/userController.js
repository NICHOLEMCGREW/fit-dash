// userController.js
const User = require('../models/User');

const getUserInfo = async (req, res) => {
    try {
        // Retrieve user information from the database
        const userInfo = await User.findOne({ userId: req.params.userId });
        res.status(200).json(userInfo);
    } catch (error) {
        console.error("Error fetching user information:", error.message);
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getUserInfo };
