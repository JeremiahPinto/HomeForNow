const mongoose = require('mongoose');

/**
 * Schema for youth people's requests for accommodation.
 * @type {mongoose.Schema}
 */
const requestSchema = new mongoose.Schema({
  // Youth's first name
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  // Gender
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'],
  },
  // Age
  dob: {
    type: Date,
    required: true,
    default: Date.now,
  },
  contact: {
    // Phone Number
    phoneNumber: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
  // Does the youth have a disability
  hasDisability: {
    type: Boolean,
    required: false,
  },
  // Child
  hasChild: {
    type: Boolean,
    required: true,
  },
  // True if requesting long term service, false otherwise
  isLongTerm: {
    type: Boolean,
    required: true,
  },
  // Date the request was opened
  openedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  // Date the request was closed
  closedAt: {
    type: Date,
    default: null,
    required: false,
  },
  loaction: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      default: [0, 0],
    },
  },
});

mongoose.model('Request', requestSchema);
