const mongoose = require('mongoose');
const crypto = require('crypto');

// If we need to split this up: https://stackoverflow.com/questions/38639248/mongoose-model-for-multi-types-of-users

/**
 * General schema for all users of the application that have accounts e.g.
 * service providers, connect services, admins
 * Role:
 *  admin: Have full access to everything on the site and have CRUD operations on all services
 *  service_provider: Can perform CRUD operations on their own service, can
 *                    view homeless youth who need a bed
 *  connect: Have acces to all the service_provider vacancies,
 *           but have no way of changing them themselves
 */
const userSchema = new mongoose.Schema({
  // Name
  name: {
    type: String,
    required: true,
  },
  // E-mail address
  email: {
    type: String,
    unique: true,
    required: true,
  },
  // Hash for password
  hash: {
    type: String,
    required: true,
  },
  // Salt for password
  salt: {
    type: String,
    required: true,
  },
  // The user's role
  role: {
    type: String,
    default: 'admin',
    enum: ['service', 'admin', 'street_connect'],
  },
  // Service providers that this user works for
  linkedObject: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

userSchema.methods.setPassword = function setPassword(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function validPassword(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

mongoose.model('User', userSchema);
