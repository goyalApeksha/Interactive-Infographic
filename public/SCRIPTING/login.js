const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const loginBtn = document.querySelector(".login button");
const signupBtn = document.querySelector(".signup button");
const backLayer = document.querySelector(".back-layer");

signupBtn.addEventListener("click", () => {
loginForm.classList.remove("active");
signupForm.classList.add("active");
backLayer.style.clipPath = "inset(0 0 0 50%)";
});

loginBtn.addEventListener("click", () => {
signupForm.classList.remove("active");
loginForm.classList.add("active");
backLayer.style.clipPath = "";
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from 'public' folder
app.use(express.static('public'));

// Handle login request
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // For now, accept any email and password
    if (email && password) {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid email or password.');
    }
});

// Handle signup request
app.post('/signup', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Save the new user in the database (this is a placeholder for now)
    res.send(`Sign up successful! Welcome, ${firstName} ${lastName}.`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

document.addEventListener("DOMContentLoaded", () => {
    const signUpBtn = document.querySelector(".sign-up-btn");
    const loginBtn = document.querySelector(".login-btn");

    const loginForm = document.querySelector(".login-form");
    const signupForm = document.querySelector(".signup-form");

    // Show sign up form and hide login form
    signUpBtn.addEventListener("click", () => {
        loginForm.style.display = "none";
        signupForm.style.display = "block"; // Ensure form is displayed
    });

    // Show login form and hide sign up form
    loginBtn.addEventListener("click", () => {
        signupForm.style.display = "none";  // Hide sign-up form
        loginForm.style.display = "block";  // Show login form
    });
});
