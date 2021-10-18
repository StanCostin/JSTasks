const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const comDB = require('./database/db');

dotenv.config({path:'./database/config.env'});

comDB();

app.use('/', require('./routes/authentification'));
app.use('/', require('./routes/employees'));
app.use('/', require('./routes/projects'));


app.listen(3001);