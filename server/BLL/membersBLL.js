const membersWS = require('../DAL/membersWs');
const Member = require('../models/memberModel')

const getMembers = async () => {
    let { data: members } = await membersWS.getMembers();
    members = members.map((member) => {
        const user = new Member({
            id: member.id,
            name: member.username,
            email: member.email,
            city: member.city
        });
        user.save();
    });
};

getMembers();
module.exports = { getMembers }

