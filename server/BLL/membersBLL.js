const membersWS = require('../DAL/membersWs');

const getMembers = async () => {
    let { data: members } = await membersWS.getMembers();
    members = members.map((member) => {
        return {
            id: member.id,
            name: member.username,
            email: member.email,
            city: member.city
        }
    })
    return members;
}

module.exports = { getMembers }

