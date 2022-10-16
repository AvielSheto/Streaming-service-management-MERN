const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema(
    {
        membersID: String,
        movies: [],
    },
    {versionKey: false}
)

const subscription = mongoose.model('subscription', subscriptionSchema);

module.exports = subscription;