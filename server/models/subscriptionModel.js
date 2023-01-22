const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema(
    {
        memberId: {
            type: String,
            required: [true, 'Please add name']
        },
        movie: {
            type: Object,
            required: [true, "Please add movie"]
        }
    },
    { timestamps: true },
    { versionKey: false }
);

const model = mongoose.model('subscription', SubscriptionSchema);

module.exports = model;