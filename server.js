
import express from ("express");

import path from ("path");
import {fileURLToPath} from 'url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});


app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname,'public','contact.html'));
});

// Step 6: Start listening for incoming connections
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});