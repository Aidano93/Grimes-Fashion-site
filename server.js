// dependencies
const mongoose = require('./connection');

const express = require('express');
const path = require('path');
require('dotenv').config();
const index = require('./routes');
const verifySub = require('./routes/verify-sub.js')

const app = express();
app.set('view engine', 'ejs');

// static middleware
app.use(express.static(path.join(__dirname, 'public')));

// routes middleware
app.use('/', index);
app.use('/verify-sub', verifySub);

// 404
app.use((req, res, next) => {
  const err = new Error('Requested page could not be found');
  err.status = 404;
  next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  const errStatus = err.status || 500;
  res.locals.status = errStatus;
  res.status(errStatus);
  // General error page rendered. specific error code set by ejs variables
  res.render('pages/error', {
    pageTitle: errStatus, 
    errCode: errStatus
  });
});

//port set via .env file or default 3000
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));