// weightController.js
const Weight = require('../models/Weight');

const trackWeight = async (req, res) => {
    try {
        // Retrieve data from request body
        const { userId, weight } = req.body;
        
        // Validate input data
        if (!userId || !weight) {
            throw new Error("Missing required parameters: userId, weight");
        }

        // Create a new weight entry
        const newWeight = new Weight({
            userId,
            weight,
            date: new Date()
        });

        // Save the new weight entry to the database
        await newWeight.save();

        res.status(200).json({ message: "Weight tracked successfully" });
    } catch (error) {
        console.error("Error tracking weight:", error.message);
        res.status(400).json({ error: error.message });
    }
};

module.exports = { trackWeight };

