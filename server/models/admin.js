const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  Analytics: {
    type: String,
    required: false,
  },
});

mongoose.model('Admin', adminSchema);
