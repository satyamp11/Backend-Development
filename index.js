const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', function (req, res) {
    res.render('index');
});


// Routes
app.get('/about/:username', function (req, res) {
    req.params.username
    res.send(`about ${req.params.username}`);
});


// Start server
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});