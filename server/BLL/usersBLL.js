const User = require('../models/userModel.js');

const getUsers = async ()=>{
    try{
        return user.find({})
    }catch(e){
        throw `Error: ${error}`;
    }
};

const getById = async (id)=>{
    try{
        return User.findById(id);
    }catch(e){
        throw `Error ${e}`
    }
}

const createUser = async (obj)=>{
    try {
        const user = new User(obj);
        await user.save();
        return 'Created'
    }catch(e){
        throw `Error ${e}`
    }
}

module.exports = {
    getUsers,
    createUser,
    getById
}