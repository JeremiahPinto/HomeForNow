const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();
require('./models/db');
require('./config/passport');

// const index = require('./routes/index');
// const services = require('./routes/services');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'randomsecret',
  resave: true,
  saveUninitialized: false,
  cookie: {
    secure: false, // TODO: set this to true once the website uses https
    httpOnly: true,
    maxAge: 3600000, // One hour
  },
})); // SECRET SHOULD BE STORED IN ENVIRONMENT VARIABLES
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

/**
 * Use our routes defined in /routes/index.js
 *
 * Namespaced under '/'
 */
// app.use('/', index);

// app.use('/service', services);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  next();
});

module.exports = app;
