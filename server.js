const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // Import mysql2
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // For parsing JSON bodies

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',  // Replace with your MySQL username
    password: 'your_password', // Replace with your MySQL password
    database: 'user_auth'     // The database you created
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL Database.');
});

// Handle signup request
app.post('/signup', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Hash password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).send('Error hashing password.');

        // Insert new user into the database
        const user = { first_name: firstName, last_name: lastName, email: email, password: hash };
        db.query('INSERT INTO users SET ?', user, (error, results) => {
            if (error) {
                console.error('Error saving user to database:', error);
                return res.status(500).send('Error saving user to database.');
            }
            res.send(`Sign up successful! Welcome, ${firstName} ${lastName}.`);
        });
    });
});

// Handle login request
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find user in the database
    db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
        if (error) {
            console.error('Error retrieving user:', error);
            return res.status(500).send('Error retrieving user.');
        }
        if (results.length === 0) return res.status(401).send('Invalid email or password.');

        const user = results[0];

        // Compare password with hashed password
        bcrypt.compare(password, user.password, (err, match) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).send('Error comparing passwords.');
            }
            if (!match) return res.status(401).send('Invalid email or password.');

            // Create JWT
            const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' }); // Use a secret key for signing
            res.json({ message: 'Login successful!', token });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
