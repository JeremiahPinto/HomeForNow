/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
const passport = require('passport');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

function jwtSignUser(user) {
  const ONE_WEEK = 7 * 24 * 60 * 60;
  return jwt.sign({ id: user._id }, process.env.jwt_secret, {
    expiresIn: ONE_WEEK,
  });
}

function loginHelper(res, next, user, error) {
  if (error) {
    next(error);
  } else {
    const newUser = {
      email: user.email,
      name: user.name,
      role: user.role,
    };
    res.send({
      user: newUser,
      token: jwtSignUser(user.toJSON()),
    });
  }
}

module.exports = {
  async register(req, res, next) {
    try {
      const user = new User();
      user.email = req.body.email;
      user.name = req.body.name;
      user.setPassword(req.body.password);
      const savedUser = await user.save();
      req.login(savedUser, err => loginHelper(res, next, savedUser, err));
    } catch (err) {
      res.status(500).send({
        error: err,
      });
    }
  },
  async login(req, res, next) {
    try {
      passport.authenticate('local', (err, user) => {
        if (err) {
          next(err);
        } else if (!user) {
          res.status(401).send({
            error: 'username/password pair does not match',
          });
        } else {
          req.login(user, error => loginHelper(res, next, user, error));
        }
      })(req, res, next);
    } catch (err) {
      res.status(500).send({
        error: err,
      });
    }
  },
};
