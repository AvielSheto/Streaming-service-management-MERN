const membersWS = require('../DAL/membersWS');
const Member = require('../models/memberModel')

const getMembers = async () => {
    let { data: members } = await membersWS.getMembers();
    Member.collection.drop();
    members = members.map((member) => {
        const user = new Member({
            id: member.id,
            memberId: member.id,
            name: member.username,
            email: member.email,
            city: member.address.city
            
        });
        user.save();
    });
};
getMembers()

module.exports = { getMembers };
