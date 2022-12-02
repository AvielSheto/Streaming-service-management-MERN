const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username:{
      type: String,
      required: [true, 'Please add an user name'],
      unique: true
    },
    password:{
      type: String,
    }
  },
  { timestamps: true },
  { versionKey: false }
);

const model = mongoose.model('user', userSchema); 

module.exports = model;
