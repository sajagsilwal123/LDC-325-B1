const express = require('express');
const  mongoose = require('mongoose');
const urlencoded = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');
const app = express();
app.use(cors())
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use(express.static('Allimages'))
let db = require('./database/db');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', routes);

module.exports = app;