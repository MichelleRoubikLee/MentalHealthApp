const express = require('express');
const app = express();


const connectDB = require('./startup/db');
const mongoose = require('mongoose')
const users = require('./routes/users');
const factors = require('./routes/factors');
const logs = require('./routes/logs');
const cors = require('cors');


connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/users', users);
app.use('/api/factors', factors);
app.use('/api/logs', logs);


var port = process.env.PORT || '5000'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
});
