const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('./User');

// Handle user signup
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.redirect('/dashboard/index.html');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Handle user login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.cookie('user_id', user._id);
                res.redirect('/dashboard/index.html');
            } else {
                res.status(401).send('Invalid Credentials');
            }
        } else {
            res.status(401).send('Invalid Credentials');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;