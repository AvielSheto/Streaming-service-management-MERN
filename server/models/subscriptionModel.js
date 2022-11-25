const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema(
    {
        memberId: String,
        movie: Object,
    },
    { timestamps: true },
    { versionKey: false }
)

const Subscription = mongoose.model('subscription', subscriptionSchema);

module.exports = Subscription;