// bmiController.js

// Controller function to calculate BMI
const calculateBMI = (req, res) => {
    try {
        // Retrieve data from request body
        const { weight, feet, inches } = req.body;
        
        // Validate input data
        if (!weight || !feet || !inches) {
            throw new Error("Missing required parameters: weight, feet, inches");
        }

        // Convert height to inches
        const heightInInches = parseInt(feet) * 12 + parseInt(inches);
        
        // Convert weight to kg (1 pound = 0.453592 kg)
        const weightInKg = weight * 0.453592;

        // Check if height or weight is zero
        if (heightInInches === 0 || weightInKg === 0) {
            throw new Error("Height or weight cannot be zero");
        }

        // Calculate BMI
        const bmi = (weightInKg / (heightInInches * heightInInches)) * 703;

        // Send the calculated BMI as the response
        res.status(200).json({ bmi });
    } catch (error) {
        // Handle errors
        console.error("Error calculating BMI:", error.message);
        res.status(400).json({ error: error.message });
    }
};

// Export the controller function
module.exports = { calculateBMI };
