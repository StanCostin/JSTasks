const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();

app.use('/', require('./routes/index'));

app.listen(3000);