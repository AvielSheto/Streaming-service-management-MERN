const mongoose = require('mongoose');

const MoveSchema = new mongoose.Schema(
    {
        name: String,
        genres: [],
        image: String,
        premiered: String
    },
    {versionKey: false}
);

const Move = mongoose.model('move',MoveSchema);

module.exports = Move;