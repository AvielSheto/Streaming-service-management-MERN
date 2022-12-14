const mongoose = require('mongoose');

const MoveSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add name']
        },
        genres: {
            type: [String],
            require: [true, "Please add genres"]
        },

        image: {
            type: String,
            require: [true, 'Please add genres']

        },
        premiered:{
            type: String,
            require: [true, 'Please add premiered']

        } 
    },
    { versionKey: false }
);

const model = mongoose.model('movie', MoveSchema);

module.exports = model;
