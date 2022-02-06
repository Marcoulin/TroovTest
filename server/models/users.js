const mongoose = require("mongoose"); 
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);  
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
    username: String, 
    email: String, 
    password: String
}).pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, salt); 
    console.log(this.password)
    next(); 
}); 

const Users = mongoose.model("users", UserSchema); 

module.exports = Users; 