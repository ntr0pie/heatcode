const express = require('express');
const config = require('dotenv').config();
const app = express();
const path = require('path');
const cors = require('cors');

// Middlewares
app.use(cors({origin: 'http://localhost:3000'})); // CORS
app.use(express.json()); // Body parser
app.use('/auth', require('./routes/authRouter')); // Login or Sign Up

// Routes
app.get('/', (req, res) => {
    const projectDir = path.resolve(__dirname, '..');

    // Prod
    // res.sendFile(path.join(projectDir, 'client/build', 'index.html'));  
    
    // Dev
    res.redirect('http://localhost:3000');

});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server: Listening to port ${port}`);
})