const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files from the 'frontend' folder
app.use(express.static(path.join(__dirname, 'frontend')));

// MongoDB URI from environment variables
const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
    console.error('Error: MONGODB_URI is not defined.');
    process.exit(1); // Exit if no MongoDB URI is provided
}

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit on MongoDB connection error
    });

// Routes to serve the static HTML files
app.get('/HomePage', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/homepage/index.html')); // Serve HomePage HTML file
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/login/login.html')); // Serve login HTML file
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/signup/index.html')); // Serve signup HTML file
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dashboard/index.html')); // Serve dashboard HTML file
});

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/HomePage`);
});
