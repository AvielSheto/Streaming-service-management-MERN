const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema(
    {
        membersID: String,
        movies: [Object],
    },
    {versionKey: false}
)

const Subscription = mongoose.model('subscription', subscriptionSchema);

module.exports = Subscription;