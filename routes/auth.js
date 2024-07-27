const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Handle user signup
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Create a new user
        const user = new User({ username, email, password });
        await user.save();

        // Redirect to dashboard after signup
        res.redirect('/dashboard');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Handle user login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.cookie('user_id', user._id); // Set a cookie to keep user logged in
            res.redirect('/dashboard');
        } else {
            res.status(401).send('Invalid Credentials');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
