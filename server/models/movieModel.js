const mongoose = require('mongoose');

mongoose.Collection.dbName

const MoveSchema = new mongoose.Schema(
    {
        name: String,
        genres: [],
        image: String,
        premiered: String
    },
    { versionKey: false }
);

const Movie = mongoose.model('move', MoveSchema);

module.exports = Movie;
