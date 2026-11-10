// Step 1: Import core and third-party dependencies
const express = require("express");

// path
const path = require("path");

// Step 2: Create Express application instance
const app = express();

// Step 3: Define the port the server 
const port = 3000;

// Step 4: Route handler for the homepage (GET /)
// When a user requests http://localhost:3000/, send the index.html file
app.get('/', (req, res) => {
  // res.sendFile requires an absolute path. 
  // path.join combines the current folder (__dirname) with 'public' and 'index.html'
  const homePath = path.join(__dirname, 'public', 'index.html');
  res.sendFile(homePath);
});