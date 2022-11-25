const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema(
    {
        memberId: String,
        name: String,
        email: String,
        city: String
    },
    { versionKey: false }
);

const Member = mongoose.model('member', MemberSchema);

module.exports = Member;