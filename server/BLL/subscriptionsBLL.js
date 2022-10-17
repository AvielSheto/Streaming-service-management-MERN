const Subscription = require('../models/subscriptionModel');

const getSubscriptions = async () => {
    try {
        return Subscription.find({})
    } catch (e) {
        throw `Error: ${e}`
    }
}

const createSubscriptions = async (obj)=>{
    try{
        const subscription = new Subscription(obj);
        await subscription.save();
        return 'Created'
    }catch(e){
        throw `Error: ${e}`
    }
}


module.exports = {
    getSubscriptions,
    createSubscriptions
}