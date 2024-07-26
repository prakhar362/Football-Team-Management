const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');

// These lines allow you to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')));


// Set the views directory (now pointing to the parent views folder)
app.set('views', path.join(__dirname, 'views'));

// Route to serve the index.ejs file
app.get('/HomePage', function(req, res) {
    res.render('HomePage/index'); // Use the correct path for the EJS file
});

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log(`It's running, go to http://localhost:${port}/HomePage`);
    }
});
