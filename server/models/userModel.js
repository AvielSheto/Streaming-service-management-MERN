const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    userName:{
      type: String,
      required: [true, 'Please add an user name'],
      unique: true
    },
    password:{
      type: String,
      required: [true, 'Please add an password'],
      unique: true
    }
  },
  { timestamps: true }
);

const model = mongoose.model('user', UserSchema);

module.exports = model;
