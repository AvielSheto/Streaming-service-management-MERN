const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema(
    {
        memberId:{
            type: String,
            required: [true, 'Please add member id']
        },
        name: {
            type: String,
            required: [true, 'Please add name']
        },
        email: {
            type: String,
            required: [true, 'Please add email']
        },
        city: {
            type: String,
            required: [true, 'Please add city']
        },
    },
    { versionKey: false }
);

const Member = mongoose.model('member', MemberSchema);

module.exports = Member;