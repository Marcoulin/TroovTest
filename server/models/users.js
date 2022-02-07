const mongoose = require("mongoose"); 
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);  
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
    id: Schema.Types.ObjectId,
    username: {type: String, required: [true, "Veuillez saisir votre pseudo"]},
    email: {type: String, required: [true, "Veuillez saisir votre email"]},
    password: {type: String, required: [true, "Veuillez saisir votre mot de passe"]},
}).pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, salt); 
    next(); 
}); 

const Users = mongoose.model("users", UserSchema); 

module.exports = Users; 