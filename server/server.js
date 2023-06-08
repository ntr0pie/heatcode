const express = require('express');
const config = require('dotenv').config();
const app = express();
const path = require('path');

// Middlewares
app.use(express.json()); // Body parser
app.use('/auth', require('./routes/authRouter'));

// Routes
app.get('/', (req, res) => {
    const projectDir = path.resolve(__dirname, '..');

    // For prod
    // res.sendFile(path.join(projectDir, 'client/build', 'index.html'));  
    
    // For dev
    res.redirect('http://localhost:3000');

});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server: Listening to port ${port}`);
})