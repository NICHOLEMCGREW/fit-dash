/* Require modules
---------------------------------------------------------- */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

/* Create the Express app
---------------------------------------------------------- */
const app = express();

/* Middleware (app.use)
---------------------------------------------------------- */
// Cross origin allowance
app.use(cors());
// Body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* MongoDB Connection
---------------------------------------------------------- */
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

/* Mount routes
---------------------------------------------------------- */
const bmiRoute = require('./routes/bmiRoute'); // Correctly require the route
app.use('/api/bmiRoute', bmiRoute); // Use the route as middleware

/* Serve static files from the 'frontend/dist' directory
---------------------------------------------------------- */
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

/* Tell the app to listen on the specified port
---------------------------------------------------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Express is listening to port', PORT);
});
