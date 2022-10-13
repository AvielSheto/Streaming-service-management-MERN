const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    city: String,
  },
  { versionKey: false }
);

const model = mongoose.model('user', UserSchema);

module.exports = model;
