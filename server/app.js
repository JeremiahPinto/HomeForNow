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
const index = require('./routes/index');

app.use('/', index);

const roles = require('./middleware/roles');
/**
 * Use our routes defined in /routes/service.js
 *
 * Namespaced under '/service'
 *
 * Uses passport tokens to make sure the user has access to these routes,
 * and checks they are the correct role.
 */
const service = require('./routes/service');

app.use('/service', passport.authenticate('jwt', { session: false }), roles.checkRole('service'), service);

/**
 * Use our routes defined in /routes/admin.js
 *
 * Namespaced under '/admin'
 *
 * Uses passport tokens to make sure the user has access to these routes,
 * and checks they are the correct role.
 */
const admin = require('./routes/admin');

app.use('/admin', passport.authenticate('jwt', { session: false }), roles.checkRole('admin'), admin);

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
  res.send(err);
  next();
});

module.exports = app;
