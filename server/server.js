const express = require('express');
const config = require('dotenv').config();
const app = express();

// Middlewares
app.use(express.json()); // Body parser

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server: Listening to port ${port}`);
})