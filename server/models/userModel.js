const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    userName: String,
    password: String,
  },
  { versionKey: false }
);

const model = mongoose.model('user', UserSchema);

module.exports = model;
