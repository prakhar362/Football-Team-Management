const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const port = 3000;

app.set('view engine', 'ejs');

// These lines allow you to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// Set the views directory (now pointing to the parent views folder)
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection
const dbURI = 'mongodb+srv://prakharshri2005:mgxVLlfnZel8VvhL@cluster0.4rpwgtp.mongodb.net/'; // Ensure this string is properly formatted
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Import the authentication routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Route to serve the HomePage.ejs file
app.get('/HomePage', function (req, res) {
    res.render('HomePage/index'); // Use the correct path for the EJS file
});

// Route for the login page
app.get('/login', (req, res) => {
    res.render('login/login'); // Update this to match the correct path
});

//Use auth routes
app.use('/api/auth', authRoutes);

app.get('/dashboard', (req, res) => {
    // Sample news data
    const news = [
        { headline: "Team Wins Championship!", link: "https://example.com/news1" },
        { headline: "Transfer Market Updates", link: "https://example.com/news2" }
    ];
    res.render('Dashboard/index', { news });
});


// Start the server
app.listen(port, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log(`It's running, go to http://localhost:${port}/HomePage`);
    }
});
