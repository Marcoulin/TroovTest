const Users = require("../models/users"); 
const jwt = require("jsonwebtoken"); 
const bcrypt = require('bcryptjs');
const config = require("../auth.config"); 

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
    const validPassword = await bcrypt.compare(password, user.password) ? {secret: jwt.sign({
        id: user.id, 
        name: user.username, 
        email: user.email
    }, config.secret)} : {secret: null}; 

    return validPassword; 
    
}