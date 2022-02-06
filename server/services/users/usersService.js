const Users = require("../../models/users"); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.createUsers = async (user) => {
    try{
        var usr = await Users.create(user)
        console.log(usr); 
    }catch(error){
        console.log(error); 
    }
}; 

exports.getByEmailAndPassword = async (email, password) => {
    const user = await Users.findOne({email}); 
    const validPassword = await bcrypt.compare(password, user.password); 
    return validPassword; 
}