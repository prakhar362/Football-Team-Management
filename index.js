const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const port = 3000;

app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "views" directory
app.use(express.static(path.join(__dirname, 'views')));
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Load environment variables from .env file
require('dotenv').config();

// Get the MongoDB URI from the environment variables
const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
    console.error('Error: MONGODB_URI is not defined.');
    process.exit(1); // Exit the process with an error code
}

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {console.log('MongoDB connected')
        console.log('Attempted MongoDB URI:', dbURI);
    })

    .catch(err => console.log('MongoDB connection error:', err)
    );

// Import routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Routes
app.get('/HomePage', (req, res) => {
    res.render('HomePage/index');
});

app.get('/login', (req, res) => {
    res.render('login/login');
});

app.get('/signup', (req, res) => {
    res.render('signup/index');
});

app.get('/dashboard', (req, res) => {
    // Sample news data
    const news = [
        {
            headline: "Messi loses fitness battle at Copa America, puts goal of playing 6th World Cup on hold - Hindustan Times",
            link: "https://www.hindustantimes.com/sports/football/messi-loses-fitness-battle-at-copa-america-puts-goal-of-playing-6th-world-cup-on-hold-101721091895524.html"
        },
        {
            headline: "Colombian Football Federation president among dozens arrested at Copa Am\u00e9rica final - CNN",
            link: "https://www.cnn.com/2024/07/16/sport/colombia-fa-president-arrested-copa-america-spt-intl/index.html"
        },
        {
            headline: "Every NC State football player's grade in EA Sports College Football 25 - 247Sports",
            link: "https://247sports.com/college/north-carolina-state/longformarticle/nc-state-football-ea-sports-college-football-25-grayson-mccall-kevin-concepcion-233861402/"
        }
    ]
    res.render('Dashboard/index', { news });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/HomePage`);
});
