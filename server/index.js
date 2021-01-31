const express = require('express');
const app = express();


const connectDB = require('./startup/db');
const mongoose = require('mongoose')
const users = require('./routes/users');
const cors = require('cors');


connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/users', users);


var port = process.env.PORT || '5000'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
});
