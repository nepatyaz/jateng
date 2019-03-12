const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./modules/dbConfig');
const jwt = require('jsonwebtoken');
const pesanError = require('./modules/messages');


//deklarasi variabel global
global.mysqlConnection = db
global.jwt = jwt
global.pesan = pesanError;

//konfigurasi cors
const allowCrossDomain = require('./modules/cors'); 
app.use(allowCrossDomain);

//middleware untuk http request 
app.use(bodyparser.json()); // support json encoded bodies
app.use(bodyparser.urlencoded({ extended: true })); // support encoded bodies

//konfigurasi module sesuai route 
const tesRoutes = require('./api/test');
const userRoutes = require('./api/user');
const branchRoutes = require('./api/branch');

// Rute yang harus menangani permintaan
app.use('/test', tesRoutes);
app.use('/user', userRoutes);
app.use('/branch', branchRoutes);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;