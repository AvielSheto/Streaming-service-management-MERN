const mongoose = require('mongoose');

const MoveSchema = new mongoose.Schema(
    {
        id: String,
        name: String
    },
    {versionKey: false}
);

const Move = mongoose.model('move',MoveSchema);

module.exports = Move;