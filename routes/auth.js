const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust path if necessary
const router = express.Router({mergeParams:true});

// Signup Route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the user
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        // Optionally, create and set a token
        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });

        // Redirect to the dashboard
        res.redirect('/dashboard');

    } catch (error) {
        res.status(400).send('Error: ' + error.message);
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        // Create a token
        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });

        // Set a cookie with the token and redirect to dashboard
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/dashboard');
    } catch (error) {
        res.status(400).send('Error: ' + error.message);
    }
});

module.exports = router;
