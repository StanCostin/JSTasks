const express = require('express');
const app = express();
const dotenv = require('dotenv');

app.use(express.json());

const comDB = require('./database/db');

dotenv.config({path:'./database/config.env'});

comDB();

app.use('/', require('./routes/employees'));
app.use('/', require('./routes/projects'));

app.listen(3000);