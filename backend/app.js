const express = require('express');
const  mongoose = require('mongoose');
const urlencoded = require('body-parser');
const cors = require('cors');

const routes = require('./routes/index');

const app = express();
app.use('/', routes);

app.use(cors())
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use(express.static('Allimages'))

module.exports = app;