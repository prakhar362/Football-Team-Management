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

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client/views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'client/public')));

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

// Import routes
const authRoutes = require('./server/routes/auth');
app.use('/api/auth', authRoutes);

// Routes
app.get('/HomePage', (req, res) => {
    res.render('HomePage/index');  // Renders 'client/views/HomePage/index.ejs'
});

app.get('/login', (req, res) => {
    res.render('Login/login');  // Renders 'client/views/Login/login.ejs'
});

app.get('/signup', (req, res) => {
    res.render('signup/index');  // Renders 'client/views/signup/index.ejs'
});

app.get('/dashboard', (req, res) => {
    // Sample news data
    const news = [
        {
            headline: "Messi loses fitness battle at Copa America, puts goal of playing 6th World Cup on hold - Hindustan Times",
            link: "https://www.hindustantimes.com/sports/football/messi-loses-fitness-battle-at-copa-america-puts-goal-of-playing-6th-world-cup-on-hold-101721091895524.html"
        },
        {
            headline: "Colombian Football Federation president among dozens arrested at Copa América final - CNN",
            link: "https://www.cnn.com/2024/07/16/sport/colombia-fa-president-arrested-copa-america-spt-intl/index.html"
        },
        {
            headline: "Every NC State football player's grade in EA Sports College Football 25 - 247Sports",
            link: "https://247sports.com/college/north-carolina-state/longformarticle/nc-state-football-ea-sports-college-football-25-grayson-mccall-kevin-concepcion-233861402/"
        }
    ];
    res.render('dashboard', { news });  // Passes news data to the view
});

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/HomePage`);
});

