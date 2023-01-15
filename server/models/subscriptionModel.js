const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema(
    {
        memberId: String,
        movie: Object,
    },
    { versionKey: false },
    { timestamps: true }
)

const Subscription = mongoose.model('subscription', subscriptionSchema);

module.exports = Subscription;